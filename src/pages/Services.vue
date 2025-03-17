<script setup>
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs.vue";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

onMounted(() => {
  $("html").attr("data-wf-page", "6666fcda3ffd3947b1b20825");
  $("html").attr("data-wf-site", "6666fcd93ffd3947b1b2078b");
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require("ix2").init();
  document.dispatchEvent(new Event("readystatechange"));
});
const { t } = useI18n();
const benefits = 5;
</script>

<template>
  <Breadcrumbs />

  <div class="service-details-area">
    <div class="container w-container">
      <div
        data-w-id="f53a7d19-e14b-b44f-ce2f-97142d65f628"
        class="service-details-wrap"
      >
        <!-- 1 -->
        <div class="service-details-left-content">
          <img
            alt="Service Details Image"
            loading="lazy"
            src="@/assets/images/standard-service.jpg"
            class="service-details-image"
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
        </div>

        <!-- 2 -->
        <div class="service-details-right-content">
          <img
            alt="Service Details Image"
            loading="lazy"
            src="@/assets/images/package-service.jpg"
            class="service-details-image"
          />
          <h2 class="service-details-title">
            {{ t("service-subscription.subscription") }}
          </h2>

          <div class="d-flex flex-no-wrap">
            <!-- left -->
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
            <!-- right -->
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

          <!-- <ul>
            <li></li>
            <li v-for="(benefit, key) in benefits" :key="key">
              {{ t(`service-subscription.benefits${benefit}`) }}
            </li>
          </ul> -->

          <h3 class="subtitle-1">
            {{ t("service-subscription.full-payment.part-one")
            }}<span class="heading-span">10%</span>
            {{ t("service-subscription.full-payment.part-two") }}
          </h3>
        </div>
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.heading-span {
  font-weight: bold;
}
.service-details-left-content {
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
}
.service-details-right-content {
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
    padding-top: 10px;
  }
}
</style>
