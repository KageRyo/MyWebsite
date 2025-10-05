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
                <div class="title">性別</div>
                <div class="text">男</div>
              </div>
            </div>

            <div class="ts-iconset has-top-spaced-small">
              <span class="ts-icon is-calendar-days-icon"></span>
              <div class="content">
                <div class="title">年齡</div>
                <div class="text">{{ age }} 歲</div>
              </div>
            </div>

            <div class="ts-iconset has-top-spaced-small has-bottom-spaced">
              <span class="ts-icon is-graduation-cap-icon"></span>
              <div class="content">
                <div class="title">學歷</div>
                <div class="text">國立中正大學 資訊工程研究所 一年級</div>
              </div>
            </div>

            <span class="ts-text">
              總是會在專業領域上盡自己最大能力去協助他人，用心與堅持的毅力面對人生的每一次挑戰。
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 個人資訊組件
import { computed } from 'vue';

// 出生年月日 (2002/10/6)
const birthYear = 2002;
const birthMonth = 10; // 1-based
const birthDay = 6;

// 以 UTC+8 為基準計算年齡
const age = computed(() => {
  // 取得當前 UTC+8 時間
  const now = new Date();
  // 轉換為 UTC+8
  const utc8 = new Date(now.getTime() + (8 - now.getTimezoneOffset() / 60) * 60 * 60 * 1000);
  const year = utc8.getUTCFullYear();
  const month = utc8.getUTCMonth() + 1; // 0-based
  const day = utc8.getUTCDate();
  let age = year - birthYear;
  if (month < birthMonth || (month === birthMonth && day < birthDay)) {
    age--;
  }
  return age;
});
</script>