<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xl'
});

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1440px]'
};

const containerClasses = computed(() => {
  return [
    'mx-auto',
    'px-4 sm:px-6 lg:px-8',
    'w-full',
    sizeClasses[props.size]
  ].join(' ');
});
</script>

<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>
