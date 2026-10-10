<template>
  <p class="section-kicker" aria-hidden="true">
    <span class="section-kicker-index">{{ index }}</span> / {{ label }}
  </p>
</template>

<script setup>
// 區塊標題上方的編號小標（例如 02 / Education）；h2 已說明區塊內容，因此不讓輔助科技重複朗讀
defineProps({
  index: { type: String, required: true },
  label: { type: String, required: true }
})
</script>
