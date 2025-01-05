import themes from "daisyui/src/theming/themes.js";

export const customConfig = {
  colors: {
    theme: "winter",
    main: themes[`[data-theme=winter"]`],
  },
  domainName: "play-kids.kz",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `Play Kids <noreply@mg.play-kids.kz>`,
    fromAdmin: `Play Kids <admin@mg.play-kids.kz>`,
    supportEmail: "support@play-kids.kz",
    forwardRepliesTo: "nurgasab@gmail.com",
  },
  documentTitle: "Play Kids - детский магазин игрушек в Казахстане",
  domainWithHttps: "https://play-kids.kz",
  seo: {
    keywords:
      "детский магазин, игрушки, детские товары, детское питание, подгузники",
    description:
      "Play Kids - детский магазин игрушек в Казахстане. Широкий ассортимент детских товаров: игрушки, детские товары и многое другое. Доставка по всему Казахстану.",
    themeColor: "#ffffff",
    applicationName: "play-kids",
    og: {
      title: "Play Kids - детский магазин игрушек в Казахстане",
      url: "https://play-kids.kz",
      image: "https://play-kids.kz/company_related/og-image.jpg",
      imageAlt:
        "Play Kids - детский магазин игрушек в Казахстане. Широкий ассортимент детских товаров с доставкой по всему Казахстану.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://play-kids.kz/company_related/og-image.jpg",
    },
  },
  blog: {
    title: "Play Kids Blog",
    description:
      "Советы по выбору детских товаров, уходу за детьми, развитию и воспитанию. Обзоры новинок детских товаров, отзывы покупателей, рекомендации экспертов.",
    canonical: "https://play-kids.kz/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "Я разработчик программного обеспечения и основатель Play Kids. Наша миссия - сделать процесс покупки детских товаров максимально удобным и приятным для родителей. Мы тщательно отбираем каждый товар, чтобы предложить нашим клиентам только лучшее для их детей.",
    },
  },
};