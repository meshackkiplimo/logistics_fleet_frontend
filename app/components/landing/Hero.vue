<script setup lang="ts">
import { ref } from 'vue';
import { MagnifyingGlassIcon, ClockIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/vue/24/outline';

const trackingNumber = ref('');

const handleTrackShipment = () => {
  console.log('Tracking shipment:', trackingNumber.value);
};
</script>

<template>
  <section
    class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900"
    aria-labelledby="hero-heading"
  >
    <!-- Background gradient layers -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950" />
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.08)_0%,_transparent_60%)]" />

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)" />

    <!-- Decorative glow orbs -->
    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

    <!-- Content — centered both axes -->
    <div class="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 py-28 text-center">

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
        <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        Real-Time Global Tracking Now Available
      </div>

      <!-- Headline -->
      <h1
        id="hero-heading"
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
      >
        Global Logistics with
        <span class="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Mathematical Precision
        </span>
      </h1>

      <!-- Subheading -->
      <p class="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Advanced logistics solutions powered by real-time data analytics and AI-driven route optimization for seamless global supply chain management.
      </p>

      <!-- Tracking Search Bar -->
      <div class="w-full max-w-2xl mx-auto mb-12">
        <form
          @submit.prevent="handleTrackShipment"
          role="search"
          aria-label="Shipment tracking search"
        >
          <div class="flex flex-col sm:flex-row gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-2">
            <div class="flex-1 flex items-center px-4 py-2 min-h-[44px]">
              <MagnifyingGlassIcon class="w-5 h-5 text-slate-500 mr-3 flex-shrink-0" aria-hidden="true" />
              <input
                v-model="trackingNumber"
                type="text"
                placeholder="Enter tracking number (e.g., LT123456789)"
                class="flex-1 bg-transparent outline-none text-white placeholder-slate-500 text-sm sm:text-base"
                aria-label="Tracking number"
                id="tracking-input"
              />
            </div>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              class="whitespace-nowrap min-h-[44px] !bg-blue-600 hover:!bg-blue-500 !rounded-lg"
              aria-label="Submit tracking search"
            >
              Track Shipment
            </Button>
          </div>
        </form>
      </div>

      <!-- Service Indicators -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        role="list"
        aria-label="Key service features"
      >
        <div class="flex items-center gap-3" role="listitem">
          <div class="w-10 h-10 bg-blue-500/15 border border-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <ClockIcon class="w-5 h-5 text-blue-400" />
          </div>
          <span class="text-slate-300 font-medium text-sm sm:text-base">24/7 Support</span>
        </div>
        <div class="hidden sm:block w-px h-6 bg-slate-700" aria-hidden="true" />
        <div class="flex items-center gap-3" role="listitem">
          <div class="w-10 h-10 bg-blue-500/15 border border-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <MapPinIcon class="w-5 h-5 text-blue-400" />
          </div>
          <span class="text-slate-300 font-medium text-sm sm:text-base">Real-Time Tracking</span>
        </div>
        <div class="hidden sm:block w-px h-6 bg-slate-700" aria-hidden="true" />
        <div class="flex items-center gap-3" role="listitem">
          <div class="w-10 h-10 bg-blue-500/15 border border-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <GlobeAltIcon class="w-5 h-5 text-blue-400" />
          </div>
          <span class="text-slate-300 font-medium text-sm sm:text-base">180+ Countries</span>
        </div>
      </div>

    </div>

    <!-- Bottom fade to next section -->
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
  </section>
</template>
