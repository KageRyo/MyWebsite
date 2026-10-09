<template>
  <div class="ts-container is-padd has-top-spaced-big">
    <div class="ts-grid is-evenly-divided">
      <div class="column">
        <a href="https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=BB1CB6531ABFD661/" 
           target="_blank" rel="noopener noreferrer" class="no-underline">
          <div class="ts-image is-rounded">
            <img src="/assets/img/ministry-of-education.webp" alt="教育部合影" width="1200" height="800" loading="lazy" decoding="async">
            <div class="ts-mask is-bottom">
              <div class="ts-content" style="color: #FFF;">
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
              <div class="ts-content" style="color: #FFF;">
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
