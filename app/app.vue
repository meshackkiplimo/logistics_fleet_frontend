<script setup lang="ts">
// Enable smooth scroll behavior for anchor links
onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Set page language
  document.documentElement.setAttribute('lang', 'en');
  
  // Handle keyboard navigation for skip link
  const skipLink = document.querySelector('a[href="#main-content"]');
  const mainContent = document.getElementById('main-content');
  
  if (skipLink && mainContent) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Skip to main content link for keyboard users -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
    
    <!-- Navigation Bar - Fixed at top -->
    <LandingNavbar />
    
    <!-- Main Content -->
    <main id="main-content" tabindex="-1" aria-label="Main content">
      <!-- Hero Section - Above the fold -->
      <LandingHero />
      
      <!-- Services Section -->
      <LandingServicesSection id="services" />
      
      <!-- Features Section -->
      <LandingFeaturesSection id="features" />
      
      <!-- Stats/Operational Precision Section -->
      <LandingStatsSection id="network" />
      
      <!-- Call-to-Action Section -->
      <LandingCTASection id="contact" />
    </main>
    
    <!-- Footer -->
    <LandingFooter />
    
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

/* Screen reader only utility class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus,
.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

/* Enhanced focus indicators for keyboard navigation */
*:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}

/* Remove default focus outline for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
</style>
