<script setup>
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t, availableLocales: availableLocalesOld, locale } = useI18n();
const router = useRouter();

const availableLocales = computed(() =>
  availableLocalesOld
    .filter((l) => l !== locale.value)
    .map((l) => ({ title: t(`locale.${l}`), path: l })),
);
</script>

<template>
  <header class="header-section">
    <div class="container header-large-container w-container">
      <div class="header-wrap">
        <div class="header-logo">
          <a href="/" aria-current="page" class="header-logo-link w-inline-block">
            <img src="@/assets/images/logo.png" loading="lazy" alt="Logo" class="header-logo-image"
          /></a>
        </div>
        <div class="header-menu">
          <div
            data-animation="default"
            data-collapse="medium"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            class="navbar-main-menu w-nav"
          >
            <nav role="navigation" class="nav-main-menu w-nav-menu">
              <router-link
                :to="{ name: 'home' }"
                aria-current="page"
                class="nav-main-menu-link w-nav-link"
                >{{ t('nav.home') }}</router-link
              >
              <router-link :to="{ name: 'about-us' }" class="nav-main-menu-link w-nav-link">{{
                t('nav.about-us')
              }}</router-link>
              <div data-hover="false" data-delay="0" class="nav-main-menu-dropdown w-dropdown">
                <div class="dropdown-toggle-main-menu w-dropdown-toggle">
                  <div class="text-main-menu">{{ t('nav.pages') }}</div>
                  <div class="icon-main-menu w-embed">
                    <svg
                      width="13"
                      height="13"
                      viewbox="0 0 13 13"
                      fill="CurrentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.70665 4.43066H6.33207H3.29332C2.77332 4.43066 2.51332 5.059 2.88165 5.42733L5.68749 8.23316C6.13707 8.68275 6.86832 8.68275 7.3179 8.23316L8.38499 7.16608L10.1237 5.42733C10.4867 5.059 10.2267 4.43066 9.70665 4.43066Z"
                        fill="CurrentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <nav class="dropdown-list-main-menu w-dropdown-list">
                  <router-link
                    :to="{ name: 'services' }"
                    class="dropdown-link-main-menu w-dropdown-link"
                    >{{ t('nav.services') }}
                  </router-link>
                  <!-- <router-link
                    :to="{ name: 'projects' }"
                    class="dropdown-link-main-menu w-dropdown-link"
                    >{{ t('nav.projects') }}</router-link
                  > -->
                  <router-link
                    :to="{ name: 'teams' }"
                    class="dropdown-link-main-menu w-dropdown-link"
                    >{{ t('nav.teams') }}</router-link
                  >
                </nav>
              </div>
              <!-- <router-link :to="{ name: 'blog' }" class="nav-main-menu-link w-nav-link">{{
                t('nav.blog')
              }}</router-link> -->
              <router-link :to="{ name: 'contact-us' }" class="nav-main-menu-link w-nav-link">{{
                t('nav.contact-us')
              }}</router-link>
            </nav>
            <div class="w-nav-button">
              <div class="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
        <div class="header-action">
          <div class="language-wrap">
            <div class="flag-wrap">
              <img
                v-if="locale === 'uz'"
                src="@/assets/images/flag_uz.png"
                loading="lazy"
                alt="Flag"
                class="image"
              />
              <img
                v-else-if="locale === 'ru'"
                src="@/assets/images/flag_ru.png"
                loading="lazy"
                alt="Flag"
                class="image"
              />
            </div>
            <div data-hover="false" data-delay="0" class="language-dropdown w-dropdown">
              <div
                data-w-id="6e9367ba-cd7e-8d20-9cf3-328b2c0512d4"
                class="language-dropdown-toggle w-dropdown-toggle"
              >
                <div class="my-language-text-blog">
                  {{ t(`locale.${locale}`) }}
                </div>
                <div class="my-language-icon w-embed">
                  <svg
                    width="13"
                    height="13"
                    viewbox="0 0 13 13"
                    fill="CurrentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.70665 4.43066H6.33207H3.29332C2.77332 4.43066 2.51332 5.059 2.88165 5.42733L5.68749 8.23316C6.13707 8.68275 6.86832 8.68275 7.3179 8.23316L8.38499 7.16608L10.1237 5.42733C10.4867 5.059 10.2267 4.43066 9.70665 4.43066Z"
                      fill="CurrentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <nav class="language-dropdown-list w-dropdown-list">
                <router-link
                  v-for="lang in availableLocales"
                  :key="lang.path"
                  :to="router.currentRoute.value.fullPath.replace(locale, lang.path)"
                  class="language-dropdown-link w-dropdown-link"
                  >{{ lang.title }}</router-link
                >
              </nav>
            </div>
          </div>
          <div class="header-search">
            <div class="header-search-icon-wrap">
              <div class="header-search-icon w-embed">
                <svg
                  width="16"
                  height="16"
                  viewbox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.63503 12.1128C9.66195 12.1128 12.1158 9.65902 12.1158 6.6321C12.1158 3.60517 9.66195 1.15137 6.63503 1.15137C3.6081 1.15137 1.1543 3.60517 1.1543 6.6321C1.1543 9.65902 3.6081 12.1128 6.63503 12.1128Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15.0006 14.9967L11.5391 11.5352"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <form action="/search" class="search-main w-form">
              <input
                class="search-input-main w-input"
                maxlength="256"
                name="query"
                placeholder="Search Here…"
                type="search"
                id="search"
                required=""
              /><input type="submit" class="search-button-main w-button" value="Search" />
            </form>
          </div>
          <div class="mobile-menu">
            <div
              data-animation="default"
              data-collapse="medium"
              data-duration="400"
              data-easing="ease"
              data-easing2="ease"
              role="banner"
              class="navbar-mobile w-nav"
            >
              <nav role="navigation" class="nav-mobile-menu w-nav-menu">
                <router-link
                  :to="{ name: 'home' }"
                  aria-current="page"
                  class="nav-link-mobile-menu w-nav-link"
                  >{{ t('nav.home') }}</router-link
                >
                <router-link :to="{ name: 'about-us' }" class="nav-link-mobile-menu w-nav-link">{{
                  t('nav.about-us')
                }}</router-link>
                <div data-hover="false" data-delay="0" class="dropdown-mobile-menu w-dropdown">
                  <div class="dropdown-toggle-mobile-menu w-dropdown-toggle">
                    <div class="text-block-mobile-menu">
                      {{ t('nav.pages') }}
                    </div>
                    <div class="dropdown-icon-mobile-menu w-embed">
                      <svg
                        width="13"
                        height="13"
                        viewbox="0 0 13 13"
                        fill="CurrentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.70665 4.43066H6.33207H3.29332C2.77332 4.43066 2.51332 5.059 2.88165 5.42733L5.68749 8.23316C6.13707 8.68275 6.86832 8.68275 7.3179 8.23316L8.38499 7.16608L10.1237 5.42733C10.4867 5.059 10.2267 4.43066 9.70665 4.43066Z"
                          fill="CurrentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <nav class="dropdown-list-mobile-menu w-dropdown-list">
                    <router-link
                      :to="{ name: 'services' }"
                      class="dropdown-link-mobile-menu w-dropdown-link"
                      >{{ t('nav.services') }}</router-link
                    >
                    <router-link
                      :to="{ name: 'projects' }"
                      class="dropdown-link-mobile-menu w-dropdown-link"
                      >{{ t('nav.projects') }}</router-link
                    >
                    <router-link
                      :to="{ name: 'teams' }"
                      class="dropdown-link-mobile-menu w-dropdown-link"
                      >{{ t('nav.teams') }}</router-link
                    >
                  </nav>
                </div>
                <router-link :to="{ name: 'blog' }" class="nav-link-mobile-menu w-nav-link">{{
                  t('nav.blog')
                }}</router-link>
                <router-link :to="{ name: 'contact-us' }" class="nav-link-mobile-menu w-nav-link">{{
                  t('nav.contact-us')
                }}</router-link>
              </nav>
              <div class="menu-button-mobile w-nav-button">
                <div class="icon-mobile-menu w-embed">
                  <!--  Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)   -->
                  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewbox="0 0 64 64"
                    enable-background="new 0 0 64 64"
                    xml:space="preserve"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      x1="0"
                      y1="21"
                      x2="52"
                      y2="21"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      x1="0"
                      y1="33"
                      x2="52"
                      y2="33"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      x1="0"
                      y1="45"
                      x2="52"
                      y2="45"
                    ></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
