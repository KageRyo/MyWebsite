<template>
  <div class="ts-container has-top-spaced-big">
    <div class="ts-grid is-evenly-divided mobile:is-stacked">
      <div class="column">
        <a href="https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=BB1CB6531ABFD661/" 
           target="_blank" rel="noopener noreferrer" class="no-underline">
          <div class="ts-image is-rounded">
            <img src="/assets/img/ministry-of-education.webp" alt="教育部合影" width="1200" height="800" loading="lazy" decoding="async">
            <div class="ts-mask is-bottom">
              <div class="ts-content photo-caption">
                <div class="ts-header">{{ $t('home.featuredPhotos.ministry.header') }}</div>
                {{ $t('home.featuredPhotos.ministry.description') }}
              </div>
            </div>
          </div>
        </a>
      </div>
      
      <div class="column">
        <a href="https://coscup.org/2023/zh-TW/" target="_blank" rel="noopener noreferrer" class="no-underline">
          <div class="ts-image is-rounded">
            <img src="/assets/img/coscup-lightingtalk.webp" alt="COSCUP" width="1200" height="800" loading="lazy" decoding="async">
            <div class="ts-mask is-bottom">
              <div class="ts-content photo-caption">
                <div class="ts-header">{{ $t('home.featuredPhotos.coscup.header') }}</div>
                {{ $t('home.featuredPhotos.coscup.description') }}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// 精選相片模組
</script>

<style scoped>
.photo-caption {
  color: #fff;
}

/* 手機版照片較小，說明文字改放在照片下方，避免蓋住人物或超出照片 */
@media (max-width: 767.98px) {
  .ts-mask {
    position: static;
    background: none;
  }

  .photo-caption {
    padding: 0.75rem 0 0;
    color: var(--ts-gray-800);
  }
}
</style>
