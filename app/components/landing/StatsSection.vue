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
    title: '24x7 Global Support',
    description: 'Dedicated support teams available around the clock in multiple languages'
  }
];
</script>

<template>
  <section class="py-20 bg-white">
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column: Features List -->
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Operational Precision at Every Touchpoint
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Our commitment to excellence is reflected in every aspect of our operations, from initial pickup to final delivery.
          </p>
          <ul class="space-y-6">
            <li v-for="item in features" :key="item.id" class="flex items-start">
              <CheckCircleIcon class="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
                <p class="text-gray-600">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right Column: Visual Element with Stat Overlay -->
        <div class="relative">
          <div class="relative rounded-lg overflow-hidden shadow-xl">
            <!-- Placeholder for world map image -->
            <div 
              class="w-full h-96 bg-gradient-to-br from-blue-100 via-blue-50 to-gray-100 flex items-center justify-center"
              role="img"
              aria-label="Global logistics network visualization showing worldwide coverage"
            >
              <svg class="w-full h-full opacity-20" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <!-- Simplified world map illustration -->
                <path d="M100 200 L150 180 L200 190 L250 170 L300 185 L350 175 L400 190 L450 180 L500 195 L550 185 L600 200 L650 190 L700 210" stroke="#1E40AF" stroke-width="2" fill="none"/>
                <path d="M100 300 L150 280 L200 290 L250 270 L300 285 L350 275 L400 290 L450 280 L500 295 L550 285 L600 300 L650 290 L700 310" stroke="#1E40AF" stroke-width="2" fill="none"/>
                <circle cx="200" cy="250" r="4" fill="#1E40AF"/>
                <circle cx="350" cy="230" r="4" fill="#1E40AF"/>
                <circle cx="500" cy="270" r="4" fill="#1E40AF"/>
                <circle cx="600" cy="245" r="4" fill="#1E40AF"/>
              </svg>
            </div>
            
            <!-- Statistic Overlay -->
            <div class="absolute bottom-8 left-8 bg-blue-600 text-white p-8 rounded-lg shadow-2xl max-w-xs">
              <div class="text-5xl font-bold mb-2" aria-label="99.9 percent">99.9%</div>
              <div class="text-lg font-medium">On-Time Delivery Rate</div>
              <p class="text-sm text-blue-100 mt-2">Consistently exceeding industry standards</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
