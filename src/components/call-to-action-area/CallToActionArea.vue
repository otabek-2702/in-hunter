<template>
  <div class="call-to-action-area">
    <div class="container w-container">
      <div class="call-to-action-wrap">
        <div class="call-to-action-image-wrap">
          <img
            class="call-to-action-image"
            src="@/assets/images/cta-img-pri.png"
            alt="Call To Action Image"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 47vw, (max-width: 1279px) 446px, 550px"
            data-w-id="3f6d1a74-f657-fa38-ee99-63e523509f55"
            loading="lazy"
            srcset="@/assets/images/cta-img-p-500.png 500w, @/assets/images/cta-img-pri.png 546w"
          />
        </div>
        <div data-w-id="1b411c32-b146-3904-fefe-43f34450d809" class="call-to-action-content">
          <div class="section-title-wrap section-title-wrap-left section-title-margin-dec">
            <div class="section-sub-title">{{ t('call-to-action-area.sectionSubTitle') }}</div>
            <h2 class="section-title" v-html="t('call-to-action-area.sectionTitle')"></h2>
          </div>
          <p class="call-to-action-excerpt">{{ t('call-to-action-area.callToActionExcerpt') }}</p>
          <div class="call-to-action-button-wrap">
            <router-link :to="{name: 'contact-us'}" class="button-primary call-to-action-button w-button">{{
              t('call-to-action-area.hireMe')
            }}</router-link>
            <router-link :to="{name: 'about-us'}" class="botton-outline w-button">{{ t('call-to-action-area.learnMore') }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div data-w-id="95280b80-0526-7513-fe46-fab249d937ac" class="call-to-action-shape-one">
      <img
        src="@/assets/images/cta-shape-1_1cta-shape-1-pri.png"
        loading="lazy"
        alt="Call To Action Shape Image"
        class="call-to-action-shape-image-one"
      />
    </div>
    <div class="call-to-action-shape-two">
      <img
        src="@/assets/images/cta-shape-2-pri.png"
        loading="lazy"
        data-w-id="5e410ce7-d527-3911-c59c-6d83c4010874"
        alt="Call To Action Shape Image"
        class="call-to-action-shape-image-two"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
