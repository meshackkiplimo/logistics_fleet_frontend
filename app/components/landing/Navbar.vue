<script setup lang="ts">
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const menuItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Network', href: '#network' },
  { label: 'Support', href: '#support' }
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 40;
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
        : 'bg-transparent'
    ]"
    role="navigation"
    aria-label="Main navigation"
  >
    <Container>
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <div class="flex-shrink-0">
          <a
            href="#"
            :class="[
              'text-2xl font-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1',
              isScrolled ? 'text-slate-900' : 'text-white'
            ]"
            aria-label="LogiTrack home"
          >
            Logi<span class="text-blue-500">Track</span>
          </a>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:flex items-center gap-1" role="menubar">
          <a
            v-for="item in menuItems"
            :key="item.label"
            :href="item.href"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              isScrolled
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            ]"
            role="menuitem"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- CTA button (desktop) -->
        <div class="hidden md:block">
          <Button
            variant="primary"
            size="md"
            class="!bg-blue-600 hover:!bg-blue-500 !rounded-lg font-semibold"
            aria-label="Track your shipment"
          >
            Track Shipment
          </Button>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          :class="[
            'md:hidden min-w-[44px] min-h-[44px] p-2 rounded-lg transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            isScrolled
              ? 'text-slate-600 hover:bg-slate-100'
              : 'text-white hover:bg-white/10'
          ]"
          type="button"
          aria-label="Toggle navigation menu"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMenuOpen"
          id="mobile-menu"
          class="md:hidden py-3 border-t border-white/10"
          :class="isScrolled ? 'border-slate-100' : 'border-white/10'"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <nav class="flex flex-col gap-1">
            <a
              v-for="item in menuItems"
              :key="item.label"
              :href="item.href"
              :class="[
                'px-4 py-3 rounded-lg transition-colors duration-200 font-medium text-sm min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500',
                isScrolled
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              ]"
              role="menuitem"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
            <div class="px-2 pt-2 pb-1">
              <Button
                variant="primary"
                size="md"
                class="w-full min-h-[44px] !bg-blue-600 !rounded-lg"
                aria-label="Track your shipment"
              >
                Track Shipment
              </Button>
            </div>
          </nav>
        </div>
      </Transition>
    </Container>
  </nav>
</template>
