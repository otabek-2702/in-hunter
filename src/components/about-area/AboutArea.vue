<template>
  <div class="about-area">
    <div class="container w-container">
      <div class="about-wrap">
        <div class="about-image-wrap">
          <div class="about-main-image">
            <img
              src="@/assets/images/about-img-1.png"
              loading="lazy"
              alt="About Image"
              class="about-image"
            />
          </div>
          <img
            src="@/assets/images/about-img-2.png"
            loading="lazy"
            alt="About Image two"
            class="about-image-two"
          />
          <img
            src="@/assets/images/about-img-3.png"
            loading="lazy"
            alt="About Image Three"
            class="about-image-three"
          />
          <div class="about-img-card-wrap">
            <div class="about-card-title">
              <div class="about-card-year">35</div>
              <div class="about-card-experience">
                {{ t('about.card_experience') }}
              </div>
            </div>
            <p class="about-card-excerpt">
              {{ t('about.card_excerpt') }}
            </p>
            <img
              src="@/assets/images/about-img-4_1about-img-4.png"
              loading="lazy"
              alt="About Card Img"
              class="about-card-image"
            />
          </div>
        </div>
        <div class="about-content">
          <div class="section-sub-title">{{ t('about.section_sub_title') }}</div>
          <h2 class="about-heading">
            {{ t('about.heading_1') }}
            <span class="heading-span">{{ t('about.heading_span') }}</span>
            {{ t('about.heading_2') }}
          </h2>
          <p class="about-excerpt">
            {{ t('about.excerpt') }}
          </p>
          <a href="about-us.html" class="button-primary w-button">{{ t('about.explore_more') }}</a>
        </div>
      </div>
    </div>
    <div class="about-shape">
      <img
        class="about-shape-image"
        src="@/assets/images/about-shape.png"
        alt="About Image"
        style="opacity: 0"
        sizes="(max-width: 479px) 100vw, (max-width: 991px) 400px, (max-width: 1279px) 600px, 738px"
        data-w-id="6bf67e97-607e-7b08-3e64-7a33fe3f86a2"
        loading="lazy"
        srcset="@/assets/images/about-shape-p-500.png 500w, @/assets/images/about-shape.png 738w"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped></style>
