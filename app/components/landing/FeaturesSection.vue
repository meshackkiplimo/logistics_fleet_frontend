<script setup lang="ts">
interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 'cargo-intake',
    icon: 'truck',
    title: 'Cargo Intake',
    description: 'Seamless pickup and intake process with real-time confirmation'
  },
  {
    id: 'tracking',
    icon: 'map-pin',
    title: 'Real-Time Tracking',
    description: 'Track every movement with precision GPS and milestone updates'
  },
  {
    id: 'transit',
    icon: 'clock',
    title: 'Real-Time Transit',
    description: 'Optimized routing and transit with predictive ETA calculations'
  },
  {
    id: 'fulfillment',
    icon: 'check-circle',
    title: 'Final Fulfillment',
    description: 'Proof of delivery with signature capture and photo documentation'
  }
];
</script>

<template>
  <section 
    class="py-16 sm:py-20 bg-gray-50"
    aria-labelledby="features-heading"
  >
    <Container>
      <div class="text-center mb-10 sm:mb-12 px-4 sm:px-0">
        <h2 id="features-heading" class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Precision Transit Flow
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Our integrated approach ensures seamless coordination at every stage of your shipment journey
        </p>
      </div>
      <div 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        role="list"
        aria-label="Transit flow features"
      >
        <FeatureCard 
          v-for="feature in features" 
          :key="feature.id" 
          :feature="feature" 
        />
      </div>
    </Container>
  </section>
</template>
