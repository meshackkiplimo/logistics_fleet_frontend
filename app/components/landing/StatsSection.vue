<script setup lang="ts">
import { GlobeAltIcon, MapPinIcon, ChatBubbleLeftRightIcon, ArrowTrendingUpIcon } from '@heroicons/vue/24/outline';

const stats = [
  { value: '99.9%', label: 'On-Time Rate',       sub: 'Above industry average' },
  { value: '180+',  label: 'Countries Served',    sub: 'Truly global coverage'  },
  { value: '50K+',  label: 'Monthly Shipments',   sub: 'Trusted worldwide'      },
  { value: '24/7',  label: 'Live Support',         sub: 'Always here for you'   },
];

const features = [
  {
    id: 'global-reach',
    icon: GlobeAltIcon,
    title: 'Global Reach',
    description: 'Extensive network spanning 180+ countries with strategic hubs on every continent.',
    accent: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
  },
  {
    id: 'real-time-tracking',
    icon: MapPinIcon,
    title: 'Real-Time Tracking',
    description: 'Advanced GPS and IoT sensors provide minute-by-minute location and condition updates.',
    accent: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
  },
  {
    id: 'support',
    icon: ChatBubbleLeftRightIcon,
    title: '24×7 Global Support',
    description: 'Dedicated multilingual support teams available around the clock, every day of the year.',
    accent: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
  },
];
</script>

<template>
  <section
    class="relative py-20 sm:py-28 bg-slate-950 overflow-hidden"
    aria-labelledby="stats-heading"
  >
    <!-- Subtle background texture -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.08)_0%,_transparent_60%)]" />
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.06)_0%,_transparent_60%)]" />
    <!-- Faint grid -->
    <div class="absolute inset-0 opacity-[0.025]"
      style="background-image:url(&quot;data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E&quot;)"
    />

    <Container class="relative z-10">

      <!-- ── Section header ── -->
      <div class="text-center mb-14">
        <span class="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
          <ArrowTrendingUpIcon class="w-4 h-4" />
          Performance
        </span>
        <h2
          id="stats-heading"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
        >
          Operational Precision at
          <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Every Touchpoint
          </span>
        </h2>
        <p class="mt-4 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Our commitment to excellence is reflected in every aspect of our operations,
          from initial pickup to final delivery.
        </p>
      </div>

      <!-- ── Stats banner ── -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-16">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col items-center justify-center py-8 px-6 bg-slate-900/80 hover:bg-slate-800/80 transition-colors duration-300 group"
        >
          <div class="text-4xl sm:text-5xl font-black text-white mb-1 group-hover:scale-105 transition-transform duration-300">
            {{ stat.value }}
          </div>
          <div class="text-sm font-semibold text-slate-300 mb-0.5">{{ stat.label }}</div>
          <div class="text-xs text-slate-600">{{ stat.sub }}</div>
        </div>
      </div>

      <!-- ── Two-column: image + feature cards ── -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        <!-- Left: image -->
        <div class="relative order-2 lg:order-1">
          <!-- Decorative ring -->
          <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 blur-xl" />

          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <NuxtImg
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=800&fit=crop"
              alt="Global logistics network visualization"
              class="w-full h-[380px] sm:h-[440px] object-cover"
              loading="lazy"
              width="1200"
              height="800"
              sizes="sm:100vw lg:50vw"
              format="webp"
              quality="85"
            />
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            <!-- Overlaid live badge -->
            <div class="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-sm border border-white/10">
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span class="text-xs font-semibold text-white">Live Network Status</span>
            </div>

            <!-- Bottom metric overlay -->
            <div class="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
              <div>
                <div class="text-5xl font-black text-white leading-none">99.9<span class="text-2xl text-blue-400">%</span></div>
                <div class="text-sm text-slate-300 mt-1 font-medium">On-Time Delivery Rate</div>
              </div>
              <div class="text-right">
                <div class="text-xs text-slate-400 mb-1">vs. industry avg</div>
                <div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                  <svg class="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span class="text-xs font-bold text-green-400">+12.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: feature cards -->
        <div class="flex flex-col gap-4 order-1 lg:order-2">
          <article
            v-for="item in features"
            :key="item.id"
            :class="[
              'group relative flex items-start gap-5 p-5 rounded-2xl',
              'border transition-all duration-300 cursor-default',
              'hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30',
              'bg-white/[0.02] border-white/5'
            ]"
          >
            <!-- Gradient accent line on left -->
            <div :class="['absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-300', item.accent]" />

            <!-- Icon -->
            <div :class="['w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border', item.bg, item.border]">
              <component :is="item.icon" :class="['w-5 h-5', item.text]" aria-hidden="true" />
            </div>

            <!-- Text -->
            <div>
              <h3 class="text-base font-bold text-white mb-1.5">{{ item.title }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed">{{ item.description }}</p>
            </div>
          </article>

          <!-- Bottom trust strip -->
          <div class="mt-2 flex items-center gap-3 px-5 py-4 rounded-2xl bg-blue-600/10 border border-blue-500/20">
            <div class="w-9 h-9 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-4.5 h-4.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-blue-300">ISO 9001:2015 Certified</p>
              <p class="text-xs text-slate-500">Audited operations across all hubs</p>
            </div>
          </div>
        </div>

      </div>
    </Container>
  </section>
</template>
