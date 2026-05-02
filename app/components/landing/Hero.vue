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
  <section class="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
    <Container>
      <div class="max-w-4xl mx-auto text-center">
        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
          Global Logistics with <span class="text-blue-800">Mathematical Precision</span>
        </h1>
        
        <!-- Subheading -->
        <p class="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Advanced logistics solutions powered by real-time data analytics and AI-driven route optimization for seamless global supply chain management
        </p>
        
        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto mb-12">
          <div class="flex flex-col sm:flex-row gap-3 bg-white rounded-lg shadow-lg p-2">
            <div class="flex-1 flex items-center px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-200">
              <MagnifyingGlassIcon class="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <input
                v-model="trackingNumber"
                type="text"
                placeholder="Enter tracking number (e.g., LT123456789)"
                class="flex-1 outline-none text-slate-900 placeholder-gray-400 text-sm sm:text-base"
                @keyup.enter="handleTrackShipment"
                aria-label="Tracking number input"
              />
            </div>
            <Button 
              variant="primary" 
              size="lg"
              class="whitespace-nowrap"
              @click="handleTrackShipment"
            >
              Track Your Shipment
            </Button>
          </div>
        </div>
        
        <!-- Service Indicators -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-slate-700">
          <!-- 24/7 Support -->
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <ClockIcon class="w-6 h-6 text-blue-800" />
            </div>
            <span class="font-semibold text-sm sm:text-base">24/7 Support</span>
          </div>
          
          <!-- Real-Time Tracking -->
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <MapPinIcon class="w-6 h-6 text-blue-800" />
            </div>
            <span class="font-semibold text-sm sm:text-base">Real-Time Tracking</span>
          </div>
          
          <!-- Global Network -->
          <div class="flex items-center gap-3">
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
