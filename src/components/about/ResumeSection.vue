<template>
  <div class="ts-container has-top-spaced-large">
    <!-- 履歷 -->
    <div class="ts-grid is-relaxed has-top-spaced-large">
      <!-- 學歷 -->
      <div class="column is-8-wide">
        <div class="ts-header is-big is-heavy">{{ $t('resume.education.header') }}</div>
        <div class="ts-timeline has-top-spaced-small">
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-graduation-cap-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('resume.education.gradSchool.period') }}</div>
              {{ $t('resume.education.gradSchool.school') }}
            </div>
          </div>
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-graduation-cap-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('resume.education.college.period') }}</div>
              {{ $t('resume.education.college.school') }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 工作經歷 -->
      <div class="column is-8-wide">
        <div class="ts-header is-big is-heavy">{{ $t('resume.experience.header') }}</div>
        <div class="ts-timeline has-top-spaced-small">
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-code-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('resume.experience.paia.period') }}</div>
              {{ $t('resume.experience.paia.company') }}
              <div>
                <a href="https://app.paia-arena.com/" target="_blank" rel="noopener noreferrer" class="no-underline">
                  {{ $t('resume.experience.paia.platform') }}
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-person-chalkboard-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('resume.experience.codingApe.period') }}</div>
              {{ $t('resume.experience.codingApe.company') }}
              <div>{{ $t('resume.experience.codingApe.corp') }}</div>
            </div>
          </div>
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-handshake-simple-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('resume.experience.kaohsiung.period') }}</div>
              {{ $t('resume.experience.kaohsiung.company') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 履歷經歷模組
</script>