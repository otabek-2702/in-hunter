<script setup>
import AboutArea from '@/components/about-area/AboutArea.vue';
import { useI18n } from 'vue-i18n';
import TestimonialImg1 from '@/assets/images/testimonial-1.png';
import TestimonialImg2 from '@/assets/images/testimonial-2.png';

const { t } = useI18n();

const testimonials = [
  {
    name: t('home.testimonials.vincent.name'),
    designation: t('home.testimonials.vincent.designation'),
    excerpt: t('home.testimonials.vincent.excerpt'),
    image: TestimonialImg1,
  },
  {
    name: t('home.testimonials.effie.name'),
    designation: t('home.testimonials.effie.designation'),
    excerpt: t('home.testimonials.effie.excerpt'),
    image: TestimonialImg2,
  },
  {
    name: t('home.testimonials.donna.name'),
    designation: t('home.testimonials.donna.designation'),
    excerpt: t('home.testimonials.donna.excerpt'),
    image: TestimonialImg1,
  },
  {
    name: t('home.testimonials.vincent.name'),
    designation: t('home.testimonials.vincent.designation'),
    excerpt: t('home.testimonials.vincent.excerpt'),
    image: TestimonialImg1,
  },
  {
    name: t('home.testimonials.vincent.name'),
    designation: t('home.testimonials.vincent.designation'),
    excerpt: t('home.testimonials.vincent.excerpt'),
    image: TestimonialImg1,
  },
  {
    name: t('home.testimonials.effie.name'),
    designation: t('home.testimonials.effie.designation'),
    excerpt: t('home.testimonials.effie.excerpt'),
    image: TestimonialImg2,
  },
  {
    name: t('home.testimonials.donna.name'),
    designation: t('home.testimonials.donna.designation'),
    excerpt: t('home.testimonials.donna.excerpt'),
    image: TestimonialImg1,
  },
  {
    name: t('home.testimonials.vincent.name'),
    designation: t('home.testimonials.vincent.designation'),
    excerpt: t('home.testimonials.vincent.excerpt'),
    image: TestimonialImg1,
  },
];
</script>
<template>
  <div class="hero-section">
    <div class="container w-container">
      <div class="hero-wrap">
        <div class="hero-content">
          <div data-w-id="78a5cd7f-6c69-736d-0921-7027de9afd62" class="hero-sub-title">
            {{ t('hero.subTitle') }}
          </div>
          <h1 data-w-id="61ed2c7a-7cad-acf9-9841-6cc58f01cef0" class="heading-h1-big hero-title">
            {{ t('hero.title.line1') }}<br />{{ t('hero.title.line2') }}
          </h1>
          <p data-w-id="48b2428a-2be8-0d5e-f790-eb74eef24e09" class="hero-excerpt">
            {{ t('hero.excerpt') }}
          </p>
          <div data-w-id="a0e29bfc-4880-812e-b21a-9580756b6973" class="hero-button-video-wrap">
            <div class="hero-button">
              <router-link :to="{ name: 'about' }" class="button-primary w-button">
                {{ t('hero.buttonText') }}
              </router-link>
            </div>
            <div class="hero-video-wrap">
              <div class="hero-video-icon-wrap">
                <a href="#" class="hero-video-icon w-inline-block w-lightbox">
                  <div class="hero-play-icon w-embed">
                    <svg viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.84218 4.88569L3.17665 0.322494C2.86882 0.11161 2.55866 0 2.30086 0C1.80245 0 1.49414 0.40001 1.49414 1.06957V10.932C1.49414 11.6008 1.80206 12 2.29931 12C2.5575 12 2.8627 11.8883 3.17121 11.6768L9.83985 7.11372C10.2687 6.81979 10.5062 6.42424 10.5062 5.99947C10.5063 5.57498 10.2715 5.17953 9.84218 4.88569Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div class="hero-video-popup-text">
                <a href="https://youtube.com">
                  {{ t('hero.videoPopupText') }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-image-wrap">
          <img
            class="hero-img"
            src="@/assets/images/hero-img.png"
            alt="Hero Image"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 69vw, (max-width: 991px) 47vw, (max-width: 1279px) 466px, (max-width: 1439px) 570px, 660px"
            data-w-id="9b1cbab1-48cf-b6a5-02e9-a2417be05fe5"
            loading="lazy"
            srcset="@/assets/images/hero-img-p-500.png 500w, @/assets/images/hero-img.png 654w"
          />
        </div>
      </div>
    </div>
    <div class="hero-shape-img-wrap-one">
      <img
        src="@/assets/images/hero-shape-left-top.png"
        loading="lazy"
        data-w-id="3bf99a05-b39b-7bb6-52e0-2cc421d5f2d2"
        alt="Hero Shape Image"
        class="hero-shape-img-one"
      />
    </div>
    <div class="hero-shape-img-wrap-two">
      <img
        class="hero-shape-img-two"
        src="@/assets/images/hero-shape-right-bottom.png"
        alt="Hero Shape Image"
        sizes="(max-width: 479px) 100vw, (max-width: 767px) 237px, (max-width: 991px) 250px, (max-width: 1279px) 400px, (max-width: 1919px) 300px, 547px"
        data-w-id="5091ae66-2eac-72d4-5d23-8299602f0d84"
        loading="lazy"
        srcset="
          @/assets/images/hero-shape-right-bottom-p-500.png 500w,
          @/assets/images/hero-shape-right-bottom.png       547w
        "
      />
    </div>
  </div>

  <AboutArea />
  <!-- services are -->

  <div class="funfact-area">
    <div class="container w-container">
      <div data-w-id="30dbbf71-5519-4cf2-fca0-0f315e439910" class="section-title-wrap">
        <div class="section-sub-title">{{ t('home.funfact.sectionSubTitle') }}</div>
        <h2 class="section-title">
          {{ t('home.funfact.sectionTitle.line1') }}
          <br />
          <span class="heading-span">{{ t('home.funfact.sectionTitle.line2') }}</span>
          {{ t('home.funfact.sectionTitle.line3') }}
        </h2>
      </div>
      <div class="funfact-wrap">
        <div data-w-id="df2e64fd-3747-dd74-8919-43fd6842d30e" class="single-funfact">
          <div class="funfact-number">{{ t('home.funfact.facts.clients.number') }}</div>
          <div class="funfact-title" style="max-width: 160px">
            {{ t('home.funfact.facts.clients.title') }}
          </div>
          <div class="funfact-separator" style="height: 100%"></div>
        </div>
        <div data-w-id="f4cce356-3767-67a7-3b4a-4ca06335efe6" class="single-funfact">
          <div class="funfact-number">{{ t('home.funfact.facts.reviews.number') }}</div>
          <div class="funfact-title" style="max-width: 160px">
            {{ t('home.funfact.facts.reviews.title') }}
          </div>
          <div class="funfact-separator funfact-separetor-two" style="height: 100%"></div>
        </div>
        <div data-w-id="e815f046-73ee-0a65-4b88-427bb11fce12" class="single-funfact">
          <div class="funfact-number">{{ t('home.funfact.facts.teamMembers.number') }}</div>
          <div class="funfact-title" style="max-width: 160px">
            {{ t('home.funfact.facts.teamMembers.title') }}
          </div>
          <div class="funfact-separator funfact-separetor-three" style="height: 100%"></div>
        </div>
        <div data-w-id="08b00170-bee8-5392-e0c6-fef6bcf35e37" class="single-funfact">
          <div class="funfact-number">{{ t('home.funfact.facts.projectsDone.number') }}</div>
          <div class="funfact-title" style="max-width: 160px">
            {{ t('home.funfact.facts.projectsDone.title') }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="testimonial-area">
    <div class="container w-container">
      <div data-w-id="5440e64e-8e04-b1cd-74d4-5d24e799fbcf" class="testimonial-wrap">
        <div
          data-delay="10000"
          data-animation="slide"
          class="slider-testimonial w-slider"
          data-autoplay="true"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="10000"
          data-infinite="true"
        >
          <div class="mask-testimonial w-slider-mask">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="single-testimonial-wrap w-slide"
            >
              <div class="single-testimonial">
                <div class="testimonial-client-info-wrap">
                  <div class="testimonial-client-image-wrap">
                    <img
                      :src="testimonial.image"
                      loading="lazy"
                      :alt="testimonial.name"
                      class="testimonial-client-img"
                    />
                  </div>
                  <div class="testimonial-client-info">
                    <div class="testimonial-name">{{ testimonial.name }}</div>
                    <p class="testimonial-designation">{{ testimonial.designation }}</p>
                  </div>
                </div>
                <p class="testimonial-excerpt">{{ testimonial.excerpt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
