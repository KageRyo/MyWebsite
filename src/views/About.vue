<template>
  <div>
    <!-- 穹頂 -->
    <div class="ts-content is-tertiary is-vertically-padded">
      <div class="ts-container">
        <div class="ts-header is-huge is-heavy">Chien-Hsun Chang</div>
        <div class="ts-text is-secondary">Developer, Programmer, and Student@TAIWAN.</div>
      </div>
    </div>
    
    <!-- 個人資訊 -->
    <PersonalInfo />
    
    <!-- 履歷資訊 -->
    <ResumeSection />
    
    <!-- 榮譽獎項 -->
    <AwardsSection />
    
    <!-- 證照 -->
    <CertificatesSection />
  </div>
</template>

<script setup>
import PersonalInfo from '../components/about/PersonalInfo.vue'
import ResumeSection from '../components/about/ResumeSection.vue'
import AwardsSection from '../components/about/AwardsSection.vue'
import CertificatesSection from '../components/about/CertificatesSection.vue'
</script>
