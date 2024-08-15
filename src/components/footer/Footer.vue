<script setup></script>

<template>
  <footer class="footer-area">
    <div class="footer-top">
      <div class="container w-container">
        <div class="footer-wrap">
          <div class="footer-widget footer-about">
            <div class="footer-logo">
              <a href="/" aria-current="page" class="footer-logo-link w-inline-block w--current">
                <img
                  src="@/assets/images/logo-white.png"
                  loading="lazy"
                  alt="Footer Logo"
                  class="footer-logo-image"
                />
              </a>
            </div>
            <p class="footer-excerpt">{{ t('footer.address') }}</p>
            <div class="footer-contact">
              <div class="footer-contact-title">{{ t('footer.callUs') }}</div>
              <div class="contact-number">{{ t('footer.phoneNumber') }}</div>
            </div>
            <div class="footer-social-icon-wrap">
              <a
                href="https://twitter.com/"
                target="_blank"
                class="footer-social-link-block w-inline-block"
              >
                <div class="footer-social-icon w-embed">
                  <svg
                    width="23"
                    height="18"
                    viewbox="0 0 23 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1538 2.13092C21.33 2.49231 20.4522 2.73185 19.5369 2.84815C20.4785 2.286 21.1971 1.40262 21.5349 0.337846C20.6571 0.861231 19.6878 1.23092 18.6549 1.43723C17.8214 0.549693 16.6334 0 15.3374 0C12.8229 0 10.7986 2.04092 10.7986 4.54292C10.7986 4.90292 10.8291 5.24908 10.9038 5.57862C7.128 5.39446 3.78692 3.58477 1.54246 0.828C1.15062 1.50785 0.920769 2.286 0.920769 3.12369C0.920769 4.69662 1.73077 6.09092 2.93815 6.89815C2.20846 6.88431 1.49262 6.67246 0.886154 6.33877C0.886154 6.35262 0.886154 6.37062 0.886154 6.38862C0.886154 8.59569 2.46046 10.4289 4.52492 10.8512C4.15523 10.9523 3.75231 11.0008 3.33415 11.0008C3.04338 11.0008 2.74985 10.9842 2.47431 10.9232C3.06277 12.7218 4.73262 14.0442 6.71815 14.0871C5.17292 15.2958 3.21092 16.0242 1.08692 16.0242C0.714462 16.0242 0.357231 16.0075 0 15.9618C2.01185 17.2592 4.39615 18 6.96738 18C15.3249 18 19.8942 11.0769 19.8942 5.076C19.8942 4.87523 19.8872 4.68139 19.8775 4.48892C20.7789 3.84923 21.5363 3.05031 22.1538 2.13092Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <router-link
                to="https://www.facebook.com/"
                target="_blank"
                class="footer-social-link-block w-inline-block"
              >
                <div class="footer-social-icon w-embed">
                  <svg
                    width="10"
                    height="19"
                    viewbox="0 0 10 19"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.78902 10.4428C2.71642 10.4428 1.19346 10.4433 0.491058 10.4426C0.129451 10.4423 0.000437764 10.3124 0.000437764 9.94849C-2.46487e-05 9.01372 -0.000255855 8.07896 0.000437764 7.14419C0.000668971 6.78489 0.137081 6.64779 0.494063 6.64756C1.19647 6.6471 2.7111 6.64733 2.78902 6.64733C2.78902 6.58328 2.78879 5.23373 2.78902 4.61225C2.78948 3.69343 2.95341 2.81392 3.42021 2.00863C3.89812 1.18438 4.59358 0.619776 5.48489 0.293312C6.05573 0.0840705 6.64832 0.000605078 7.25408 0.000142666C8.01197 -0.000319747 8.76987 0.000373865 9.52799 0.0017611C9.85376 0.00222352 9.99827 0.146265 9.99896 0.474347C10.0003 1.35362 10.0003 2.2329 9.99896 3.11195C9.9985 3.4435 9.86 3.57667 9.52684 3.58037C8.90558 3.58708 8.28387 3.58292 7.66331 3.60789C7.03651 3.60789 6.70681 3.914 6.70681 4.56277C6.69178 5.24899 6.70057 5.9359 6.70057 6.6471C6.75929 6.6471 8.54305 6.64686 9.37678 6.6471C9.7555 6.6471 9.88497 6.77727 9.88497 7.15806C9.88497 8.08774 9.88474 9.01765 9.88405 9.94734C9.88382 10.3226 9.7622 10.4423 9.38117 10.4426C8.54744 10.443 6.77062 10.4428 6.69294 10.4428V17.9674C6.69294 18.3686 6.5667 18.4964 6.17087 18.4964C5.20582 18.4964 4.24053 18.4967 3.27548 18.4964C2.92566 18.4964 2.78925 18.3605 2.78925 18.0107C2.78902 15.5601 2.78902 10.5288 2.78902 10.4428Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </router-link>
              <router-link
                to="https://www.skype.com"
                target="_blank"
                class="footer-social-link-block w-inline-block"
              >
                <div class="footer-social-icon w-embed">
                  <svg
                    width="19"
                    height="18"
                    viewbox="0 0 19 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.4801 10.9109C18.7834 5.05401 13.6524 -0.266729 7.62676 0.754672C4.35558 -1.27538 0 1.01865 0 4.91077C0 5.81593 0.249726 6.66335 0.683934 7.39378C-0.527199 13.2642 4.6458 18.5084 10.6662 17.4173C11.3681 17.7885 12.1691 18 13.0202 18C16.7316 18 19.1081 14.1506 17.4801 10.9109ZM9.07112 14.9095C7.31479 14.9095 5.59896 14.4858 4.58356 13.0355C3.0702 10.8952 5.06576 9.82429 6.04516 10.6402C6.86258 11.3294 6.60611 12.9965 9.00663 12.9965C10.0648 12.9965 11.3711 12.545 11.3711 11.4959C11.3711 9.38484 6.68785 10.3837 4.82578 8.08221C4.14185 7.23929 4.01286 5.75219 4.85278 4.67379C6.31664 2.78997 10.6122 2.67524 12.4593 4.09785C14.1646 5.41772 13.7042 7.16955 12.3281 7.16955C10.673 7.16955 11.5429 5.00376 8.87089 5.00376C6.93383 5.00376 6.1719 6.38138 7.53602 7.05181C9.35159 7.95322 14.0979 7.672 14.0979 11.2537C14.0919 13.7712 11.6629 14.9095 9.07112 14.9095Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </router-link>
              <router-link
                to="https://www.linkedin.com/"
                target="_blank"
                class="footer-social-link-block w-inline-block"
              >
                <div class="footer-social-icon w-embed">
                  <svg
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9959 17.9999V17.9992H18.0004V11.3977C18.0004 8.16817 17.3052 5.68042 13.5297 5.68042C11.7147 5.68042 10.4967 6.67642 9.99944 7.62067H9.94694V5.98192H6.36719V17.9992H10.0947V12.0487C10.0947 10.4819 10.3917 8.96692 12.3319 8.96692C14.2437 8.96692 14.2722 10.7549 14.2722 12.1492V17.9999H17.9959Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0.296875 5.98267H4.02888V17.9999H0.296875V5.98267Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M2.1615 0C0.96825 0 0 0.96825 0 2.1615C0 3.35475 0.96825 4.34325 2.1615 4.34325C3.35475 4.34325 4.323 3.35475 4.323 2.1615C4.32225 0.96825 3.354 0 2.1615 0V0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </router-link>
              <router-link
                to="https://www.instagram.com/"
                target="_blank"
                class="footer-social-link-block w-inline-block"
              >
                <div class="footer-social-icon w-embed">
                  <svg
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0325 0H4.96724C2.22831 0 0 2.22841 0 4.96735V13.0327C0 15.7717 2.22831 18 4.96724 18H13.0325C15.7717 18 18 15.7716 18 13.0327V4.96735C18.0001 2.22841 15.7717 0 13.0325 0ZM16.4031 13.0327C16.4031 14.8911 14.8911 16.403 13.0327 16.403H4.96724C3.10892 16.4031 1.59705 14.8911 1.59705 13.0327V4.96735C1.59705 3.10903 3.10892 1.59705 4.96724 1.59705H13.0325C14.891 1.59705 16.403 3.10903 16.403 4.96735V13.0327H16.4031Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.99947 4.36206C6.44196 4.36206 4.36133 6.44269 4.36133 9.0002C4.36133 11.5576 6.44196 13.6381 8.99947 13.6381C11.557 13.6381 13.6376 11.5576 13.6376 9.0002C13.6376 6.44269 11.557 4.36206 8.99947 4.36206ZM8.99947 12.041C7.32268 12.041 5.95838 10.6769 5.95838 9.0001C5.95838 7.3232 7.32257 5.959 8.99947 5.959C10.6764 5.959 12.0406 7.3232 12.0406 9.0001C12.0406 10.6769 10.6763 12.041 8.99947 12.041Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M13.8333 3.00781C13.5256 3.00781 13.2233 3.13238 13.006 3.35065C12.7876 3.56784 12.6621 3.87022 12.6621 4.17898C12.6621 4.48678 12.7877 4.78905 13.006 5.00732C13.2232 5.22451 13.5256 5.35015 13.8333 5.35015C14.142 5.35015 14.4434 5.22451 14.6616 5.00732C14.8799 4.78905 15.0044 4.48668 15.0044 4.17898C15.0044 3.87022 14.8799 3.56784 14.6616 3.35065C14.4444 3.13238 14.142 3.00781 13.8333 3.00781Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </router-link>
            </div>
          </div>

          <div class="footer-widget footer-widget-margin">
            <h4 class="footer-title">{{ t('footer.ourServices') }}</h4>
            <div class="footer-list-wrap">
              <router-link :to="{ name: 'services' }" class="footer-list">{{
                t('footer.services.deiConsulting')
              }}</router-link>
              <router-link :to="{ name: 'services' }" class="footer-list">{{
                t('footer.services.hrTechnology')
              }}</router-link>
              <router-link :to="{ name: 'services' }" class="footer-list">{{
                t('footer.services.hrCompliance')
              }}</router-link>
              <router-link :to="{ name: 'services' }" class="footer-list">{{
                t('footer.services.talentAcquisition')
              }}</router-link>
              <router-link :to="{ name: 'services' }" class="footer-list">{{
                t('footer.services.compBenefits')
              }}</router-link>
            </div>
          </div>

          <div class="footer-widget footer-widget-margin-two">
            <h4 class="footer-title">{{ t('footer.quickLinks.label') }}</h4>
            <div class="footer-list-wrap">
              <router-link :to="{ name: 'about-us' }" class="footer-list">{{
                t('nav.about-us')
              }}</router-link>
              <router-link :to="{ name: 'contact-us' }" class="footer-list">{{
                t('nav.contact-us')
              }}</router-link>
            </div>
          </div>

          <div class="footer-widget">
            <h4 class="footer-title">{{ t('footer.subscribe') }}</h4>
            <div class="newsletter-wrap">
              <div class="newsletter-form-block w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  action="/"
                  class="newsletter-form"
                  data-wf-page-id="6666fcda3ffd3947b1b20825"
                  data-wf-element-id="b70a971d-f80f-4890-29c3-370648dedf2d"
                >
                  <input
                    class="newsletter-field w-input"
                    maxlength="256"
                    name="email"
                    data-name="Email"
                    :placeholder="t('footer.enterEmail')"
                    type="email"
                    id="email"
                    required=""
                  />
                  <input
                    type="submit"
                    data-wait="t('footer.pleaseWait')"
                    class="button-primary-3 newsletter-button w-button"
                    :value="t('footer.signUp')"
                  />
                </form>
                <div class="w-form-done">
                  <div>{{ t('footer.thankYou') }}</div>
                </div>
                <div class="w-form-fail">
                  <div>{{ t('footer.somethingWentWrong') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container w-container">
        <div class="copyright-text">
          © 2024
          <a href="https://codestorm.com/" target="_blank" class="copyright-link">{{
            t('footer.brandbes')
          }}</a>
          {{ t('footer.allRightsReserved') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped></style>
