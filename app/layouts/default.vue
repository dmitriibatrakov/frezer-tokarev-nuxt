<script setup lang="ts">
import FTIconSprite from '~/components/icons/FTIconSprite.vue';
</script>

<template>
  <UHeader
    title="Frezer-Tokarev"
    :toggle=false
  >
    <template #title>
      <div class="flex items-center gap-2">
        <FTIconSprite name="FT-logo" size="2.5rem" />
        <span>Frezer-Tokarev</span>
      </div>
    </template>

    <template #right>
      <UButton color="neutral" variant="outline">
        <FTIconSprite name="ix-pen" size="1.2rem"/>
        Заказать проект
      </UButton>
    </template>
  </UHeader>
</template>

<style lang="css" scoped></style>
