<script setup lang="ts">
withDefaults(defineProps<{ name: string; size?: string }>(), {
  size: '1.5rem',
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
}
</style>
