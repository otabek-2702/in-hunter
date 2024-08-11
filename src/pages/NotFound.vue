<template>
    <div class="utility-page-wrap error-area">
      <div class="utility-page-content">
        <div class="container w-container">
          <div class="error-wrap">
            <img
              src="@/assets/images/error-404.png"
              sizes="(max-width: 577px) 94vw, 543px"
              srcset="@/assets/images/error-404-p-500.png 500w, @/assets/images/error-404.png 543w"
              alt="Error Image"
              class="error-image"
            />
            <h2 class="error-title">{{ t('error.title') }}</h2>
            <div class="error-excerpt">{{ t('error.excerpt') }}</div>
            <router-link :to="{ name: 'home' }" class="button-primary w-button">{{ t('error.backToHome') }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  </script>
  
  <style scoped>
  </style>
  