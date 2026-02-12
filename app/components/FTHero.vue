<script setup lang="ts">
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
      description: 'text-ft-primary-2 text-sm sm:text-lg',
      title: 'text-ft-primary-1 text-4xl sm:text-5xl md:text-7xl',
    }"
  >
    <template #body>
      <FTModalSection>
        Заказать проект
      </FTModalSection>
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
            root: 'hidden lg:block',
            item: 'flex flex-col gap-4 text-ft-primary-2 text-2xl',
            container: 'h-12 lg:h-44',
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
