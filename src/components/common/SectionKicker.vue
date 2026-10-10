<template>
  <p class="section-kicker" aria-hidden="true">
    <span class="section-kicker-index">{{ index }}</span> / {{ label }}
  </p>
</template>

<script setup>
// 專案介紹頁各段落的編號小標（例如 02 / Problem），段落順序就是閱讀順序；
// h2 已說明段落內容，因此不讓輔助科技重複朗讀
defineProps({
  index: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

<style scoped>
.section-kicker {
  margin: 0 0 0.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ts-gray-600);
  font-variant-numeric: tabular-nums;
}

/* 編號使用品牌強調色；尚未定義時退回連結色 */
.section-kicker-index {
  color: var(--kageryo-accent, var(--ts-link-700));
}
</style>
