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
    height="413px"
  />
  <h2 class="service-details-title">
    {{ t("service-standard.standard") }}
  </h2>

  <ul>
    <li class="bg-none">
      <h3>
        <span class="heading-span">
          {{ t("service-standard.office.title") }}
        </span>
        {{ t("service-standard.office.right") }}
      </h3>
    </li>
    <li>
      <p class="service-summary">
        {{ t("service-standard.salary.left") }}
        <b>9%</b>
        {{ t("service-standard.salary.right") }}
      </p>
    </li>

    <li class="bg-none">
      <h3>
        {{ t("service-standard.midLevel.left") }}
        <span class="heading-span">
          {{ t("service-standard.midLevel.title") }}
        </span>
        {{ t("service-standard.midLevel.right") }}
      </h3>
    </li>
    <li>
      <p class="service-summary">
        {{ t("service-standard.salary.left") }}
        <b>12%</b>
        {{ t("service-standard.salary.right") }}
      </p>
    </li>

    <li class="bg-none">
      <h3>
        {{ t("service-standard.highLevel.left") }}
        <span class="heading-span">
          {{ t("service-standard.highLevel.title") }}
        </span>
        {{ t("service-standard.highLevel.right") }}
      </h3>
    </li>
    <li>
      <p class="service-summary">
        {{ t("service-standard.salary.left") }}
        <b>15%</b>
        {{ t("service-standard.salary.right") }}
      </p>
    </li>
  </ul>

  <div class="faq-item service-faq-item">
    <div class="faq-question service-faq-question w-inline-block">
      <h3 class="faq-title">
        {{ t("service-standard.prepayment.part-one") }}
        <b>30%</b>
        {{ t("service-standard.prepayment.part-two") }}
        <b>5</b>
        {{ t("service-standard.prepayment.part-three") }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
.heading-span {
  font-weight: bold;
}
h3 {
  font-weight: 500;
}

ul li.bg-none {
  background-image: none;
  padding-left: 0;
}

ul > li.bg-none h3 {
  font-size: 30px;
}

.subtitle-1 {
  text-align: center;
  padding: 10px 0;
}
body {
  scroll-behavior: smooth;
}
</style>
