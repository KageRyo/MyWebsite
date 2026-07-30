<template>
  <div class="tablet+:column tablet+:is-8-wide mobile:ts-content">
    <div class="ts-header is-big is-heavy">{{ $t('contact.form.header') }}</div>
    <div class="ts-container is-very-narrow has-top-spaced-large">
      <form @submit.prevent="showEmailPreview">
        <div class="ts-grid is-relaxed is-2-columns">
          <div class="column">
            <div class="ts-text is-label">{{ $t('contact.form.name') }}</div>
            <div class="ts-input is-underlined is-fluid has-top-spaced">
              <input
                v-model="form.name"
                type="text"
                :placeholder="$t('contact.form.namePlaceholder')"
                required
              >
            </div>
          </div>

          <div class="column">
            <div class="ts-text is-label">{{ $t('contact.form.gender') }}</div>
            <div class="has-flex-center">
              <div class="ts-wrap has-top-spaced">
                <label class="ts-radio">
                  <input v-model="form.gender" name="gender" type="radio" value="male">
                  {{ $t('contact.form.male') }}
                </label>
                <label class="ts-radio">
                  <input v-model="form.gender" name="gender" type="radio" value="female">
                  {{ $t('contact.form.female') }}
                </label>
                <label class="ts-radio">
                  <input v-model="form.gender" name="gender" type="radio" value="other">
                  {{ $t('contact.form.other') }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="ts-text is-label has-top-spaced-large">{{ $t('contact.form.email') }}</div>
        <div class="ts-input is-underlined is-fluid has-top-spaced">
          <input
            v-model="form.email"
            type="email"
            :placeholder="$t('contact.form.emailPlaceholder')"
            required
          >
        </div>

        <div class="ts-text is-label has-top-spaced-large">{{ $t('contact.form.message') }}</div>
        <div class="ts-input is-resizable is-underlined is-fluid has-top-spaced">
          <textarea
            v-model="form.message"
            :placeholder="$t('contact.form.messagePlaceholder')"
            required
          ></textarea>
        </div>

        <button class="ts-button is-fluid has-vertically-spaced-large" type="submit">
          {{ $t('contact.form.send') }}
        </button>
      </form>

      <EmailPreviewModal
        v-model:visible="modalVisible"
        :recipient="emailContent.recipient"
        :subject="emailContent.subject"
        :body="emailContent.body"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import EmailPreviewModal from './EmailPreviewModal.vue'
import { buildMailBody, buildMailSubject, CONTACT_EMAIL } from '../../composables/useMailto'

const { t } = useI18n({ useScope: 'global' })
const form = reactive({ name: '', gender: 'male', email: '', message: '' })
const modalVisible = ref(false)

const emailContent = computed(() => ({
  recipient: CONTACT_EMAIL,
  subject: buildMailSubject(t, form),
  body: buildMailBody(t, form)
}))

const showEmailPreview = () => {
  modalVisible.value = true
}

</script>
