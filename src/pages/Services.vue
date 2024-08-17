<script setup>
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue';
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();

const services = ref([
  {
    id: '21b89470-7d48-8a9a-7a5f-beb24a1e7652',
    image: '', // Add image URL here
    title: t('servicePage.service1.title'),
    excerpt: t('servicePage.service1.excerpt'),
    link: '/service1',
  },
  // Add more services as needed
]);

const previousPage = ref('#'); // Replace with actual previous page link
const nextPage = ref('#'); // Replace with actual next page link
</script>

<template>
  <Breadcrumbs />

  <div class="service-page-area">
    <div class="container w-container">
      <div v-if="services.length" class="collection-list-wrapper-service w-dyn-list">
        <swiper
          :navigation="true"
          :spaceBetween="30"
          :modules="[Pagination]"
          :pagination="{
      clickable: true,
    }"
          class="mySwiper"
          style="margin: 0 45px;"
        >
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
        </swiper>
      </div>
      <div v-else class="w-dyn-empty">
        <div>{{ t('servicePage.noItemsFound') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
