<template>
  <div class="about-area">
    <div class="container w-container">
      <div class="about-wrap">
        <div class="about-image-wrap">
          <div class="about-main-image">
            <img
              src="@/assets/images/about-img-1.png"
              alt="About Image"
              loading="lazy"
              class="about-image"
            />
          </div>
          <img
            src="@/assets/images/about-img-2.png"
            alt="About Image two"
            loading="lazy"
            class="about-image-two"
          />
          <img
            src="@/assets/images/about-img-3.png"
            alt="About Image Three"
            loading="lazy"
            class="about-image-three"
          />
          <div class="about-img-card-wrap">
            <div class="about-card-title">
              <div class="about-card-year">{{ t("about-us.experience") }}</div>
              <div class="about-card-experience">
                {{ t("about-us.experienceYears") }}
              </div>
            </div>
            <p class="about-card-excerpt">{{ t("about-us.successStories") }}</p>
            <img
              src="@/assets/images/about-img-4_1about-img-4.png"
              alt="About Card Img"
              loading="lazy"
              class="about-card-image"
            />
          </div>
        </div>
        <div class="about-content">
          <div class="section-sub-title">{{ t("about-us.subTitle") }}</div>
          <h2 class="about-heading">
            {{ t("about-us.heading") }}
            <span class="heading-span">{{ t("about-us.headingSpan") }}</span>
          </h2>
          <p class="about-excerpt">{{ t("about-us.excerpt") }}</p>
          <router-link
            :to="{ name: 'about-us' }"
            class="button-primary w-button"
            >{{ t("about-us.appointment") }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="about-shape">
      <img
        class="about-shape-image"
        src="@/assets/images/about-shape.png"
        alt="About Image"
        sizes="(max-width: 479px) 100vw, (max-width: 991px) 400px, (max-width: 1279px) 600px, 738px"
        data-w-id="bd506700-dad7-838f-b3ac-953b3b1462cf"
        loading="lazy"
        srcset="
          @/assets/images/about-shape-p-500.png 500w,
          @/assets/images/about-shape.png       738w
        "
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped></style>
