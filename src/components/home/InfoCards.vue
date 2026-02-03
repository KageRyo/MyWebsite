<template>
  <div class="ts-container is-padded has-top-spaced-big">
    <!-- KageRyo Developer -->
    <div class="ts-grid tablet+:is-3-columns">
      <div class="column mobile:ts-content">
        <div class="ts-box">
          <div class="ts-image">
            <img src="/assets/img/chienhsun.svg" alt="KageRyo Developer">
          </div>
          <div class="ts-content">
            <div class="ts-header is-heavy has-flex-center">KageRyo Developer</div>
            <p class="justify-text">
              <i18n-t keypath="home.infoCards.intro" tag="span">
                <template #ccu>
                  <a href="https://www.ccu.edu.tw/" class="ts-text is-external-link" target="_blank"
                    rel="noopener noreferrer">{{ $t('home.infoCards.links.ccu') }}</a>
                </template>
                <template #cs>
                  <a href="https://cs.ccu.edu.tw/" class="ts-text is-external-link" target="_blank"
                    rel="noopener noreferrer">{{ $t('home.infoCards.links.cs') }}</a>
                </template>
              </i18n-t>
              <i18n-t keypath="home.infoCards.learningFocus" tag="span">
                <template #about>
                  <router-link to="/about" class="item">{{ $t('home.infoCards.links.about') }}</router-link>
                </template>
                <template #projects>
                  <router-link to="/projects" class="item">{{ $t('home.infoCards.links.projects') }}</router-link>
                </template>
              </i18n-t>
            </p>
            <div class="has-flex-center">
              <div class="ts-wrap">
                <a href="https://coderyo.com/discord" target="_blank" rel="noopener noreferrer"
                  class="ts-icon is-secondary is-discord-icon is-circular is-large"></a>
                <a href="https://github.com/KageRyo" target="_blank" rel="noopener noreferrer"
                  class="ts-icon is-secondary is-github-icon is-circular is-large"></a>
                <a href="https://www.linkedin.com/in/kageryo/" target="_blank" rel="noopener noreferrer"
                  class="ts-icon is-secondary is-linkedin-icon is-circular is-large"></a>
                <a href="mailto:kageryo@coderyo.com" target="_blank" rel="noopener noreferrer"
                  class="ts-icon is-secondary is-envelope-icon is-circular is-large"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="column mobile:ts-content">
        <div class="ts-box">
          <div class="ts-image">
            <img src="/assets/img/watermirror.svg" alt="WaterMirror">
          </div>
          <div class="ts-content">
            <div class="ts-header is-heavy has-flex-center">{{ $t('home.infoCards.waterMirror.header') }}</div>
            <p class="justify-text">
              <i18n-t keypath="home.infoCards.waterMirror.description" tag="span">
                <template #sklearn>
                  <a href="https://scikit-learn.org/" class="ts-text is-external-link" target="_blank"
                    rel="noopener noreferrer">Scikit-learn</a>
                </template>
              </i18n-t>
            </p>
            <div class="has-flex-center">
              <div class="ts-wrap">
                <a href="https://ipe.nutc.edu.tw/" target="_blank" rel="noopener noreferrer"
                  class="ts-icon is-secondary is-school-icon is-circular is-large"></a>
                <a href="mailto:s1411068014@nutc.edu.tw" target="_blank" rel="noopener noreferrer"
                  class="ts-icon is-secondary is-envelope-icon is-circular is-large"></a>
                <a href="https://github.com/KageRyo/WaterMirror" target="_blank" rel="noopener noreferrer"
                  class="ts-icon is-secondary is-github-icon is-circular is-large"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="column mobile:ts-content">
        <div class="ts-box">
          <div class="ts-image">
            <img src="/assets/img/coderyo.svg" alt="CodeRyo Studio">
          </div>
          <div class="ts-content">
            <div class="ts-header is-heavy has-flex-center">{{ $t('home.infoCards.codeRyo.header') }}</div>
            <p class="justify-text">
              <span v-html="$t('home.infoCards.codeRyo.description')"></span>
            </p>
            <div class="has-flex-center">
              <div class="ts-wrap">
                <a href="https://coderyo.com/discord" target="_blank" rel="noopener noreferrer"
                  class="ts-icon is-secondary is-discord-icon is-circular is-large"></a>
                <a href="https://github.com/CodeRyoDeveloper" target="_blank" rel="noopener noreferrer"
                  class="ts-icon is-secondary is-github-icon is-circular is-large"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 資訊卡片模組
</script>
