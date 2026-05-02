<script setup lang="ts">
import { TruckIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from '@heroicons/vue/24/outline';
import { Component } from 'vue';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface Props {
  feature: Feature;
}

const props = defineProps<Props>();

const iconMap: Record<string, Component> = {
  'truck': TruckIcon,
  'map-pin': MapPinIcon,
  'clock': ClockIcon,
  'check-circle': CheckCircleIcon
};

const iconComponent = iconMap[props.feature.icon] || TruckIcon;
</script>

<template>
  <article 
    class="text-center p-5 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
    role="listitem"
  >
    <div class="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-blue-100 rounded-full flex items-center justify-center" aria-hidden="true">
      <component :is="iconComponent" class="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
    </div>
    <h3 class="text-base sm:text-lg font-semibold mb-2 text-gray-900">{{ feature.title }}</h3>
    <p class="text-gray-600 text-sm leading-relaxed">{{ feature.description }}</p>
  </article>
</template>
