<template>
  <div class="ts-container has-top-spaced-large">
    <!-- 履歷 -->
    <div class="ts-grid is-relaxed has-top-spaced-large">
      <!-- 學歷 -->
      <div class="column is-8-wide">
        <div class="ts-header is-big is-heavy">{{ $t('about.resume.education.header') }}</div>
        <div class="ts-timeline has-top-spaced-small">
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-graduation-cap-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('about.resume.education.gradSchool.period') }}</div>
              {{ $t('about.resume.education.gradSchool.school') }}
            </div>
          </div>
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-graduation-cap-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('about.resume.education.college.period') }}</div>
              {{ $t('about.resume.education.college.school') }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 工作經歷 -->
      <div class="column is-8-wide">
        <div class="ts-header is-big is-heavy">{{ $t('about.resume.experience.header') }}</div>
        <div class="ts-timeline has-top-spaced-small">
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-code-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('about.resume.experience.paia.period') }}</div>
              {{ $t('about.resume.experience.paia.company') }}
              <div>
                <a href="https://app.paia-arena.com/" target="_blank" rel="noopener noreferrer" class="no-underline">
                  {{ $t('about.resume.experience.paia.platform') }}
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-person-chalkboard-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('about.resume.experience.codingApe.period') }}</div>
              {{ $t('about.resume.experience.codingApe.company') }}
              <div>{{ $t('about.resume.experience.codingApe.corp') }}</div>
            </div>
          </div>
          <div class="item">
            <div class="indicator">
              <span class="ts-icon is-handshake-simple-icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t('about.resume.experience.kaohsiung.period') }}</div>
              {{ $t('about.resume.experience.kaohsiung.company') }}
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