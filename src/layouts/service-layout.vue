<script setup>
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
</script>

<template>
  <div class="service-details-area">
    <div class="container w-container">
      <div
        data-w-id="f53a7d19-e14b-b44f-ce2f-97142d65f628"
        class="service-details-wrap"
      >
        <div class="service-details-left">
          <div class="service-category-wrap">
            <div class="collection-list-wrapper-service-details w-dyn-list">
              <div
                role="list"
                class="collection-list-service-details w-dyn-items"
              >
                <div
                  role="listitem"
                  class="collection-item-service-details w-dyn-item"
                >
                  <div class="single-service-category">
                    <router-link
                      :to="{ name: 'servicesStandard' }"
                      class="service-category-link w-inline-block"
                    >
                      <div class="sidebar-service-title">
                        {{ t("service-layout.standardLink") }}
                      </div>
                      <div class="service-icon w-embed">
                        <svg
                          width="7"
                          height="14"
                          viewbox="0 0 7 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 12.1589L5.59317 7.56569C6.13561 7.02325 6.13561 6.13561 5.59317 5.59317L1 1"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div
                  role="listitem"
                  class="collection-item-service-details w-dyn-item"
                >
                  <div class="single-service-category">
                    <router-link
                      :to="{ name: 'servicesSubscription' }"
                      class="service-category-link w-inline-block"
                    >
                      <div class="sidebar-service-title">
                        {{ t("service-layout.subscriptionLink") }}
                      </div>
                      <div class="service-icon w-embed">
                        <svg
                          width="7"
                          height="14"
                          viewbox="0 0 7 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 12.1589L5.59317 7.56569C6.13561 7.02325 6.13561 6.13561 5.59317 5.59317L1 1"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="quick-contact-wrap">
            <h3 class="quick-contact-title">Quick Contact</h3>
            <div class="quick-contact-form">
              <div class="from-block-quick-contact w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  class="form-quick-contact"
                  data-wf-page-id="6666fcda3ffd3947b1b20830"
                  data-wf-element-id="ba1fbbe0-1461-1885-f5cb-3f0fc89fecc1"
                >
                  <input
                    class="field-style-quick-contact w-input"
                    maxlength="256"
                    name="name"
                    data-name="Name"
                    placeholder="Name*"
                    type="text"
                    id="name"
                  /><input
                    class="field-style-quick-contact w-input"
                    maxlength="256"
                    name="email"
                    data-name="Email"
                    placeholder="Email*"
                    type="email"
                    id="email-quick"
                    required=""
                  /><textarea
                    placeholder="Message*"
                    maxlength="5000"
                    id="field"
                    name="field"
                    data-name="Field"
                    required=""
                    class="field-style-quick-contact text-area-quick-contact w-input"
                  ></textarea
                  ><input
                    type="submit"
                    data-wait="Please wait..."
                    class="button-primary quick-contact-button w-button"
                    value="Send Message"
                  />
                </form>
                <div class="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div class="download-pdf-wrap">
            <router-link href="" class="download-pdf-link w-inline-block">
              <div class="download-pdf-text">Download PDF</div>
              <div class="download-pdf-icon-wrap">
                <div class="download-pdf-icon w-embed">
                  <svg
                    width="13"
                    height="18"
                    viewbox="0 0 13 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.19998 0.342285L0.34375 4.19877H4.19998V0.342285Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M7.251 8.81553C7.251 8.38625 6.97809 8.14941 6.58084 8.14941H6.18359V9.48178H6.58084C6.97809 9.48178 7.251 9.24494 7.251 8.81553V8.81553Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M3.54048 8.14209H3.19531V8.80027H3.54048C3.80128 8.80027 3.92562 8.67592 3.92562 8.47124C3.92562 8.26656 3.80128 8.14209 3.54048 8.14209Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0 5.24771V17.066H13V0H5.24758V5.24771H0ZM3.6009 9.5297H3.19558V10.2199H2.24848V7.4109H3.6009C4.38342 7.4109 4.88092 7.82026 4.88092 8.47036C4.88105 9.12047 4.38342 9.5297 3.6009 9.5297ZM8.58468 7.4109H10.8679V8.12519H9.53165V8.60682H10.7035V9.32111H9.53165V10.22H8.58468V7.4109ZM6.61445 7.4109C7.55347 7.4109 8.19954 7.9446 8.19954 8.8154C8.19954 9.6862 7.55347 10.22 6.61445 10.22H5.23V7.41103H6.61445V7.4109Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </router-link>
          </div> -->
        </div>
        <div class="service-details-right-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
