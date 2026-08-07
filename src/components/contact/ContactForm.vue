<template>
  <div class="tablet+:column tablet+:is-8-wide mobile:ts-content">
    <h2 class="ts-header is-big is-heavy">{{ $t('contact.form.header') }}</h2>
    <div class="ts-container is-very-narrow has-top-spaced-large">
      <form @submit.prevent="showEmailPreview">
        <div class="ts-grid is-relaxed is-2-columns">
          <div class="column">
            <label for="contact-name" class="ts-text is-label">{{ $t('contact.form.name') }}</label>
            <div class="ts-input is-underlined is-fluid has-top-spaced">
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                autocomplete="name"
                :placeholder="$t('contact.form.namePlaceholder')"
                required
              >
            </div>
          </div>

          <fieldset class="column contact-fieldset">
            <legend class="ts-text is-label">{{ $t('contact.form.gender') }}</legend>
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
          </fieldset>
        </div>

        <label for="contact-email" class="ts-text is-label has-top-spaced-large">{{ $t('contact.form.email') }}</label>
        <div class="ts-input is-underlined is-fluid has-top-spaced">
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            :placeholder="$t('contact.form.emailPlaceholder')"
            required
          >
        </div>

        <label for="contact-message" class="ts-text is-label has-top-spaced-large">{{ $t('contact.form.message') }}</label>
        <div class="ts-input is-resizable is-underlined is-fluid has-top-spaced">
          <textarea
            id="contact-message"
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

<style scoped>
.contact-fieldset {
  min-inline-size: 0;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
