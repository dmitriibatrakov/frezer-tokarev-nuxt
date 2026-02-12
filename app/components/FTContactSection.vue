<script setup lang="ts">
import FTIconSprite from '~/components/icons/FTIconSprite.vue';
const functions = useFunctions();
</script>

<template>
  <UPageSection
    title="Будем ближе"
    description="Свяжитесь с нами для заказа, 
    получения дополнительной информации или партнерства. Мы здесь что бы помочь вам!"
    orientation="horizontal"
    :ui="{
      title: 'font-normal text-ft-primary-5',
      description: 'text-ft-primary-4 md: text-left',
      footer: 'flex gap-2',
      container: 'lg:py-18',
    }"
  >
    <template #default>
      <div class="relative overflow-hidden border-2 border-ft-primary-2 rounded-lg">
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
      <div class="flex justify-center gap-4 pt-2 w-full">
        <UButton
          color="neutral"
          variant="outline"
          class="px-2 py-2 text-sm"
          title="Почта будет скопирована в буфер"
          @click="functions.mailToBuffer('mail@frezer-tokarev.ru')"
        >
          <FTIconSprite name="email" size="1.4rem" />
        </UButton>
        <FTModalSection> 
          Заполнить форму 
        </FTModalSection>

        <UButton
          title="Ссылка на Телеграм"
          variant="outline"
          color="neutral"
          class="px-2 py-2 text-sm text-white bg-ft-telegram hover:bg-white hover:text-ft-telegram"
          to="https://t.me/evgenii_batrakov"
          target="_blank"
        >
          <FTIconSprite name="telegram" size="1.4rem" />
        </UButton>
      </div>
    </template>
  </UPageSection>
</template>
