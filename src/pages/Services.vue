<script setup>
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs.vue";
import { onMounted } from "vue";
import ServicesArea from "./ServicesArea.vue";


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
  <Breadcrumbs />

  <ServicesArea />
</template>

<style></style>
