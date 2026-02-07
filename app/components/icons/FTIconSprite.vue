<script setup lang="ts">
withDefaults(defineProps<{ name: string; size?: string; color?: string }>(), {
  size: '1.5rem',
  color: 'currentColor'
});
</script>

<template>
  <svg class="icon">
    <use :href="`#${name}`" />
  </svg>
</template>

<style lang="css" scoped>
.icon {
  width: v-bind(size);
  height: v-bind(size);
  color: v-bind(color);
}
</style>
