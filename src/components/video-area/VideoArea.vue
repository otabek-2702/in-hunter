<template>
    <div class="video-area">
      <div class="container w-container">
        <div data-w-id="760644d8-7568-f22c-a5ae-f636fa1d6837" style="opacity:0" class="video-wrap">
          <img
            src="@/assets/images/video-img.png"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 962px, 1170px"
            srcset="
              @/assets/images/video-img-p-500.png  500w,
              @/assets/images/video-img-p-800.png  800w,
              @/assets/images/video-img-p-1080.png 1080w,
              @/assets/images/video-img.png       1170w
            "
            alt="Video Image"
            class="video-iimag-two"
          />
          <div class="video-popup">
            <a :href="videoLink" class="video-popup-link w-inline-block w-lightbox">
              <div class="video-popup-icon w-embed">
                <svg width="16" height="29" viewBox="0 0 16 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.3661 11.2389L10.3346 7.20736L3.76547 0.638247C2.37388 -0.732875 0 0.249421 0 2.21401V14.9634V26.444C0 28.4086 2.37388 29.3909 3.76547 27.9993L14.3661 17.3987C16.0646 15.7206 16.0646 12.9374 14.3661 11.2389Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <script type="application/json" class="w-json">
                {{
                  videoJson
                }}
              </script>
            </a>
          </div>
        </div>
      </div>
      <div class="video-shape">
        <img
          src="@/assets/images/video-shape.png"
          loading="lazy"
          sizes="(max-width: 479px) 100vw, (max-width: 991px) 300px, (max-width: 1279px) 450px, 545px"
          srcset="
            @/assets/images/video-shape-p-500.png  500w,
            @/assets/images/video-shape.png        545w
          "
          alt="Video Shape Image"
          class="video-shape-image"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  
  // Localized data
  const videoLink = "https://www.youtube.com/watch?v=eh4dWMtULrg";
  const videoJson = JSON.stringify({
    items: [
      {
        url: videoLink,
        originalUrl: videoLink,
        width: 940,
        height: 528,
        thumbnailUrl: "https://i.ytimg.com/vi/eh4dWMtULrg/hqdefault.jpg",
        html: `<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Feh4dWMtULrg%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Deh4dWMtULrg&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Feh4dWMtULrg%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" width="940" height="528" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>`,
        type: "video",
      },
    ],
    group: ""
  });
  </script>
  