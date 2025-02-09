<template>
  <div class="utility-page-wrap error-area">
    <div class="utility-page-content">
      <div class="container w-container">
        <div class="error-wrap">
          <img
            src="@/assets/images/error-404.png"
            sizes="(max-width: 577px) 94vw, 543px"
            srcset="
              @/assets/images/error-404-p-500.png 500w,
              @/assets/images/error-404.png       543w
            "
            alt="Error Image"
            class="error-image"
          />
          <h2 class="error-title">{{ t("error.title") }}</h2>
          <div class="error-excerpt">{{ t("error.excerpt") }}</div>
          <router-link :to="{ name: 'home' }" class="button-primary w-button">{{
            t("error.backToHome")
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped></style>
