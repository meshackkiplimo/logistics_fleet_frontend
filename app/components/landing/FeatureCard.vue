<script setup lang="ts">
import { TruckIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from '@heroicons/vue/24/outline';
import { Component } from 'vue';

interface Feature {
  id: string;
  icon: string;
  step: string;
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
    class="relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
    role="listitem"
  >
    <!-- Step number -->
    <div class="absolute top-5 right-6 text-4xl font-black text-slate-100 select-none group-hover:text-blue-50 transition-colors duration-300">
      {{ feature.step }}
    </div>

    <!-- Icon -->
    <div class="w-12 h-12 mb-5 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300" aria-hidden="true">
      <component :is="iconComponent" class="w-6 h-6 text-blue-600" />
    </div>

    <h3 class="text-base font-bold mb-2 text-slate-900">{{ feature.title }}</h3>
    <p class="text-slate-500 text-sm leading-relaxed">{{ feature.description }}</p>
  </article>
</template>
