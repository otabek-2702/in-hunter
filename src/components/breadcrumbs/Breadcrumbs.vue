<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const route = useRoute();
const { t } = useI18n();
</script>

<template>
  <div class="breadcrumb">
    <div class="container w-container">
      <div class="breadcrumb-wrap">
        <h1 class="breadcrumb-heading">{{ t('nav.' + route.name) }}</h1>
        <div class="breadcrumb-meta-wrap">
          <router-link :to="{ name: 'home' }" class="back-link-breadcrumb w-inline-block">
            <div class="breadcrumb-icon w-embed">
              <svg
                width="21"
                height="17"
                viewbox="0 0 21 17"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5007 3.51758L3.01119 9.69191C3.01119 9.70063 3.009 9.71345 3.00462 9.73092C3.00033 9.74826 2.99805 9.76085 2.99805 9.76979V16.022C2.99805 16.2477 3.08058 16.4433 3.2456 16.6081C3.41057 16.7729 3.60592 16.8558 3.83171 16.8558H8.83332V11.854H12.1682V16.856H17.1698C17.3955 16.856 17.5911 16.7733 17.7559 16.6081C17.9209 16.4435 18.0037 16.2477 18.0037 16.022V9.76979C18.0037 9.73512 17.9989 9.70893 17.9906 9.69191L10.5007 3.51758Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M20.8551 8.28464L18.0027 5.91399V0.599553C18.0027 0.47806 17.9637 0.378146 17.8853 0.299949C17.8075 0.221843 17.7076 0.18279 17.5859 0.18279H15.085C14.9634 0.18279 14.8635 0.221843 14.7853 0.299949C14.7072 0.378146 14.6682 0.478105 14.6682 0.599553V3.1395L11.49 0.482211C11.2125 0.256425 10.8824 0.143555 10.5003 0.143555C10.1182 0.143555 9.78822 0.256425 9.51038 0.482211L0.14474 8.28464C0.0579205 8.35398 0.0103361 8.44733 0.00148536 8.56458C-0.00731981 8.68174 0.0230192 8.78407 0.0925937 8.87084L0.90016 9.83476C0.969734 9.91286 1.0608 9.96063 1.17371 9.9781C1.27796 9.98686 1.38221 9.95638 1.48646 9.88695L10.5 2.37099L19.5137 9.8869C19.5833 9.94749 19.6743 9.97774 19.7872 9.97774H19.8264C19.9391 9.96058 20.03 9.9125 20.0999 9.83457L20.9076 8.8708C20.977 8.78384 21.0075 8.68169 20.9984 8.56439C20.9895 8.44746 20.9418 8.35412 20.8551 8.28464Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div class="back-text-breadcrumb">{{ t('nav.home') }}</div>
          </router-link>
          <div class="breadcrumb-line-shape">
            <div class="breadcrumb-right-icon w-embed">
              <svg
                width="6"
                height="11"
                viewbox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9.92709L4.67453 6.25255C5.10849 5.8186 5.10849 5.10849 4.67453 4.67453L1 1"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div class="current-page-title">{{ t('nav.' + route.name) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
