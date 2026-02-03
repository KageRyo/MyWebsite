<template>
  <div class="ts-container has-top-spaced-large">
    <div class="ts-grid is-relaxed has-top-spaced">
      <!-- 個人照片 -->
      <div class="tablet+:column is-5-wide mobile:ts-content">
        <div class="ts-image is-rounded">
          <img src="/assets/img/chienhsun.svg" alt="Chien-Hsun Chang 個人照片">
        </div>
      </div>

      <!-- 個人資訊 -->
      <div class="tablet+:column is-11-wide mobile:ts-content">
        <div class="ts-box mobile:ts-content">
          <div class="ts-content is-secondary">
            <!-- 個人資料 -->
            <div class="ts-header is-big is-heavy">Chien-Hsun Chang 張健勳</div>
            <div class="ts-text is-description">
              A Student && Developer from Taiwan.
              <span class="ts-flag is-taiwan-flag"></span>
            </div>
            <div class="ts-text is-description">來自臺灣的學生開發者</div>

            <!-- 基本資訊 -->
            <div class="ts-iconset has-top-spaced">
              <span class="ts-icon is-user-large-icon"></span>
              <div class="content">
                <div class="title">{{ $t('info.basic.gender') }}</div>
                <div class="text">{{ $t('info.basic.male') }}</div>
              </div>
            </div>

            <div class="ts-iconset has-top-spaced-small">
              <span class="ts-icon is-calendar-days-icon"></span>
              <div class="content">
                <div class="title">{{ $t('info.basic.age') }}</div>
                <div class="text">{{ currentAge }}</div>
              </div>
            </div>

            <div class="ts-iconset has-top-spaced-small has-bottom-spaced">
              <span class="ts-icon is-graduation-cap-icon"></span>
              <div class="content">
                <div class="title">{{ $t('info.basic.education') }}</div>
                <div class="text">{{ $t('info.basic.educationDetail') }}</div>
              </div>
            </div>

            <span class="ts-text">
              {{ $t('info.basic.motto') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// 計算當前年齡
const currentAge = computed(() => {
  // 生日：2002/10/6 00:00 UTC+8
  const birthDate = new Date('2002-10-06T00:00:00+08:00')
  const now = new Date()
  
  let age = now.getFullYear() - birthDate.getFullYear()
  const monthDiff = now.getMonth() - birthDate.getMonth()
  
  // 如果還沒到生日月份，或者是生日月份但還沒到生日日期，年齡減1
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
})
</script>