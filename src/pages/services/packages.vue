<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <img
    alt="Service Details Image"
    loading="lazy"
    src="@/assets/images/package-service.jpg"
    class="service-details-image"
  />
  <h2 class="service-details-title">Obuna</h2>

  <div class="d-flex">
  <ul>
    <li>
      <h3><span class="heading-span">6 </span> oy</h3>
    </li>
    <hr />
    <li>
      <h4>15 ish o‘rni</h4>
    </li>
    <li>
      <h4>60 mln. so‘m</h4>
    </li>
    <li>
      <h4>1 ish o‘rni uchun: 4 mln. so‘m</h4>

    </li>
    <li>
      <h4>Qisqa muddat ichida eng yaxshi natija!</h4>
    </li>
  </ul>
  <ul>
    <li>
      <h3><span class="heading-span">12 </span> oy</h3>
    </li>
    <hr />
    <li>
      <h4>30 ish o‘rni</h4>
    </li>
    <li>
      <h4>100 mln. so‘m</h4>
    </li>
    <li>
      <h4>1 ish o‘rni uchun: 3.33 mln. so‘m</h4>
    </li>
    <li>
      <h4><b>20 mln. so‘m tejaysiz!</b></h4>
    </li>
  </ul>
</div>
<h3 class="subtitle-1">oyiga <span class="heading-span">2-3 </span> ish o'rni</h3>

<ul>
  <li></li>
  <li>rekruting xizmatlarining to'liq spektri</li>
  <li>rekruting bo‘limi uchun sarflanadigan pul va vaqtni tejash</li>
  <li>
    hh.uz resurslari va boshqa platformalardan foydalanish uchun pul va vaqtni
    tejash
  </li>
  <li>barcha darajadagi ish o'rinlari - oddiydan yuqori lavozimgacha</li>
  <li>bir martalik tarifdan ko'ra 50 mln so‘mga foydaliroq</li>
</ul>

<h2 class="service-details-title">100% to'lov oshirilganda <span class="heading-span">10%</span> chegirma bor</h2>



  <p class="service-summary"></p>
  <p class="service-summary"></p>
  <p class="service-summary"></p>
  <h2 class="service-details-title-two"></h2>
  <p class="service-summary"></p>

  <div class="faq-item service-faq-item">
    <div class="faq-question service-faq-question w-inline-block">
      <h3 class="faq-title">
        Oldindan to‘lov kelishilgan summadan <b>30%</b> tashkil qiladi
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
/* h3 {
  font-weight: 500;
} */

.d-flex {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.d-flex ul {
  width: 48%;
}

ul > li:first-child {
  background-image: none;
  padding-left: 0;
}

ul > li:first-child h3 {
  font-size: 30px;
}

.subtitle-1{
  text-align: center;
  padding: 10px 0;
}
</style>
