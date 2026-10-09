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
            <h2 class="ts-header is-big is-heavy">Chien-Hsun Chang 張健勳</h2>
            <div class="ts-text is-description">
              A Student && Developer from Taiwan.
              <span class="ts-flag is-taiwan-flag"></span>
            </div>
            <div class="ts-text is-description">來自臺灣的學生開發者</div>

            <!-- 學歷 -->
            <div class="ts-iconset has-top-spaced has-bottom-spaced">
              <span class="ts-icon is-graduation-cap-icon"></span>
              <div class="content">
                <div class="title">{{ $t('about.personal.basic.education') }}</div>
                <div class="text">{{ $t('about.personal.basic.educationDetail') }}</div>
              </div>
            </div>

            <p>{{ $t('about.personal.summary') }}</p>

            <span class="ts-text">
              {{ $t('about.personal.basic.motto') }}
            </span>

            <!-- 公開版履歷 -->
            <div class="has-top-spaced">
              <a :href="resumePdfUrl" class="ts-button is-start-icon" download>
                <span class="ts-icon is-download-icon"></span>
                {{ $t('about.personal.resumeDownload') }}
              </a>
            </div>

            <!-- 次要的基本資料 -->
            <div class="ts-divider has-top-spaced"></div>
            <div class="ts-text is-description is-small has-top-spaced-small">
              {{ $t('about.personal.basic.details', { gender: $t('about.personal.basic.male'), age: currentAge }) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { resumePdfUrl } from '../../config/resume'

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
