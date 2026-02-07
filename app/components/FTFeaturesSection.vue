<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui';
import FTIconSprite from './icons/FTIconSprite.vue';


const features = ref<PageFeatureProps[]>([
  {description: 'Соответствие готового изделия вашему техническому заданию',
    icon: h(FTIconSprite, {
      name: 'clipboard-check',
      size: '2rem',
      color: '#494949',
    },
  )
  },
  {description: 'Эффективные решения для ваших нестандартных задач',
    icon: h(FTIconSprite, {
      name: 'chart',
      size: '2rem',
      color: '#494949'
    })
  },
  {description: 'Быстрое рассмотрение и согласование объема работ и стоимости',
    icon: h(FTIconSprite, {
      name: 'handshake',
      size: '2rem',
      color: '#494949'
    })},
  
]) 
</script>

<template>
  <UPageSection 
  :ui="{
    title: 'font-normal text-ft-primary-5',
    container: 'lg:py-18'
  } as const" >
    <template #title>
      Закажи выполнение проекта у 
      <span class="font-semibold text-ft-primary-4">Frezer-Tokarev</span> 
      и получишь
    </template>

    <template #features>
      <UPageFeature 
      v-for="(item, index) in features" 
      :key="index" 
      :description="item.description"
      :icon="item.icon"
      :ui="{
        description: 'text-ft-primary-3'
      }"
       />
    </template>


  </UPageSection>
</template>
