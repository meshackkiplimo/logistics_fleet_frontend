<script setup lang="ts">
interface Feature {
  id: string;
  icon: string;
  step: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 'cargo-intake',
    icon: 'truck',
    step: '01',
    title: 'Cargo Intake',
    description: 'Seamless pickup and intake process with real-time confirmation and digital documentation'
  },
  {
    id: 'tracking',
    icon: 'map-pin',
    step: '02',
    title: 'Real-Time Tracking',
    description: 'Track every movement with precision GPS and automated milestone notifications'
  },
  {
    id: 'transit',
    icon: 'clock',
    step: '03',
    title: 'In-Transit Optimization',
    description: 'AI-driven routing with predictive ETA and live rerouting around disruptions'
  },
  {
    id: 'fulfillment',
    icon: 'check-circle',
    step: '04',
    title: 'Final Fulfillment',
    description: 'Proof of delivery with digital signature capture and photo documentation'
  }
];
</script>

<template>
  <section
    class="py-20 sm:py-28 bg-slate-50"
    aria-labelledby="features-heading"
  >
    <Container>
      <!-- Section header -->
      <div class="text-center mb-14">
        <span class="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">How It Works</span>
        <h2 id="features-heading" class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Precision Transit Flow
        </h2>
        <p class="text-slate-500 text-lg max-w-xl mx-auto">
          Our integrated approach ensures seamless coordination at every stage of your shipment journey
        </p>
      </div>

      <!-- Feature cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
