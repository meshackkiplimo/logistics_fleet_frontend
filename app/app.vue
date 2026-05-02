<script setup lang="ts">
// Enable smooth scroll behavior for anchor links
onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth';
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Navigation Bar - Fixed at top -->
    <Navbar />
    
    <!-- Main Content -->
    <main>
      <!-- Hero Section - Above the fold -->
      <Hero />
      
      <!-- Services Section -->
      <ServicesSection id="services" />
      
      <!-- Features Section -->
      <FeaturesSection />
      
      <!-- Stats/Operational Precision Section -->
      <StatsSection id="network" />
      
      <!-- Call-to-Action Section -->
      <CTASection />
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Nuxt Page for routing (if needed) -->
    <NuxtPage />
  </div>
</template>

<style>
/* Ensure smooth scrolling and proper spacing */
html {
  scroll-behavior: smooth;
}

/* Offset for fixed navbar when using anchor links */
section[id] {
  scroll-margin-top: 5rem;
}

/* Prevent layout shift */
body {
  overflow-x: hidden;
}
</style>
