<script setup lang="ts">
import FTIconSprite from '~/components/icons/FTIconSprite.vue';
</script>

<template>
  <div>
    <UHeader title="Frezer-Tokarev" :toggle="false">
      <template #title>
        <div class="flex items-center gap-2">
          <FTIconSprite name="FT-logo" size="2.5rem" />
          <span class="max-[550px]:text-sm">Frezer-Tokarev</span>
        </div>
      </template>

      <template #right>
        <FTModalSection> Заказать проект </FTModalSection>
      </template>
    </UHeader>

    <slot />

    <USeparator
      :ui="{
        root: 'border-amber-300',
        border: 'border-ft-primary-2',
      }"
    >
      <template #default>
        <FTIconSprite name="FT-logo" class="text-ft-primary-2"></FTIconSprite>
      </template>
    </USeparator>

    <UFooter>
      <template #default >
        <p class="text-ft-primary-2">Frezer-Tokarev. Металлообработка в Нижнем Новгороде</p>
      </template>
    </UFooter>
  </div>
</template>

<style lang="css" scoped></style>
