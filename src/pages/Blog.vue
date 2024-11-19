<script setup>
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

onMounted(() => {
  $('html').attr('data-wf-page', '6666fcda3ffd3947b1b20825');
  $('html').attr('data-wf-site', '6666fcd93ffd3947b1b2078b');
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require('ix2').init();
  document.dispatchEvent(new Event('readystatechange'));
});

const banners = ref([0, 1, 2, 3]);
</script>

<template>
  <Breadcrumbs />
  <div class="blog-page-area">
    <div class="container w-container">
      <div
        data-w-id="b415050b-27ac-0f1e-0ce1-0ffeb13d1e72"
        v-if="banners.length"
        class="collection-list-wrapper-project-grid w-dyn-list"
      >
        <swiper
          :navigation="true"
          :spaceBetween="30"
          :modules="[Pagination]"
          :pagination="{
            clickable: true,
          }"
          class="mySwiper"
          style="margin: 0 45px"
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
        <div>{{ t('blog.noItemsFound') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
