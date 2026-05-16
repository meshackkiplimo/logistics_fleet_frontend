<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid';

const features = [
  {
    id: 'global-reach',
    title: 'Global Reach',
    description: 'Extensive network spanning 180+ countries with strategic hubs on every continent'
  },
  {
    id: 'real-time-tracking',
    title: 'Real-Time Tracking',
    description: 'Advanced GPS and IoT sensors provide minute-by-minute location and condition updates'
  },
  {
    id: 'support',
    title: '24×7 Global Support',
    description: 'Dedicated support teams available around the clock in multiple languages'
  }
];

const stats = [
  { value: '99.9%', label: 'On-Time Rate' },
  { value: '180+', label: 'Countries' },
  { value: '50K+', label: 'Shipments / mo' },
];
</script>

<template>
  <section
    class="py-20 sm:py-28 bg-white"
    aria-labelledby="stats-heading"
  >
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        <!-- Left: Content -->
        <div>
          <span class="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Performance</span>
          <h2 id="stats-heading" class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Operational Precision at<br class="hidden sm:block" /> Every Touchpoint
          </h2>
          <p class="text-slate-500 text-lg mb-8 leading-relaxed">
            Our commitment to excellence is reflected in every aspect of our operations, from initial pickup to final delivery.
          </p>

          <ul class="space-y-5" role="list" aria-label="Operational features">
            <li v-for="item in features" :key="item.id" class="flex items-start gap-4" role="listitem">
              <div class="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircleIcon class="w-5 h-5 text-green-500" aria-hidden="true" />
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-0.5">{{ item.title }}</h3>
                <p class="text-slate-500 text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </li>
          </ul>

          <!-- Stats row -->
          <div class="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-100">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl font-extrabold text-blue-700 mb-1">{{ stat.value }}</div>
              <div class="text-xs text-slate-500 font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right: Image with overlay card -->
        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <NuxtImg
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=800&fit=crop"
              alt="Global logistics network visualization"
              class="w-full h-[420px] sm:h-[480px] object-cover"
              loading="lazy"
              width="1200"
              height="800"
              sizes="sm:100vw lg:50vw"
              format="webp"
              quality="85"
            />
            <!-- Dark overlay -->
            <div class="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-transparent" />
          </div>

          <!-- Floating stat card -->
          <div
            class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100 max-w-[220px]"
            role="figure"
            aria-label="On-time delivery performance metric"
          >
            <div class="text-4xl font-black text-blue-700 mb-1">99.9%</div>
            <div class="text-sm font-semibold text-slate-800">On-Time Delivery Rate</div>
            <p class="text-xs text-slate-400 mt-1">Consistently above industry average</p>
          </div>

          <!-- Decorative element -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-2xl -z-10" />
        </div>

      </div>
    </Container>
  </section>
</template>
