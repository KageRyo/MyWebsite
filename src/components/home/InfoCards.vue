<template>
  <!-- 資訊卡片 -->
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
              是的沒錯，就是我本人，來自臺灣的開發者，目前就讀 
              <a href="https://www.ccu.edu.tw/" class="ts-text is-external-link" target="_blank" rel="noopener noreferrer">國立中正大學</a>
              的 
              <a href="https://cs.ccu.edu.tw/" class="ts-text is-external-link" target="_blank" rel="noopener noreferrer">資訊工程研究所</a>，
              目前學習方向涉及軟硬體整合、前後端開發與人工智慧，如果對我想要有進一步的了解歡迎到 
              <router-link to="/about" class="item">關於我</router-link> 或 
              <router-link to="/projects" class="item">作品集</router-link> 看看。
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
      
      <!-- WaterMirror -->
      <div class="column mobile:ts-content">
        <div class="ts-box">
          <div class="ts-image">
            <img src="/assets/img/watermirror.svg" alt="WaterMirror">
          </div>
          <div class="ts-content">
            <div class="ts-header is-heavy has-flex-center">WaterMirror 水之鏡</div>
            <p class="justify-text">
              我和大學友人共同開發的專題研究專案，此專案為一基於
              <a href="https://scikit-learn.org/" class="ts-text is-external-link" target="_blank" rel="noopener noreferrer">Scikit-learn</a>
              框架開發機器學習模型的智慧化水質分析與評估系統，能夠分析特定的水質實驗數值與資料，並藉由人工智慧機器學習達到分析評估與預警。
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
      
      <!-- CodeRyo -->
      <div class="column mobile:ts-content">
        <div class="ts-box">
          <div class="ts-image">
            <img src="/assets/img/coderyo.svg" alt="CodeRyo Studio">
          </div>
          <div class="ts-content">
            <div class="ts-header is-heavy has-flex-center">CodeRyo Studio</div>
            <p class="justify-text">
              我和幾位志同道合的好友共同成立了 CodeRyo 團隊，我們致力於伺服器服務以及智慧化金融交易等，
              並將「使未來不只是未來。」訂為我們的標語，期望能對資訊領域以及開源社群有所貢獻，並增強自我能力。
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
// 資訊卡片組件不需要特殊邏輯
</script>
