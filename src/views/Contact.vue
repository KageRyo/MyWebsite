<template>
  <div>
    <!-- 穹頂 -->
    <div class="ts-content is-tertiary is-vertically-padded">
      <div class="ts-container">
        <div class="ts-header is-huge is-heavy">{{ $t('contact.page.heroTitle') }}</div>
        <div class="ts-text is-secondary">{{ $t('contact.page.heroSubtitle') }}</div>
      </div>
    </div>
    
    <!-- 聯絡我內容 -->
    <div class="ts-container has-top-spaced-large">
      <div class="ts-grid">
        <!-- 聯絡資訊 -->
        <ContactInfo />
        
        <!-- 聯絡表單 -->
        <ContactForm />
      </div>
    </div>
    
    <!-- 地圖 -->
    <LocationMap />
  </div>
</template>

<script setup>
import ContactInfo from '../components/contact/ContactInfo.vue'
import ContactForm from '../components/contact/ContactForm.vue'
import LocationMap from '../components/contact/LocationMap.vue'
</script>
