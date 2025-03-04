<script setup>
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <Breadcrumbs />

  <div class="contact-info-area">
    <div class="container w-container">
      <div class="contact-info-wrap">
        <div
          data-w-id="e6720739-792c-e96a-d3e6-f084cf18a474"
          class="single-contact-info"
        >
          <div class="contact-info-image-title-wrap">
            <div class="contact-info-image-wrap">
              <img
                src="@/assets/images/contact-info-1_1contact-info-1.png"
                loading="lazy"
                alt="Contact Info Image"
                class="contact-info-image"
              />
            </div>
            <div class="contact-info-title-wrap">
              <div class="contact-info-subtitle">
                {{ t("contact-us.contactInfoArea.serviceSubtitle") }}
              </div>
              <h3 class="contact-info-title">
                {{ t("contact-us.contactInfoArea.callToActionTitle") }}
              </h3>
            </div>
          </div>
          <div class="contact-info-inner">
            <div class="contact-info-separator-primary"></div>
            <div class="contact-info">+998 93 066 80 40</div>
            <div class="contact-info">+998 93 066 80 40</div>
          </div>
          <img
            src="@/assets/images/contact-info-shape-1_1contact-info-shape-1.png"
            loading="lazy"
            alt="Contact Info Shape Image"
            class="contact-info-shape-image"
          />
        </div>
        <div
          data-w-id="e759c083-5a41-cd58-92e6-9adb00cdcb2b"
          class="single-contact-info"
        >
          <div class="contact-info-image-title-wrap">
            <div class="contact-info-image-wrap">
              <img
                src="@/assets/images/contact-info-2_1contact-info-2.png"
                loading="lazy"
                alt="Contact Info Image"
                class="contact-info-image"
              />
            </div>
            <div class="contact-info-title-wrap">
              <div class="contact-info-subtitle">
                {{ t("contact-us.contactInfoArea.dropALineSubtitle") }}
              </div>
              <h3 class="contact-info-title">
                {{ t("contact-us.contactInfoArea.mailInformationTitle") }}
              </h3>
            </div>
          </div>
          <div class="contact-info-inner">
            <div class="contact-info-separator-primary"></div>
            <div class="contact-info">
              {{ t("contact-us.contactInfoArea.email1") }}
            </div>
            <div class="contact-info">
              {{ t("contact-us.contactInfoArea.email2") }}
            </div>
          </div>
          <img
            src="@/assets/images/contact-info-shape-2_1contact-info-shape-2.png"
            loading="lazy"
            alt="Contact Info Shape Image"
            class="contact-info-shape-image"
          />
        </div>
        <div
          data-w-id="e6720739-792c-e96a-d3e6-f084cf18a474"
          class="single-contact-info"
        >
          <div class="contact-info-image-title-wrap">
            <div class="contact-info-image-wrap">
              <img
                src="@/assets/images/contact-info-3_1contact-info-3.png"
                loading="lazy"
                alt="Contact Info Image"
                class="contact-info-image"
              />
            </div>
            <div class="contact-info-title-wrap">
              <div class="contact-info-subtitle">
                {{ t("contact-us.contactInfoArea.addressSubtitle") }}
              </div>
              <h3 class="contact-info-title">
                {{ t("contact-us.contactInfoArea.locationTitle") }}
              </h3>
            </div>
          </div>
          <div class="contact-info-inner">
            <div class="contact-info-separator-primary"></div>
            <div class="contact-info">
              {{ t("contact-us.contactInfoArea.addressLine1") }}
            </div>
            <div class="contact-info">
              {{ t("contact-us.contactInfoArea.addressLine2") }}
            </div>
          </div>
          <img
            src="@/assets/images/contact-info-shape-3_1contact-info-shape-3.png"
            loading="lazy"
            alt="Contact Info Shape Image"
            class="contact-info-shape-image"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="contact-map-form-area">
    <div class="container w-container">
      <div class="contact-map-form-wrap">
        <div
          data-w-id="245f65f5-9fb7-49eb-b719-0a642f1ad6e6"
          class="contact-map-wrap"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.703521325889!2d72.33324707515494!3d40.503938650328344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc5fa16d8cc9c1%3A0x65d08f0988bc93f5!2sSmart%20English!5e0!3m2!1sru!2s!4v1723746729987!5m2!1sru!2s"
            class="contact-map"
            width="600"
            s="p"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          data-w-id="4188ae31-d01c-16fe-42cf-a1a98eeabab7"
          class="contact-form-wrap"
        >
          <div
            data-w-id="c51c09f4-9ac1-c8f6-ab6c-0cfca39dccb5"
            class="section-title-wrap section-title-wrap-left"
          >
            <div class="section-sub-title">
              {{ t("contact-us.contactMapFormArea.requestSubtitle") }}
            </div>
            <h2 class="section-title">
              {{ t("contact-us.contactMapFormArea.projectTitle") }}
            </h2>
          </div>
          <div class="form-block-contact w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              class="form-contact"
              data-wf-page-id="6666fcda3ffd3947b1b2082c"
              data-wf-element-id="3020a109-88a2-b54b-58ac-e8a0607ce8ba"
            >
              <div class="contact-form-grid">
                <div class="contact-form-column">
                  <input
                    class="contact-form-input-field w-input"
                    maxlength="256"
                    name="field"
                    data-name="Field"
                    :placeholder="
                      t('contact-us.contactMapFormArea.firstNamePlaceholder')
                    "
                    type="text"
                    id="field"
                  />
                </div>
                <div class="contact-form-column">
                  <input
                    class="contact-form-input-field w-input"
                    maxlength="256"
                    name="field-5"
                    data-name="Field 5"
                    :placeholder="
                      t('contact-us.contactMapFormArea.lastNamePlaceholder')
                    "
                    type="text"
                    id="field-5"
                  />
                </div>
                <div class="contact-form-column">
                  <input
                    class="contact-form-input-field w-input"
                    maxlength="256"
                    name="field-2"
                    data-name="Field 2"
                    :placeholder="
                      t('contact-us.contactMapFormArea.emailPlaceholder')
                    "
                    type="email"
                    id="field-2"
                    required
                  />
                </div>
                <div class="contact-form-column">
                  <input
                    class="contact-form-input-field w-input"
                    maxlength="256"
                    name="field-3"
                    data-name="Field 3"
                    :placeholder="
                      t('contact-us.contactMapFormArea.subjectPlaceholder')
                    "
                    type="text"
                    id="field-3"
                  />
                </div>
                <div class="contact-form-column">
                  <textarea
                    :placeholder="
                      t('contact-us.contactMapFormArea.messagePlaceholder')
                    "
                    maxlength="5000"
                    id="field-6"
                    name="field-6"
                    data-name="Field 6"
                    class="contact-form-textarea-field w-input"
                  ></textarea>
                </div>
              </div>
              <input
                type="submit"
                data-wait=" t('contact-us.contactMapFormArea.waitMessage') "
                class="button-primary contact-button w-button"
                :value="t('contact-us.contactMapFormArea.sendMessage')"
              />
            </form>
            <div class="w-form-done">
              <div>{{ t("contact-us.contactMapFormArea.successMessage") }}</div>
            </div>
            <div class="w-form-fail">
              <div>{{ t("contact-us.contactMapFormArea.errorMessage") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
