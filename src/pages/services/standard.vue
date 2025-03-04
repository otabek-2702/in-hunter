<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <img
    alt="Service Details Image"
    loading="lazy"
    src="@/assets/images/standard-service.jpg"
    class="service-details-image"
  />
  <h2 class="service-details-title">Standart</h2>
  <ul>
    <li>
      <h3><span class="heading-span">Ofis </span> xodimlari uchun</h3>
    </li>
    <li style="background-image: none">
      <p class="service-summary">Yillik ish haqining <b>9%</b></p>
    </li>

    <li>
      <h3>
        <span class="heading-span">O‘rta toifa</span> lavozimdagi xodimlar uchun
      </h3>
    </li>
    <li style="background-image: none">
      <p class="service-summary">Yillik ish haqining <b>12%</b></p>
    </li>

    <li>
      <h3>
        <span class="heading-span">Yuqori</span> lavozimdagi xodimlar uchun
      </h3>
    </li>
    <li style="background-image: none">
      <p class="service-summary">Yillik ish haqining <b>15%</b></p>
    </li>
  </ul>

  <p class="service-summary"></p>
  <p class="service-summary"></p>
  <p class="service-summary"></p>
  <h2 class="service-details-title-two"></h2>
  <p class="service-summary"></p>

  <div class="faq-item service-faq-item">
    <div class="faq-question service-faq-question w-inline-block">
      <h3 class="faq-title">
        Oldindan to‘lov kelishilgan summadan <b>30%</b> tashkil qiladi, qolgan qismi
        xodim ishga chiqganidan son‘g <b>5</b> ish kuni ichida
      </h3>
    </div>
  </div>

  <p class="service-summary"></p>
  <!-- <div class="service-details-faq">
    <div class="faq-item service-faq-item">
      <router-link
        data-w-id="a2d13af8-37b1-01d2-c2ab-8a8fb270f383"
        href=""
        class="faq-question service-faq-question w-inline-block"
      >
        <h3 class="faq-title"></h3>
        <div class="p-m-wrap">
          <div class="minus"></div>
          <div class="plus"></div>
        </div>
      </router-link>
    </div>

    <div class="faq-item service-faq-item">
      <router-link
        data-w-id="a0a0e0af-1cd0-db5c-1b1d-0009194aa980"
        href=""
        class="faq-question service-faq-question w-inline-block"
      >
        <h3 class="faq-title"></h3>
        <div class="p-m-wrap">
          <div class="minus"></div>
          <div class="plus"></div>
        </div>
      </router-link>
      <div class="faq-answer">
        <div class="faq-answer-inner service-faq-answer-inner">
          <p class="paragraph"></p>
        </div>
      </div>
    </div>
    <div class="faq-item service-faq-item">
      <router-link
        data-w-id="43095b3e-c36d-44e2-6e1a-7cf1f8131cc4"
        href=""
        class="faq-question service-faq-question w-inline-block"
      >
        <h3 class="faq-title"></h3>
        <div class="p-m-wrap">
          <div class="minus"></div>
          <div class="plus"></div>
        </div>
      </router-link>
      <div class="faq-answer">
        <div class="faq-answer-inner service-faq-answer-inner">
          <p class="paragraph"></p>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.heading-span {
  font-weight: bold;
}
h3 {
  font-weight: 500;
}
</style>
