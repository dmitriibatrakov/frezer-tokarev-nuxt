// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Металлообработка в Нижнем Новгороде | Frezer Tokarev',
      meta: [
        {
          name: 'Выполнение токарных, фрезерных, слесарных, сварочных работ в Нижнем Новгороде. Быстрое рассмотрение и согласование объема работ и стоимости.',
          content: '',
        },
      ],
      htmlAttrs: {
        lang: 'ru',
      },
      link: [{ rel: 'icon', type: 'image', href: './Logo_svg.svg' }],
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
});
