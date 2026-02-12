<script setup lang="ts">
import FTIconSprite from '~/components/icons/FTIconSprite.vue';
const functions = useFunctions();
useHead({
  script: [
    {
      src: 'https://forms.yandex.ru/_static/embed.js',
      async: true,
    },
  ],
});

</script>

<template>
  <UModal
    scrollable
    title="Для рассмотрения вашего запроса необходимо заполнить форму ниже"
    :ui="{
      description: 'pb-1 pt-1 ',
    }"
  >
    <UButton color="neutral" variant="outline" class="px-4 py-2.5">
      <FTIconSprite name="ix-pen" size="1.2rem" />
      <slot />
    </UButton>

    <template #description>
      ...или вы всегда можете написать напрямую на электронную почту или Телеграм, воспользовавшись
      ссылками ниже
      <div class="flex justify-center gap-4 pt-2">
        <UButton
          color="neutral"
          variant="outline"
          class="px-2 py-2 text-sm"
          title="Почта будет скопирована в буфер"
          @click="functions.mailToBuffer('mail@frezer-tokarev.ru')"
        >
          <FTIconSprite name="email" size="1.4rem" />
        </UButton>
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

    <template #body>
      <iframe
        src="https://forms.yandex.ru/u/69889d7995add5a2dd29c66b?iframe=1"
        frameborder="3"
        name="ya-form-69889d7995add5a2dd29c66b"
        class="w-full"
      ></iframe>
    </template>
  </UModal>
</template>

<style lang="css" scoped></style>
