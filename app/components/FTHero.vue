<script setup lang="ts">
import FTIconSprite from '~/components/icons/FTIconSprite.vue';
const items = [
  'Токарные работы',
  'Фрезерные работы',
  'Фрезерные работы ЧПУ',
  'Сварка',
  'Лазерная резка',
  'Слесарные работы',
  'Электроэрозия',
];
</script>

<template>
  <UPageHero
    title="Металлообработка в Нижнем Новгороде"
    description="Точность. Гибкость. Качество"
    orientation="horizontal"
    :ui="{
      root: 'bg-[linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.5)),url(/lathe-1.jpg)] bg-center bg-no-repeat bg-cover',
      description: 'text-ft-primary-2',
      title: 'text-ft-primary-1',
    }"
  >
    <template #body>
      <UButton color="neutral" variant="outline" class="px-4 py-2.5">
        <FTIconSprite name="ix-pen" size="1.2rem" />
        Заказать проект
      </UButton>
    </template>

    <template #bottom>
      <div class="flex justify-center">
        <span class="border-b-3 px-7 text-ft-primary-1"> Frezer-Tokarev </span>
      </div>
    </template>

    <template #default>
      <div class="flex justify-end relative mask-y-from-80% mask-y-to-100%">
        <UCarousel
          :items="items"
          :ui="{
            item: 'flex flex-col gap-4 text-ft-primary-2 text-2xl',
            container: 'h-44',
          }"
          orientation="vertical"
          loop
          :auto-scroll="{ speed: 0.3 }"
        >
          <div v-for="item in items" :key="item" class="">
            {{ item }}
          </div>
        </UCarousel>
      </div>
    </template>
  </UPageHero>
</template>
