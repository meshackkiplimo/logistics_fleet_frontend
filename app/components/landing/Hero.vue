<script setup lang="ts">
import { ref } from 'vue';
import { MagnifyingGlassIcon, ClockIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/vue/24/outline';

const trackingNumber = ref('');

const handleTrackShipment = () => {
  // Tracking functionality will be implemented in a future task
  console.log('Tracking shipment:', trackingNumber.value);
};
</script>

<template>
  <section 
    class="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-blue-50 to-white"
    aria-labelledby="hero-heading"
  >
    <Container>
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-0">
        <!-- Headline - Minimum 14px on mobile -->
        <h1 id="hero-heading" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
          Global Logistics with <span class="text-blue-800">Mathematical Precision</span>
        </h1>
        
        <!-- Subheading - Minimum 14px on mobile -->
        <p class="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Advanced logistics solutions powered by real-time data analytics and AI-driven route optimization for seamless global supply chain management
        </p>
        
        <!-- Search Bar - Improved mobile spacing -->
        <div class="max-w-2xl mx-auto mb-10 sm:mb-12">
          <form 
            @submit.prevent="handleTrackShipment"
            role="search"
            aria-label="Shipment tracking search"
          >
            <div class="flex flex-col sm:flex-row gap-3 bg-white rounded-lg shadow-lg p-2">
              <div class="flex-1 flex items-center px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-gray-200 min-h-[44px]">
                <MagnifyingGlassIcon class="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" aria-hidden="true" />
                <input
                  v-model="trackingNumber"
                  type="text"
                  placeholder="Enter tracking number (e.g., LT123456789)"
                  class="flex-1 outline-none text-slate-900 placeholder-gray-400 text-sm sm:text-base"
                  aria-label="Tracking number"
                  id="tracking-input"
                />
              </div>
              <Button 
                variant="primary" 
                size="lg"
                type="submit"
                class="whitespace-nowrap min-h-[44px]"
                aria-label="Submit tracking search"
              >
                Track Your Shipment
              </Button>
            </div>
          </form>
        </div>
        
        <!-- Service Indicators - Improved mobile layout -->
        <div 
          class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-slate-700"
          role="list"
          aria-label="Key service features"
        >
          <!-- 24/7 Support -->
          <div class="flex items-center gap-3 min-h-[44px]" role="listitem">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <ClockIcon class="w-6 h-6 text-blue-800" />
            </div>
            <span class="font-semibold text-sm sm:text-base">24/7 Support</span>
          </div>
          
          <!-- Real-Time Tracking -->
          <div class="flex items-center gap-3 min-h-[44px]" role="listitem">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <MapPinIcon class="w-6 h-6 text-blue-800" />
            </div>
            <span class="font-semibold text-sm sm:text-base">Real-Time Tracking</span>
          </div>
          
          <!-- Global Network -->
          <div class="flex items-center gap-3 min-h-[44px]" role="listitem">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <GlobeAltIcon class="w-6 h-6 text-blue-800" />
            </div>
            <span class="font-semibold text-sm sm:text-base">Global Network</span>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
