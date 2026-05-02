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

// Handle scroll behavior for backdrop blur effect
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
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
            class="text-2xl font-bold text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="LogiTrack home"
          >
            LogiTrack
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8" role="menubar">
          <a
            v-for="item in menuItems"
            :key="item.label"
            :href="item.href"
            class="text-slate-600 hover:text-blue-800 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
            role="menuitem"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Track Shipment Button (Desktop) -->
        <div class="hidden md:block">
          <Button variant="primary" size="md" aria-label="Track your shipment">
            Track Shipment
          </Button>
        </div>

        <!-- Mobile Menu Toggle - Minimum 44x44px touch target -->
        <button
          @click="toggleMenu"
          class="md:hidden min-w-[44px] min-h-[44px] p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
          type="button"
          aria-label="Toggle navigation menu"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
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
          class="md:hidden py-4 border-t border-slate-200"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <nav class="flex flex-col space-y-2">
            <a
              v-for="item in menuItems"
              :key="item.label"
              :href="item.href"
              class="text-slate-600 hover:text-blue-800 hover:bg-slate-50 px-4 py-3 rounded-lg transition-colors duration-200 font-medium text-base min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              role="menuitem"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
            <div class="px-4 pt-2">
              <Button variant="primary" size="md" class="w-full min-h-[44px]" aria-label="Track your shipment">
                Track Shipment
              </Button>
            </div>
          </nav>
        </div>
      </Transition>
    </Container>
  </nav>
</template>
