<template>
  <div class="tablet+:column tablet+:is-8-wide mobile:ts-content">
    <div class="ts-header is-big is-heavy">{{ $t('contact.form.header') }}</div>
    <div class="ts-container is-very-narrow has-top-spaced-large">
      <form @submit.prevent="sendEmail">
        <div class="ts-grid is-relaxed is-2-columns">
          <div class="column">
            <div class="ts-text is-label">{{ $t('contact.form.name') }}</div>
            <div class="ts-input is-underlined is-fluid has-top-spaced">
              <input 
                type="text" 
                v-model="form.name" 
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
            type="email" 
            v-model="form.email" 
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
        
        <button 
          class="ts-button is-fluid has-vertically-spaced-large" 
          type="submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const form = reactive({
  name: '',
  gender: 'male',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

// 檢測是否支援 mailto（簡化版本）
const isMailtoSupported = () => {
  // 假設大部分桌面環境都支援 mailto
  // 只有在明確知道不支援的情況下才返回 false
  return true
}

// 複製內容到剪貼簿
const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // 備用方案：使用 textarea
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      textArea.style.top = '-9999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      try {
        const successful = document.execCommand('copy')
        document.body.removeChild(textArea)
        return successful
      } catch (err) {
        document.body.removeChild(textArea)
        return false
      }
    }
  } catch (err) {
    console.error('無法複製到剪貼簿:', err)
    return false
  }
}

// 顯示郵件內容模態框
const showEmailModal = (subject, body) => {
  const modalContent = `
<div class="ts-modal is-visible" id="email-modal">
  <div class="content">
    <div class="ts-content has-vertically-padded">
      <div class="ts-header is-large has-bottom-spaced">
        <span class="ts-icon is-envelope-icon"></span>
        ${t('contact.form.emailModal.title')}
      </div>
      <div class="ts-text is-secondary has-bottom-spaced">
        ${t('contact.form.emailModal.desc')}
      </div>
      
      <div class="ts-segment is-secondary has-bottom-spaced">
        <div class="ts-text is-label">${t('contact.form.emailModal.recipient')}</div>
        <div class="ts-text is-code">kageryo@coderyo.com</div>
      </div>
      
      <div class="ts-segment is-secondary has-bottom-spaced">
        <div class="ts-text is-label">${t('contact.form.emailModal.subject')}</div>
        <div class="ts-text is-code">${subject}</div>
      </div>
      
      <div class="ts-segment is-secondary has-bottom-spaced">
        <div class="ts-text is-label">${t('contact.form.emailModal.body')}</div>
        <div class="ts-text is-code" style="white-space: pre-wrap; font-family: monospace;">${body}</div>
      </div>
    </div>
    
    <div class="ts-divider"></div>
    
    <div class="ts-content is-tertiary">
      <div class="ts-grid is-2-columns">
        <div class="column">
          <button class="ts-button is-fluid" onclick="copyEmailContent()">
            <span class="ts-icon is-copy-icon"></span>
            ${t('contact.form.emailModal.copyAll')}
          </button>
        </div>
        <div class="column">
          <button class="ts-button is-outlined is-fluid" onclick="closeEmailModal()">
            ${t('contact.form.emailModal.close')}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`

  const existingModal = document.getElementById('email-modal')
  if (existingModal) {
    existingModal.remove()
  }
  
  document.body.insertAdjacentHTML('beforeend', modalContent)
  
  window.copyEmailContent = async () => {
    const emailContent = `${t('contact.form.emailModal.recipient')}: kageryo@coderyo.com
  ${t('contact.form.emailModal.subject')}: ${subject}

  ${t('contact.form.emailModal.body')}:
  ${body}`
    
    const success = await copyToClipboard(emailContent)
    if (success) {
      alert(t('contact.form.emailModal.copySuccess'))
    } else {
      alert(t('contact.form.emailModal.copyFail'))
    }
  }
  
  window.closeEmailModal = () => {
    const modal = document.getElementById('email-modal')
    if (modal) {
      modal.remove()
    }
    delete window.copyEmailContent
    delete window.closeEmailModal
  }
}

const sendEmail = async () => {
  isSubmitting.value = true
  
  try {
    const subject = t('contact.form.subjectPrefix', { name: form.name })
    const body = t('contact.form.bodyTemplate', {
      name: form.name,
      gender: form.gender === 'male' ? t('contact.form.male') : form.gender === 'female' ? t('contact.form.female') : t('contact.form.other'),
      email: form.email,
      message: form.message
    })
    
    const mailtoURL = `mailto:kageryo@coderyo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    console.log('嘗試打開郵件應用程式:', mailtoURL)
    
    const link = document.createElement('a')
    link.href = mailtoURL
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    let mailAppOpened = false
    
    // 監聽視窗焦點變化來檢測郵件應用程式是否打開
    const handleVisibilityChange = () => {
      if (document.hidden) {
        mailAppOpened = true
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }
    
    const handleBlur = () => {
      mailAppOpened = true
      window.removeEventListener('blur', handleBlur)
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('blur', handleBlur)
    
    setTimeout(() => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('blur', handleBlur)
      
      if (mailAppOpened) {
        alert(t('contact.form.mailOpened'))
        
        // 重置表單
        Object.assign(form, {
          name: '',
          gender: 'male',
          email: '',
          message: ''
        })
      } else {
        const userConfirm = confirm(t('contact.form.mailNotOpened'))
        
        if (userConfirm) {
          showEmailModal(subject, body)
          
          Object.assign(form, {
            name: '',
            gender: 'male',
            email: '',
            message: ''
          })
        }
      }
    }, 2000)
    
  } catch (error) {
    console.error('發送郵件時發生錯誤：', error)
    alert(t('contact.form.sendFail', { msg: error.message }))
  } finally {
    isSubmitting.value = false
  }
}
</script>