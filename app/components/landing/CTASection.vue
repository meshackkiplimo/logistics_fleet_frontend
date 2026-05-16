<script setup lang="ts">
</script>

<template>
  <section
    class="relative py-20 sm:py-28 overflow-hidden bg-blue-700"
    aria-labelledby="cta-heading"
  >
    <!-- Background layers -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600" />
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,0,0,0.15)_0%,_transparent_60%)]" />

    <!-- Decorative circles -->
    <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
    <div class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-900/30 blur-3xl pointer-events-none" />

    <Container class="relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <span class="inline-block text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">Get Started</span>
        <h2 id="cta-heading" class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Ready to Optimize<br class="hidden sm:block" /> Your Supply Chain?
        </h2>
        <p class="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands of businesses using LogiTrack for real-time tracking, global reach, and round-the-clock support.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center"
          role="group"
          aria-label="Call to action buttons"
        >
          <Button
            variant="white"
            size="lg"
            class="min-h-[52px] !rounded-xl font-bold shadow-lg shadow-blue-900/30"
            aria-label="Get started with LogiTrack"
          >
            Get Started Now
          </Button>
          <Button
            variant="outline-white"
            size="lg"
            class="min-h-[52px] !rounded-xl font-bold"
            aria-label="Speak to an expert"
          >
            Speak to an Expert
          </Button>
        </div>

        <!-- Trust badges -->
        <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-blue-200 text-sm">
          <span>✓ No setup fees</span>
          <span>✓ 30-day free trial</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </Container>
  </section>
</template>
