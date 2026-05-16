<script setup lang="ts">
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const services: Service[] = [
  {
    id: 'air-freight',
    title: 'Priority Air Freight',
    description: 'Expedited air cargo with real-time tracking and priority handling',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
    tag: 'Air'
  },
  {
    id: 'maritime',
    title: 'Maritime Logistics',
    description: 'Cost-effective ocean freight solutions for global shipping routes',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop',
    tag: 'Sea'
  },
  {
    id: 'exclusive-lane',
    title: 'Exclusive Lane',
    description: 'Dedicated trucking with GPS tracking and flexible scheduling',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
    tag: 'Road'
  },
  {
    id: 'customs',
    title: 'Customs Consultancy',
    description: 'Expert clearance and compliance for seamless international trade',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    tag: 'Customs'
  }
];
</script>

<template>
  <section
    class="py-20 sm:py-28 bg-white"
    aria-labelledby="services-heading"
  >
    <Container>
      <!-- Section header -->
      <div class="text-center mb-14">
        <span class="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</span>
        <h2 id="services-heading" class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Integrated Multi-Modal Solutions
        </h2>
        <p class="text-slate-500 text-lg max-w-xl mx-auto">
          Comprehensive logistics services tailored to your business needs
        </p>
      </div>

      <!-- Cards grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        role="list"
        aria-label="Logistics services"
      >
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </Container>
  </section>
</template>
