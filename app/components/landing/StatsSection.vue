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
  <section 
    class="py-16 sm:py-20 bg-white"
    aria-labelledby="stats-heading"
  >
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
        <!-- Left Column: Features List -->
        <div class="px-4 sm:px-0">
          <h2 id="stats-heading" class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Operational Precision at Every Touchpoint
          </h2>
          <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Our commitment to excellence is reflected in every aspect of our operations, from initial pickup to final delivery.
          </p>
          <ul 
            class="space-y-5 sm:space-y-6"
            role="list"
            aria-label="Operational features"
          >
            <li v-for="item in features" :key="item.id" class="flex items-start" role="listitem">
              <CheckCircleIcon class="w-6 h-6 text-green-500 mr-3 sm:mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{{ item.title }}</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right Column: Visual Element with Stat Overlay -->
        <div class="relative px-4 sm:px-0">
          <div class="relative rounded-lg overflow-hidden shadow-xl">
            <!-- World map image with lazy loading -->
            <NuxtImg 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=800&fit=crop"
              alt="Global logistics network visualization showing worldwide coverage and distribution centers"
              class="w-full h-80 sm:h-96 object-cover"
              loading="lazy"
              width="1200"
              height="800"
              sizes="sm:100vw lg:50vw"
              format="webp"
              quality="85"
              placeholder
            />
            
            <!-- Statistic Overlay - Responsive sizing -->
            <div 
              class="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-blue-600 text-white p-6 sm:p-8 rounded-lg shadow-2xl max-w-[280px] sm:max-w-xs"
              role="figure"
              aria-label="On-time delivery performance metric"
            >
              <div class="text-4xl sm:text-5xl font-bold mb-2" aria-label="99.9 percent">99.9%</div>
              <div class="text-base sm:text-lg font-medium">On-Time Delivery Rate</div>
              <p class="text-sm text-blue-100 mt-2">Consistently exceeding industry standards</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
