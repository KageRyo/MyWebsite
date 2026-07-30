<template>
  <div class="ts-tab is-pilled has-vertically-spaced" role="tablist">
    <button
      v-for="account in accounts"
      :key="account.key"
      class="item"
      :class="{ 'is-active': modelValue === account.key }"
      role="tab"
      :aria-selected="modelValue === account.key"
      type="button"
      @click="$emit('update:modelValue', account.key)"
    >
      {{ account.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  accounts: { type: Array, required: true },
  modelValue: { type: String, required: true }
})

defineEmits(['update:modelValue'])
</script>
