<script setup>
import AboutArea from '@/components/about-area/AboutArea.vue';

import { onMounted } from 'vue';

onMounted(() => {
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require('ix2').init();
  document.dispatchEvent(new Event('readystatechange'));
});
</script>

<template>
  <AboutArea />
</template>

<style scoped></style>
