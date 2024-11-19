<script setup>
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue';
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const services = ref([0,1,2])

</script>

<template>
  <Breadcrumbs />

  <div class="service-page-area">
    <div class="container w-container">
      <div data-w-id="0722e09f-603d-f804-ef06-36c8099d47a9" v-if="services.length" class="collection-list-wrapper-service w-dyn-list">
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
