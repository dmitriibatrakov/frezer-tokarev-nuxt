<script setup lang="ts">
import FTIconSprite from './icons/FTIconSprite.vue';

const typeOfWorkArr = ref([
  {
    title: 'Комплексная обработка металла',
    description: `Обеспечиваем полный цикл от черновой обработки до финишной доводки: 
        токарные, фрезерные и сварочные работы, электроэррозия, лазерная резка.  
        Вы получаете готовое изделие  без привлечениянескольких исполнителей.`,
    icon: h(FTIconSprite, {
      name: 'gear-perfect',
      size: '2.5rem',
      color: '#383508',
    }),
  },
  {
    title: 'Точное производство по ТЗ',
    description: `Изготавливаем детали и узлы по вашим чертежам или техническому заданию с гарантированной точностью. 
        Исключаем ошибки и несоответствия в производстве комплектующих.`,
    icon: h(FTIconSprite, {
      name: 'ruler',
      size: '2.5rem',
      color: '#383508',
    }),
  },
  {
    title: 'Индивидуальные производственные задачи',
    description: `Изготавливаем нестандартный крепеж и уникальные детали по образцам.`,
    icon: h(FTIconSprite, {
      name: 'puzzle',
      size: '2.5rem',
      color: '#383508',
    }),
  },
  {
    title: 'Восстановление и ремонт оборудования',
    description: `Профессиональный ремонт и восстановление компонентов для автосервисов и транспортных компаний. 
        Сокращаем время простоя и продлеваем срок службы парка техники.`,
    icon: h(FTIconSprite, {
      name: 'tool',
      size: '2.5rem',
      color: '#383508',
    }),
  },
]);
</script>

<template>
  <UPageSection
    title="Виды выполняемых работ"
    description="...или 4 причины почему нужно обратиться к нам:"
    :ui="{
      title: 'font-normal text-ft-primary-5 flex',
      description: 'text-ft-primary-4 flex',
      container: 'lg:py-18 lg:gap-12',
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(item, index) in typeOfWorkArr"
        :key="index"
        v-bind="item"
        spotlight
        class="[--spotlight-color:var(--color-ft-primary-4)] [--spotlight-size:400px]"
        :ui="{
          root: 'hover:scale-101 transition duration-300 ease-in-out',
          title: 'text-ft-primary-4',
          description: 'text-ft-primary-3',
        }"
      />
    </UPageGrid>
  </UPageSection>
</template>
