<script setup lang="ts">
const solutionsLinks = [
  { label: 'Air Freight', href: '#air-freight' },
  { label: 'Maritime Logistics', href: '#maritime' },
  { label: 'Exclusive Lane', href: '#exclusive-lane' },
  { label: 'Customs Consultancy', href: '#customs' }
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'News & Media', href: '#news' },
  { label: 'Contact', href: '#contact' }
];

const connectLinks = [
  { label: 'Customer Portal', href: '#portal' },
  { label: 'Track Shipment', href: '#track' },
  { label: 'Get a Quote', href: '#quote' },
  { label: 'Support Center', href: '#support' }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#linkedin',
    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  },
  {
    name: 'Twitter',
    href: '#twitter',
    icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
  },
  {
    name: 'Facebook',
    href: '#facebook',
    icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'
  }
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' }
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-slate-950 text-slate-400" role="contentinfo" aria-label="Site footer">
    <Container>
      <!-- Main footer content -->
      <div class="py-14 sm:py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          <!-- Brand column -->
          <div class="lg:col-span-2">
            <a
              href="#"
              class="inline-block text-2xl font-black text-white mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-md"
              aria-label="LogiTrack home"
            >
              Logi<span class="text-blue-500">Track</span>
            </a>
            <p class="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              Delivering precision logistics solutions with mathematical accuracy across the globe. Trusted by thousands of businesses worldwide.
            </p>
            <!-- Social links -->
            <div class="flex gap-3" role="list" aria-label="Social media links">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :aria-label="`Visit our ${social.name} page`"
                class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                role="listitem"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Solutions -->
          <nav aria-labelledby="footer-solutions">
            <h3 id="footer-solutions" class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Solutions</h3>
            <ul class="space-y-2.5">
              <li v-for="link in solutionsLinks" :key="link.label">
                <a
                  :href="link.href"
                  class="text-slate-500 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- Company -->
          <nav aria-labelledby="footer-company">
            <h3 id="footer-company" class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul class="space-y-2.5">
              <li v-for="link in companyLinks" :key="link.label">
                <a
                  :href="link.href"
                  class="text-slate-500 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- Connect -->
          <nav aria-labelledby="footer-connect">
            <h3 id="footer-connect" class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Connect</h3>
            <ul class="space-y-2.5">
              <li v-for="link in connectLinks" :key="link.label">
                <a
                  :href="link.href"
                  class="text-slate-500 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-slate-800/60 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-3">
          <p class="text-xs text-slate-600">
            © {{ currentYear }} LogiTrack. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul class="flex gap-5">
              <li v-for="link in legalLinks" :key="link.label">
                <a
                  :href="link.href"
                  class="text-xs text-slate-600 hover:text-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  </footer>
</template>
