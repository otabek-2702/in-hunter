<script setup>
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const benefits = 5;
</script>
<template>
  <img
    alt="Service Details Image"
    loading="lazy"
    src="@/assets/images/package-service.jpg"
    class="service-details-image"
    height="413px"
  />
  <h2 class="service-details-title">
    {{ t("service-subscription.subscription") }}
  </h2>

  <div class="d-flex">
    <ul>
      <li>
        <h3>
          <span class="heading-span">6 </span>
          {{ t("service-subscription.month") }}
        </h3>
      </li>
      <hr />
      <li>
        <h4>
          <span class="heading-span">15</span>
          {{ t("service-subscription.work-place") }}
        </h4>
      </li>
      <li>
        <h4>60 {{ t("service-subscription.price-suffix") }}</h4>
      </li>
      <li>
        <h4>
          1 {{ t("service-subscription.per-position") }}:
          <span class="heading-span">4</span>
          {{ t("service-subscription.price-suffix") }}
        </h4>
      </li>
      <li>
        <h4>
          {{ t("service-subscription.best-result") }}
        </h4>
      </li>
    </ul>
    <ul>
      <li>
        <h3>
          <span class="heading-span">12 </span>
          {{ t("service-subscription.month") }}
        </h3>
      </li>
      <hr />
      <li>
        <h4>
          <span class="heading-span">30</span>
          {{ t("service-subscription.work-place") }}
        </h4>
      </li>
      <li>
        <h4>100 {{ t("service-subscription.price-suffix") }}</h4>
      </li>
      <li>
        <h4>
          1 {{ t("service-subscription.per-position") }}:
          <span class="heading-span">3.3</span>
          {{ t("service-subscription.price-suffix") }}
        </h4>
      </li>
      <li>
        <h4>
          {{ t("service-subscription.saving-money.left") }}
          <span class="heading-span">20</span>
          {{ t("service-subscription.saving-money.right") }}
        </h4>
      </li>
    </ul>
  </div>
  <h3 class="subtitle-1">
    {{ t("service-subscription.positionsPerMonth.left") }}
    <span class="heading-span">2-3</span
    >{{ t("service-subscription.positionsPerMonth.right") }}
  </h3>

  <ul>
    <li></li>
    <li v-for="(benefit, key) in benefits" :key="key">
      {{ t(`service-subscription.benefits${benefit}`) }}
    </li>
  </ul>

  <h2 class="service-details-title">
    {{ t("service-subscription.full-payment.part-one")
    }}<span class="heading-span">10%</span>
    {{ t("service-subscription.full-payment.part-two") }}
  </h2>

  <div class="faq-item service-faq-item">
    <div class="faq-question service-faq-question w-inline-block">
      <h3 class="faq-title">
        {{ t("service-subscription.prepayment.part-one") }}
        <b>30%</b>
        {{ t("service-subscription.prepayment.part-two") }}
        <b>5</b>
        {{ t("service-subscription.prepayment.part-three") }}
      </h3>
    </div>
  </div>
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

.subtitle-1 {
  text-align: center;
  padding: 10px 0;
}
</style>
