<template>
  <section
    class="ts-container editorial-section"
    aria-labelledby="about-introduction"
  >
    <div class="ts-grid is-relaxed has-top-spaced">
      <!-- 個人照片 -->
      <div class="tablet+:column is-5-wide">
        <div class="ts-image is-rounded">
          <img
            src="/assets/img/chienhsun.webp"
            alt="Chien-Hsun Chang 個人照片"
            width="900"
            height="900"
            decoding="async"
          />
        </div>
      </div>

      <!-- 個人資訊：直接排在照片旁，不另外加框 -->
      <div class="tablet+:column is-11-wide">
        <h2 id="about-introduction" class="ts-header is-big is-heavy">
          Chien-Hsun Chang 張健勳
        </h2>
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
            <div class="text">
              {{ $t('about.personal.basic.educationDetail') }}
            </div>
          </div>
        </div>

        <p
          v-for="(paragraph, index) in summary"
          :key="index"
          class="reading-width"
        >
          {{ paragraph }}
        </p>
        <p class="reading-width">{{ $t('about.personal.basic.motto') }}</p>

        <!-- 公開版履歷與 GitHub -->
        <div class="ts-wrap has-top-spaced">
          <a :href="resumePdfUrl" class="ts-button is-start-icon" download>
            <span class="ts-icon is-download-icon"></span>
            {{ $t('about.personal.resumeDownload') }}
          </a>
          <a
            href="https://github.com/KageRyo"
            target="_blank"
            rel="noopener noreferrer"
            class="ts-button is-outlined is-start-icon"
          >
            <span class="ts-icon is-github-icon"></span>
            GitHub
          </a>
        </div>

        <!-- 次要的基本資料 -->
        <div class="ts-divider has-top-spaced"></div>
        <div class="ts-text is-description is-small has-top-spaced-small">
          {{
            $t('about.personal.basic.details', {
              gender: $t('about.personal.basic.male'),
              age: currentAge
            })
          }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { resumePdfUrl } from '../../config/resume'

const { tm, rt } = useI18n({ useScope: 'global' })

// 自我介紹沿用 CV 的自傳，分成多段
const summary = computed(() =>
  tm('about.personal.summary').map(paragraph => rt(paragraph))
)

// 計算當前年齡
const currentAge = computed(() => {
  // 生日：2002/10/6 00:00 UTC+8
  const birthDate = new Date('2002-10-06T00:00:00+08:00')
  const now = new Date()

  let age = now.getFullYear() - birthDate.getFullYear()
  const monthDiff = now.getMonth() - birthDate.getMonth()

  // 如果還沒到生日月份，或者是生日月份但還沒到生日日期，年齡減1
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < birthDate.getDate())
  ) {
    age--
  }

  return age
})
</script>
