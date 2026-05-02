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
  <article 
    class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[280px] sm:min-h-[320px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
    role="listitem"
    tabindex="0"
    :aria-label="`${service.title}: ${service.description}`"
  >
    <NuxtImg 
      :src="service.image" 
      :alt="`${service.title} - Professional logistics service for ${service.description}`" 
      class="w-full h-full min-h-[280px] sm:min-h-[320px] object-cover"
      loading="lazy"
      width="800"
      height="600"
      sizes="sm:100vw md:50vw lg:25vw"
      format="webp"
      quality="80"
      placeholder
      role="img"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
      <div class="absolute bottom-0 p-5 sm:p-6 text-white">
        <h3 class="text-lg sm:text-xl font-semibold mb-2">{{ service.title }}</h3>
        <p class="text-sm text-gray-200 leading-relaxed">{{ service.description }}</p>
      </div>
    </div>
  </article>
</template>
