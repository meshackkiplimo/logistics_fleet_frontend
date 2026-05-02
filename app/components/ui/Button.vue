<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button'
});

const variantClasses = {
  primary: 'bg-blue-800 text-white hover:bg-blue-900 focus:ring-blue-500',
  secondary: 'bg-slate-500 text-white hover:bg-slate-600 focus:ring-slate-400',
  outline: 'bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-50 focus:ring-blue-500',
  white: 'bg-white text-blue-800 hover:bg-gray-50 focus:ring-blue-500',
  'outline-white': 'bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const buttonClasses = computed(() => {
  return [
    'inline-flex items-center justify-center',
    'font-semibold rounded-lg',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[props.variant],
    sizeClasses[props.size]
  ].join(' ');
});

</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :class="buttonClasses"
  >
    <slot />
  </component>
</template>
