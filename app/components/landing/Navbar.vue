<script setup lang="ts">
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('');

const menuItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Network', href: '#network' },
  { label: 'Support', href: '#support' },
];

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value; };
const closeMenu  = () => { isMenuOpen.value = false; };

onMounted(() => {
  const handleScroll = () => { isScrolled.value = window.scrollY > 60; };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Track which section is in view to highlight the active link
  const sectionIds = menuItems.map(i => i.href.replace('#', ''));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) activeSection.value = `#${e.target.id}`;
      });
    },
    { threshold: 0.35, rootMargin: '-80px 0px -50% 0px' }
  );
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    observer.disconnect();
  });
});
</script>

<template>
  <!-- Wrapper handles the "floating pill" spacing on scroll -->
  <div
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
      isScrolled ? 'px-4 sm:px-6 lg:px-10 pt-4' : 'px-0 pt-0'
    ]"
  >
    <nav
      :class="[
        'relative transition-all duration-500 ease-out',
        isScrolled
          ? 'bg-white/80 backdrop-blur-2xl rounded-2xl border border-slate-200/70 shadow-xl shadow-slate-900/[0.08]'
          : 'bg-transparent'
      ]"
      role="navigation"
      aria-label="Main navigation"
    >
      <!-- Top glow line when scrolled -->
      <div
        v-if="isScrolled"
        class="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
      />

      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div :class="['flex items-center justify-between transition-all duration-500', isScrolled ? 'h-16' : 'h-20']">

          <!-- ── Logo ── -->
          <a
            href="#"
            class="flex items-center gap-2.5 flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl px-1 py-1"
            aria-label="LogiTrack home"
          >
            <!-- Icon mark -->
            <div :class="[
              'w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300',
              isScrolled ? 'bg-blue-600' : 'bg-white/10 border border-white/20'
            ]">
              <GlobeAltIcon :class="['w-4.5 h-4.5 transition-colors duration-300', isScrolled ? 'text-white' : 'text-blue-400']" />
            </div>
            <!-- Wordmark -->
            <span :class="[
              'text-xl font-black tracking-tight transition-colors duration-300',
              isScrolled ? 'text-slate-900' : 'text-white'
            ]">
              Logi<span class="text-blue-500">Track</span>
            </span>
          </a>

          <!-- ── Desktop nav links ── -->
          <div class="hidden md:flex items-center gap-0.5" role="menubar">
            <a
              v-for="item in menuItems"
              :key="item.label"
              :href="item.href"
              :class="[
                'relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                isScrolled
                  ? activeSection === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  : activeSection === item.href
                    ? 'text-white bg-white/15'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
              ]"
              role="menuitem"
              @click="closeMenu"
            >
              {{ item.label }}
              <!-- Active dot indicator -->
              <span
                v-if="activeSection === item.href"
                class="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
              />
            </a>
          </div>

          <!-- ── Desktop right side ── -->
          <div class="hidden md:flex items-center gap-3">
            <!-- "Live" badge -->
            <div :class="[
              'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300',
              isScrolled
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-green-500/10 border border-green-500/20 text-green-400'
            ]">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live Tracking
            </div>

            <!-- CTA button -->
            <button
              :class="[
                'relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold',
                'transition-all duration-300 overflow-hidden group',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5'
                  : 'bg-white text-blue-700 hover:bg-blue-50 shadow-md shadow-black/20 hover:-translate-y-0.5'
              ]"
              aria-label="Track your shipment"
            >
              <!-- Shimmer sweep -->
              <span class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <svg class="w-4 h-4 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82V15a1 1 0 01-.553.894L15 14M15 10l-6 2.25M15 10v4M9 12.25V19a1 1 0 001.447.894l4.553-2.144" />
              </svg>
              <span class="relative">Track Shipment</span>
            </button>
          </div>

          <!-- ── Mobile hamburger ── -->
          <button
            @click="toggleMenu"
            :class="[
              'md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl transition-all duration-200',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
              isScrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            ]"
            type="button"
            aria-label="Toggle navigation menu"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-menu"
          >
            <Transition
              enter-active-class="transition-all duration-200"
              enter-from-class="opacity-0 rotate-90 scale-75"
              enter-to-class="opacity-100 rotate-0 scale-100"
              leave-active-class="transition-all duration-200"
              leave-from-class="opacity-100 rotate-0 scale-100"
              leave-to-class="opacity-0 -rotate-90 scale-75"
              mode="out-in"
            >
              <XMarkIcon v-if="isMenuOpen" class="w-6 h-6" />
              <Bars3Icon v-else class="w-6 h-6" />
            </Transition>
          </button>

        </div>
      </div>
    </nav>
  </div>

  <!-- ── Mobile drawer overlay ── -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm md:hidden"
      @click="closeMenu"
      aria-hidden="true"
    />
  </Transition>

  <!-- ── Mobile drawer panel ── -->
  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-250 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="isMenuOpen"
      id="mobile-menu"
      class="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col md:hidden shadow-2xl"
      role="dialog"
      aria-label="Navigation menu"
      aria-modal="true"
    >
      <!-- Drawer header -->
      <div class="flex items-center justify-between px-5 py-5 border-b border-slate-100">
        <span class="text-lg font-black text-slate-900">
          Logi<span class="text-blue-500">Track</span>
        </span>
        <button
          @click="closeMenu"
          class="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close menu"
        >
          <XMarkIcon class="w-5 h-5" />
        </button>
      </div>

      <!-- Drawer links -->
      <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-1" role="menu">
        <a
          v-for="(item, index) in menuItems"
          :key="item.label"
          :href="item.href"
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            activeSection === item.href
              ? 'bg-blue-50 text-blue-600 border border-blue-100'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          ]"
          :style="{ transitionDelay: `${index * 40}ms` }"
          role="menuitem"
          @click="closeMenu"
        >
          <!-- Step number -->
          <span :class="[
            'w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0',
            activeSection === item.href ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
          ]">
            {{ (index + 1).toString().padStart(2, '0') }}
          </span>
          {{ item.label }}
          <!-- Active arrow -->
          <svg v-if="activeSection === item.href" class="w-4 h-4 ml-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </nav>

      <!-- Drawer footer CTA -->
      <div class="p-4 border-t border-slate-100 space-y-3">
        <div class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 border border-green-100">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
          <span class="text-xs font-semibold text-green-700">Live tracking available now</span>
        </div>
        <button
          class="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors duration-200 shadow-lg shadow-blue-600/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          @click="closeMenu"
          aria-label="Track your shipment"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82V15a1 1 0 01-.553.894L15 14M15 10l-6 2.25M15 10v4M9 12.25V19a1 1 0 001.447.894l4.553-2.144" />
          </svg>
          Track Shipment
        </button>
      </div>
    </div>
  </Transition>
</template>
