<script setup>
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs.vue";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

onMounted(() => {
  $("html").attr("data-wf-page", "6666fcda3ffd3947b1b20825");
  $("html").attr("data-wf-site", "6666fcd93ffd3947b1b2078b");
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require("ix2").init();
  document.dispatchEvent(new Event("readystatechange"));
});

const services = ref([
  {
    img: "https://cdn.prod.website-files.com/6406f54b722f3281fe1586fe/641a8c39ff592432c7a3c538_service-icon-7.svg",
    id: 1,
  },
  {
    img: "https://cdn.prod.website-files.com/6406f54b722f3281fe1586fe/640710bec01537eec3ab22b1_service-icon-4.svg",
    id: 2,
  },
  {
    img: "https://cdn.prod.website-files.com/6406f54b722f3281fe1586fe/6407108590c3f642f4ffd6d4_service-icon-6.svg",
    id: 3,
  },

  {
    img: "https://cdn.prod.website-files.com/6406f54b722f3281fe1586fe/6407104f50d228b707edb218_service-icon-5.svg",
    id: 4,
  },
  {
    img: "https://cdn.prod.website-files.com/6406f54b722f3281fe1586fe/640700e8f3b8803da7c8670d_service-icon-3.png",
    id: 5,
  },
  {
    img: "https://cdn.prod.website-files.com/6406f54b722f3281fe1586fe/6406fb7cb8fd3fd9cc1eae66_service-icon-2.png",
    id: 6,
  },
]);
</script>

<template>
  <Breadcrumbs />

  <div class="service-page-area">
    <div class="container w-container">
      <div
        data-w-id="cd3d136f-109c-9c3c-94d3-db4719a1800c"
        class="section-title-wrap"
      >
        <div class="section-sub-title">{{ t("services.subTitle") }}</div>
        <h2 class="section-title">
          {{ t("services.title.part1") }}
          <span class="heading-span">{{ t("services.title.highlited") }} </span>
          {{ t("services.title.part2") }}
        </h2>
      </div>
      <div
        data-w-id="0722e09f-603d-f804-ef06-36c8099d47a9"
        v-if="services.length"
        class="collection-list-wrapper-service w-dyn-list"
      >
        <swiper
          navigation
          slidesPerView="3"
          :spaceBetween="30"
          :modules="[Pagination, Navigation]"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="(item, i) in services"
            ><div role="listitem" class="collection-item-service w-dyn-item">
              <div
                data-w-id="21b89470-7d48-8a9a-7a5f-beb24a1e7652"
                class="single-service"
              >
                <img
                  loading="lazy"
                  :src="item.img"
                  alt="Service Image"
                  class="service-image"
                />
                <router-link href="#" class="service-title-link w-inline-block">
                  <h3 class="service-title">
                    {{ t(`services.card${item.id}Title`) }}
                  </h3>
                </router-link>
                <p class="service-excerpt"></p>
                <!-- <router-link
                  href="#"
                  class="button-primary button-secondary service-button w-button"
                  >Read More</router-link
                > -->
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div v-else class="w-dyn-empty">
        <div>{{ t("services.noItemsFound") }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-button-prev,
.swiper-button-next {
  background: transparent;
}

/* Сдвигаем внутрь */
.swiper-button-prev {
  left: 0px;
}

.swiper-button-next {
  right: 0;
}
</style>
