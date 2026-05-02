<script setup lang="ts">
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 'air-freight',
    title: 'Priority Air Freight',
    description: 'Expedited air cargo services with real-time tracking and priority handling',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop'
  },
  {
    id: 'maritime',
    title: 'Maritime Logistics',
    description: 'Comprehensive ocean freight solutions for cost-effective global shipping',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop'
  },
  {
    id: 'exclusive-lane',
    title: 'Exclusive Lane',
    description: 'Dedicated trucking services with GPS tracking and flexible scheduling',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop'
  },
  {
    id: 'customs',
    title: 'Customs Consultancy',
    description: 'Expert customs clearance and compliance services for seamless international trade',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
  }
];
</script>

<template>
  <section 
    class="py-16 sm:py-20 bg-white"
    aria-labelledby="services-heading"
  >
    <Container>
      <div class="text-center mb-10 sm:mb-12 px-4 sm:px-0">
        <h2 id="services-heading" class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Integrated Multi-Modal Solutions
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive logistics services tailored to your business needs
        </p>
      </div>
      <div 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
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
