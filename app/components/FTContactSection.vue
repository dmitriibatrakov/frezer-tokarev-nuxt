<script setup lang="ts">
import FTIconSprite from '~/components/icons/FTIconSprite.vue';
</script>

<template>
  <UPageSection
    title="Будем ближе"
    description="Свяжитесь с нами для заказа, 
    получения дополнительной информации или партнерства. Мы здесь что бы помочь вам!"
    orientation="horizontal"
    :ui="{
      title: 'flex font-normal text-ft-primary-5',
      description: 'text-ft-primary-4 md: text-left',
      footer: 'flex gap-2',
      container: 'lg:py-18'
    }"
  >
    <template #default>
      <div class="relative overflow-hidden border-2 border-ft-primary-2 rounded-lg" >
        <a
          href="https://yandex.ru/maps/47/nizhny-novgorod/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 0px"
          >Нижний Новгород</a
        >
        <a
          href="https://yandex.ru/maps/47/nizhny-novgorod/?ll=43.947519%2C56.264605&utm_medium=mapframe&utm_source=maps&z=18.8"
          style="color: #eee; font-size: 12px; position: absolute; top: 14px"
          >Нижний Новгород — Яндекс Карты</a
        ><iframe
          src="https://yandex.ru/map-widget/v1/?ll=43.947519%2C56.264605&z=18.8"
          width="560"
          height="400"
          frameborder="1"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
    </template>

    <template #footer>
      <UButton color="neutral" variant="outline" class="px-4 py-2.5">
        <FTIconSprite name="ix-pen" size="1.2rem" />
        Заказать проект
      </UButton>
      <div>
        <p>или</p>
      </div>
      <UButton color="neutral" variant="outline" class="px-4 py-2.5">
        <FTIconSprite name="telegram" size="1.2rem" />
        Написать
      </UButton>
    </template>
  </UPageSection>
</template>
