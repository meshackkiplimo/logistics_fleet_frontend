<script setup lang="ts">
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

interface Props {
  service: Service;
}

defineProps<Props>();
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 h-80 cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
    role="listitem"
    tabindex="0"
    :aria-label="`${service.title}: ${service.description}`"
  >
    <!-- Image -->
    <NuxtImg
      :src="service.image"
      :alt="service.title"
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
      width="800"
      height="600"
      sizes="sm:100vw md:50vw lg:25vw"
      format="webp"
      quality="80"
    />

    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent transition-opacity duration-300" />

    <!-- Mode badge -->
    <div class="absolute top-4 left-4">
      <span class="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-wide">
        {{ service.tag }}
      </span>
    </div>

    <!-- Text content -->
    <div class="absolute bottom-0 left-0 right-0 p-5 text-white">
      <h3 class="text-lg font-bold mb-1.5 leading-tight">{{ service.title }}</h3>
      <p class="text-sm text-slate-300 leading-relaxed">{{ service.description }}</p>
    </div>
  </article>
</template>
