<template>
  <dialog ref="dialog" class="ts-modal" @cancel.prevent="close" @click="handleBackdropClick">
    <div class="content">
      <div class="ts-content has-vertically-padded">
        <div class="ts-header is-large has-bottom-spaced">
          <span class="ts-icon is-envelope-icon"></span>
          {{ $t('contact.form.emailModal.title') }}
        </div>
        <p class="ts-text is-secondary has-bottom-spaced">
          {{ $t('contact.form.emailModal.desc') }}
        </p>

        <div class="ts-segment is-secondary has-bottom-spaced">
          <div class="ts-text is-label">{{ $t('contact.form.emailModal.recipient') }}</div>
          <div class="ts-text is-code">{{ recipient }}</div>
        </div>
        <div class="ts-segment is-secondary has-bottom-spaced">
          <div class="ts-text is-label">{{ $t('contact.form.emailModal.subject') }}</div>
          <div class="ts-text is-code">{{ subject }}</div>
        </div>
        <div class="ts-segment is-secondary">
          <div class="ts-text is-label">{{ $t('contact.form.emailModal.body') }}</div>
          <div class="ts-text is-code email-body">{{ body }}</div>
        </div>
        <p v-if="copyStatus" class="ts-text is-secondary has-top-spaced-small" role="status">
          {{ copyStatus }}
        </p>
      </div>

      <div class="ts-divider"></div>

      <div class="ts-content is-tertiary">
        <div class="ts-grid is-3-columns">
          <div class="column">
            <button class="ts-button is-fluid" type="button" @click="copyEmailContent">
              <span class="ts-icon is-copy-icon"></span>
              {{ $t('contact.form.emailModal.copyAll') }}
            </button>
          </div>
          <div class="column">
            <a class="ts-button is-fluid" :href="mailtoUrl" @click="openMailClient">
              <span class="ts-icon is-envelope-icon"></span>
              {{ $t('contact.form.emailModal.openMail') }}
            </a>
          </div>
          <div class="column">
            <button class="ts-button is-outlined is-fluid" type="button" @click="close">
              {{ $t('contact.form.emailModal.close') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { copyText, createMailtoUrl } from '../../composables/useMailto'

const props = defineProps({
  visible: Boolean,
  recipient: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true }
})

const emit = defineEmits(['update:visible', 'open-mail'])
const dialog = ref(null)
const copyStatus = ref('')

const mailtoUrl = computed(() =>
  createMailtoUrl({ recipient: props.recipient, subject: props.subject, body: props.body })
)

watch(
  () => props.visible,
  visible => {
    copyStatus.value = ''
    if (visible) {
      dialog.value?.showModal()
    } else if (dialog.value?.open) {
      dialog.value.close()
    }
  }
)

const emailContent = computed(() => `${props.recipient}\n${props.subject}\n\n${props.body}`)

const copyEmailContent = async () => {
  const copied = await copyText(emailContent.value)
  copyStatus.value = copied
    ? 'Copied to clipboard.'
    : 'Unable to copy automatically. Please select the content manually.'
}

const close = () => emit('update:visible', false)

const openMailClient = () => {
  emit('open-mail')
  close()
}

const handleBackdropClick = event => {
  if (event.target === dialog.value) {
    close()
  }
}
</script>

<style scoped>
.email-body {
  white-space: pre-wrap;
  font-family: monospace;
}
</style>
