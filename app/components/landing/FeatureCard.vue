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
  <div class="text-center p-6 bg-white rounded-lg">
    <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center" aria-hidden="true">
      <component :is="iconComponent" class="w-8 h-8 text-blue-600" />
    </div>
    <h3 class="text-lg font-semibold mb-2 text-gray-900">{{ feature.title }}</h3>
    <p class="text-gray-600 text-sm">{{ feature.description }}</p>
  </div>
</template>
