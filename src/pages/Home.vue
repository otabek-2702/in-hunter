<script setup>
import AboutArea from "@/components/about-area/AboutArea.vue";
import { useI18n } from "vue-i18n";
import TestimonialImg1 from "@/assets/images/testimonial-1.png";
import TestimonialImg2 from "@/assets/images/testimonial-2.png";
import CallToActionArea from "@/components/call-to-action-area/CallToActionArea.vue";
import { onMounted } from "vue";
import { computed } from "vue";
import { clientLogos } from "@/data/clientLogos";
import ServicesArea from "./ServicesArea.vue";

const { t, tm } = useI18n();

const testimonials = computed(() => [
  {
    name: t("home.testimonials.vincent.name"),
    designation: t("home.testimonials.vincent.designation"),
    excerpt: t("home.testimonials.vincent.excerpt"),
    image: TestimonialImg1,
  },
  {
    name: t("home.testimonials.effie.name"),
    designation: t("home.testimonials.effie.designation"),
    excerpt: t("home.testimonials.effie.excerpt"),
    image: TestimonialImg2,
  },
  {
    name: t("home.testimonials.donna.name"),
    designation: t("home.testimonials.donna.designation"),
    excerpt: t("home.testimonials.donna.excerpt"),
    image: TestimonialImg1,
  },
  {
    name: t("home.testimonials.vincent.name"),
    designation: t("home.testimonials.vincent.designation"),
    excerpt: t("home.testimonials.vincent.excerpt"),
    image: TestimonialImg1,
  },
  {
    name: t("home.testimonials.vincent.name"),
    designation: t("home.testimonials.vincent.designation"),
    excerpt: t("home.testimonials.vincent.excerpt"),
    image: TestimonialImg1,
  },
  {
    name: t("home.testimonials.effie.name"),
    designation: t("home.testimonials.effie.designation"),
    excerpt: t("home.testimonials.effie.excerpt"),
    image: TestimonialImg2,
  },
  {
    name: t("home.testimonials.donna.name"),
    designation: t("home.testimonials.donna.designation"),
    excerpt: t("home.testimonials.donna.excerpt"),
    image: TestimonialImg1,
  },
  {
    name: t("home.testimonials.vincent.name"),
    designation: t("home.testimonials.vincent.designation"),
    excerpt: t("home.testimonials.vincent.excerpt"),
    image: TestimonialImg1,
  },
]);

onMounted(() => {
  $("html").attr("data-wf-page", "6666fcda3ffd3947b1b20825");
  $("html").attr("data-wf-site", "6666fcd93ffd3947b1b2078b");
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require("ix2").init();
  document.dispatchEvent(new Event("readystatechange"));
});
</script>
<template>
  <div class="hero-section">
    <div class="container w-container">
      <div class="hero-wrap">
        <div class="hero-content">
          <div
            data-w-id="78a5cd7f-6c69-736d-0921-7027de9afd62"
            class="hero-sub-title"
          >
            {{ t("hero.subTitle") }}
          </div>
          <h1
            data-w-id="61ed2c7a-7cad-acf9-9841-6cc58f01cef0"
            class="heading-h1-big hero-title"
          >
            {{ t("hero.title.line1") }}<br />{{ t("hero.title.line2") }}
          </h1>
          <p
            data-w-id="48b2428a-2be8-0d5e-f790-eb74eef24e09"
            class="hero-excerpt"
          >
            {{ t("hero.excerpt") }}
          </p>
          <div
            data-w-id="a0e29bfc-4880-812e-b21a-9580756b6973"
            class="hero-button-video-wrap"
          >
            <div class="hero-button">
              <router-link
                :to="{ name: 'about-us' }"
                class="button-primary w-button"
              >
                {{ t("hero.buttonText") }}
              </router-link>
            </div>
            <div class="hero-video-wrap">
              <div class="hero-video-icon-wrap">
                <a href="#" class="hero-video-icon w-inline-block w-lightbox">
                  <div class="hero-play-icon w-embed">
                    <svg
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                  {{ t("hero.videoPopupText") }}
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
            srcset="
              @/assets/images/hero-img-p-500.png 500w,
              @/assets/images/hero-img.png       654w
            "
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

  <ServicesArea />

  <div class="funfact-area">
    <div class="container w-container">
      <div
        data-w-id="30dbbf71-5519-4cf2-fca0-0f315e439910"
        class="section-title-wrap"
      >
        <div class="section-sub-title">
          {{ t("home.funfact.sectionSubTitle") }}
        </div>
        <h2 class="section-title">
          {{ t("home.funfact.sectionTitle.line1") }}
          <br />
          <span class="heading-span">{{
            t("home.funfact.sectionTitle.line2")
          }}</span>
          {{ t("home.funfact.sectionTitle.line3") }}
        </h2>
      </div>
      <div class="funfact-wrap">
        <div
          data-w-id="df2e64fd-3747-dd74-8919-43fd6842d30e"
          class="single-funfact"
        >
          <div class="funfact-number">
            {{ t("home.funfact.facts.clients.number") }}
          </div>
          <div class="funfact-title" style="max-width: 160px">
            {{ t("home.funfact.facts.clients.title") }}
          </div>
          <div class="funfact-separator" style="height: 100%"></div>
        </div>
        <div
          data-w-id="f4cce356-3767-67a7-3b4a-4ca06335efe6"
          class="single-funfact"
        >
          <div class="funfact-number">
            {{ t("home.funfact.facts.reviews.number") }}
          </div>
          <div class="funfact-title" style="max-width: 160px">
            {{ t("home.funfact.facts.reviews.title") }}
          </div>
          <div
            class="funfact-separator funfact-separetor-two"
            style="height: 100%"
          ></div>
        </div>
        <div
          data-w-id="e815f046-73ee-0a65-4b88-427bb11fce12"
          class="single-funfact"
        >
          <div class="funfact-number">
            {{ t("home.funfact.facts.teamMembers.number") }}
          </div>
          <div class="funfact-title" style="max-width: 160px">
            {{ t("home.funfact.facts.teamMembers.title") }}
          </div>
          <div
            class="funfact-separator funfact-separetor-three"
            style="height: 100%"
          ></div>
        </div>
        <div
          data-w-id="08b00170-bee8-5392-e0c6-fef6bcf35e37"
          class="single-funfact"
        >
          <div class="funfact-number">
            {{ t("home.funfact.facts.projectsDone.number") }}
          </div>
          <div class="funfact-title" style="max-width: 160px">
            {{ t("home.funfact.facts.projectsDone.title") }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="testimonial-area">
    <div class="container w-container">
      <div
        data-w-id="5440e64e-8e04-b1cd-74d4-5d24e799fbcf"
        class="testimonial-wrap"
      >
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
                    <p class="testimonial-designation">
                      {{ testimonial.designation }}
                    </p>
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

  <div class="faq-area">
    <div class="container w-container">
      <div class="faq-wrap">
        <div class="faq-content-wrap">
          <div
            data-w-id="165c4851-0983-2c2c-3c5c-17d1b74b53ba"
            class="section-title-wrap section-title-wrap-left"
          >
            <div class="section-sub-title">{{ t("home.faq.subTitle") }}</div>
            <h2 class="section-title">{{ t("home.faq.title") }}</h2>
          </div>
          <div class="faq-content">
            <div class="faq-item" v-for="accordion in tm('home.faq.items')">
              <a
                data-w-id="bb97160a-f70c-9d51-6c33-9160c8276bc8"
                href="#"
                class="faq-question w-inline-block"
              >
                <h3 class="faq-title">{{ accordion.question }}</h3>
                <div class="p-m-wrap">
                  <div class="minus"></div>
                  <div class="plus"></div>
                </div>
              </a>
              <div style="height: 0px" class="faq-answer">
                <div class="faq-answer-inner">
                  <p class="paragraph">{{ accordion.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="faq-image-wrap">
          <div
            data-w-id="7f40d37a-bf12-4c9d-b33a-5111c227d2eb"
            class="faq-image-inner"
          >
            <img
              src="@/assets/images/faq-img.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 45vw, (max-width: 1279px) 446px, 514px"
              srcset="
                @/assets/images/faq-img-p-500.png 500w,
                @/assets/images/faq-img.png       511w
              "
              alt="Faq Image"
              class="faq-image"
            />
            <div class="faq-shape-one-wrap">
              <img
                src="@/assets/images/faq-shape-1_1faq-shape-1.png"
                loading="lazy"
                alt="Faq Shape Image"
                class="faq-shape-image-one"
              />
            </div>
            <div class="faq-shape-two-wrap">
              <img
                src="@/assets/images/faq-shape-2_1faq-shape-2.png"
                loading="lazy"
                alt="Faq Shape Image"
                class="faq-shape-image-two"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-shape-three-wrap">
      <img
        class="faq-shape-image-three"
        src="@/assets/images/faq-shape-3.png"
        alt="Faq Shape Image"
        sizes="(max-width: 479px) 100vw, (max-width: 1279px) 150px, (max-width: 1919px) 300px, 603px"
        data-w-id="faf6975f-f4f2-a7ef-7015-9c5f4ce6ec59"
        loading="lazy"
        srcset="
          @/assets/images/faq-shape-3-p-500.png 500w,
          @/assets/images/faq-shape-3.png       603w
        "
      />
    </div>
  </div>

  <!-- swiper project-area Our Case Studies -->

  <CallToActionArea />

  <!-- swiper blog-area Daily Experience -->

  <div class="brand-logo-area">
    <div class="container w-container">
      <div class="brand-logo-wrapper">
        <div
          style="
            -webkit-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0)
              rotateY(0) rotateZ(0) skew(0, 0);
            -moz-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0)
              rotateY(0) rotateZ(0) skew(0, 0);
            -ms-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0)
              rotateY(0) rotateZ(0) skew(0, 0);
            transform: translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0)
              rotateY(0) rotateZ(0) skew(0, 0);
          "
          class="brand-logo-wrap"
        >
          <div class="single-brand-logo" v-for="(src, index) in clientLogos">
            <img
              :src="src"
              loading="lazy"
              alt="Brand Logo"
              class="brand-logo-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
