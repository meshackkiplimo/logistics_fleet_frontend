<script setup lang="ts">
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Props {
  service: Service;
}

defineProps<Props>();
</script>

<template>
  <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img 
      :src="service.image" 
      :alt="`${service.title} - ${service.description}`" 
      class="w-full h-64 object-cover"
      loading="lazy"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
      <div class="absolute bottom-0 p-6 text-white">
        <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
        <p class="text-sm text-gray-200">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>
