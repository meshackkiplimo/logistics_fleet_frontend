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
  <section class="py-20 bg-gray-50">
    <Container>
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Precision Transit Flow
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Our integrated approach ensures seamless coordination at every stage of your shipment journey
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          v-for="feature in features" 
          :key="feature.id" 
          :feature="feature" 
        />
      </div>
    </Container>
  </section>
</template>
