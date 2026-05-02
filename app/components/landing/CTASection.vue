<script setup lang="ts">
// CTA Section component for final conversion point
</script>

<template>
  <section 
    class="py-16 sm:py-20 bg-blue-600 text-white"
    aria-labelledby="cta-heading"
  >
    <Container>
      <div class="text-center max-w-3xl mx-auto px-4 sm:px-0">
        <h2 id="cta-heading" class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Ready to Optimize Your Supply Chain?
        </h2>
        <p class="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-50 leading-relaxed">
          Advanced logistics solutions with real-time tracking, global reach, and 24/7 support. 
          Let us help you streamline your operations and deliver with precision.
        </p>
        <div 
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          role="group"
          aria-label="Call to action buttons"
        >
          <Button variant="white" size="lg" class="min-h-[44px]" aria-label="Get started with LogiTrack services">
            Get Started Now
          </Button>
          <Button variant="outline-white" size="lg" class="min-h-[44px]" aria-label="Contact an expert for consultation">
            Speak to an Expert
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>
