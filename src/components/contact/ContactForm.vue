<template>
  <div class="tablet+:column tablet+:is-8-wide mobile:ts-content">
    <div class="ts-header is-big is-heavy">{{ $t('contactForm.header') }}</div>
    <div class="ts-container is-very-narrow has-top-spaced-large">
      <form @submit.prevent="sendEmail">
        <div class="ts-grid is-relaxed is-2-columns">
          <div class="column">
            <div class="ts-text is-label">{{ $t('contactForm.name') }}</div>
            <div class="ts-input is-underlined is-fluid has-top-spaced">
              <input 
                type="text" 
                v-model="form.name" 
                :placeholder="$t('contactForm.namePlaceholder')"
                required
              >
            </div>
          </div>
          
          <div class="column">
            <div class="ts-text is-label">{{ $t('contactForm.gender') }}</div>
            <div class="has-flex-center">
              <div class="ts-wrap has-top-spaced">
                <label class="ts-radio">
                  <input v-model="form.gender" name="gender" type="radio" value="male">
                  {{ $t('contactForm.male') }}
                </label>
                <label class="ts-radio">
                  <input v-model="form.gender" name="gender" type="radio" value="female">
                  {{ $t('contactForm.female') }}
                </label>
                <label class="ts-radio">
                  <input v-model="form.gender" name="gender" type="radio" value="other">
                  {{ $t('contactForm.other') }}
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div class="ts-text is-label has-top-spaced-large">{{ $t('contactForm.email') }}</div>
        <div class="ts-input is-underlined is-fluid has-top-spaced">
          <input 
            type="email" 
            v-model="form.email" 
            :placeholder="$t('contactForm.emailPlaceholder')"
            required
          >
        </div>
        
        <div class="ts-text is-label has-top-spaced-large">{{ $t('contactForm.message') }}</div>
        <div class="ts-input is-resizable is-underlined is-fluid has-top-spaced">
          <textarea 
            v-model="form.message" 
            :placeholder="$t('contactForm.messagePlaceholder')"
            required
          ></textarea>
        </div>
        
        <button 
          class="ts-button is-fluid has-vertically-spaced-large" 
          type="submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? $t('contactForm.sending') : $t('contactForm.send') }}
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'

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
        {{ $t('contactForm.emailModalTitle') }}
      </div>
      <div class="ts-text is-secondary has-bottom-spaced">
        {{ $t('contactForm.emailModalDesc') }}
      </div>
      
      <div class="ts-segment is-secondary has-bottom-spaced">
        <div class="ts-text is-label">{{ $t('contactForm.recipient') }}</div>
        <div class="ts-text is-code">kageryo@coderyo.com</div>
      </div>
      
      <div class="ts-segment is-secondary has-bottom-spaced">
        <div class="ts-text is-label">{{ $t('contactForm.subject') }}</div>
        <div class="ts-text is-code">${subject}</div>
      </div>
      
      <div class="ts-segment is-secondary has-bottom-spaced">
        <div class="ts-text is-label">{{ $t('contactForm.body') }}</div>
        <div class="ts-text is-code" style="white-space: pre-wrap; font-family: monospace;">${body}</div>
      </div>
    </div>
    
    <div class="ts-divider"></div>
    
    <div class="ts-content is-tertiary">
      <div class="ts-grid is-2-columns">
        <div class="column">
          <button class="ts-button is-fluid" onclick="copyEmailContent()">
            <span class="ts-icon is-copy-icon"></span>
            {{ $t('contactForm.copyAll') }}
          </button>
        </div>
        <div class="column">
          <button class="ts-button is-outlined is-fluid" onclick="closeEmailModal()">
            {{ $t('contactForm.close') }}
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
    const emailContent = `收件人: kageryo@coderyo.com
主旨: ${subject}

內容:
${body}`
    
    const success = await copyToClipboard(emailContent)
    if (success) {
      alert($t('contactForm.copySuccess'))
    } else {
      alert($t('contactForm.copyFail'))
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
    const subject = $t('contactForm.subjectPrefix', { name: form.name })
    const body = $t('contactForm.bodyTemplate', {
      name: form.name,
      gender: form.gender === 'male' ? $t('contactForm.male') : form.gender === 'female' ? $t('contactForm.female') : $t('contactForm.other'),
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
        alert($t('contactForm.mailOpened'))
        
        // 重置表單
        Object.assign(form, {
          name: '',
          gender: 'male',
          email: '',
          message: ''
        })
      } else {
        const userConfirm = confirm($t('contactForm.mailNotOpened'))
        
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
    alert($t('contactForm.sendFail', { msg: error.message }))
  } finally {
    isSubmitting.value = false
  }
}
</script>