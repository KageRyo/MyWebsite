<template>
  <div class="tablet+:column tablet+:is-8-wide mobile:ts-content">
    <div class="ts-header is-big is-heavy">聯絡表單</div>
    <div class="ts-container is-very-narrow has-top-spaced-large">
      <form @submit.prevent="sendEmail">
        <div class="ts-grid is-relaxed is-2-columns">
          <!-- 姓名 -->
          <div class="column">
            <div class="ts-text is-label">名稱</div>
            <div class="ts-input is-underlined is-fluid has-top-spaced">
              <input 
                type="text" 
                v-model="form.name" 
                placeholder="讓我知道該如何稱呼您吧！"
                required
              >
            </div>
          </div>
          
          <!-- 性別 -->
          <div class="column">
            <div class="ts-text is-label">性別</div>
            <div class="has-flex-center">
              <div class="ts-wrap has-top-spaced">
                <label class="ts-radio">
                  <input v-model="form.gender" name="gender" type="radio" value="male">
                  男性
                </label>
                <label class="ts-radio">
                  <input v-model="form.gender" name="gender" type="radio" value="female">
                  女性
                </label>
                <label class="ts-radio">
                  <input v-model="form.gender" name="gender" type="radio" value="other">
                  其它
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 電子郵件 -->
        <div class="ts-text is-label has-top-spaced-large">電子郵件地址</div>
        <div class="ts-input is-underlined is-fluid has-top-spaced">
          <input 
            type="email" 
            v-model="form.email" 
            placeholder="請輸入您的電子郵件地址，這樣才能回復您唷！"
            required
          >
        </div>
        
        <!-- 訊息內容 -->
        <div class="ts-text is-label has-top-spaced-large">內文</div>
        <div class="ts-input is-resizable is-underlined is-fluid has-top-spaced">
          <textarea 
            v-model="form.message" 
            placeholder="讓我知道您想說明或聯絡的內容吧！"
            required
          ></textarea>
        </div>
        
        <!-- 送出按鈕 -->
        <button 
          class="ts-button is-fluid has-vertically-spaced-large" 
          type="submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? '送出中...' : '送出' }}
        </button>
      </form>

      <!-- Ko-fi 贊助按鈕已移至聯絡資訊（ContactInfo） -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'

// 表單數據
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
        郵件內容
      </div>
      <div class="ts-text is-secondary has-bottom-spaced">
        由於環境限制，無法直接開啟郵件應用程式。請複製以下內容手動發送郵件：
      </div>
      
      <div class="ts-segment is-secondary has-bottom-spaced">
        <div class="ts-text is-label">收件人</div>
        <div class="ts-text is-code">kageryo@coderyo.com</div>
      </div>
      
      <div class="ts-segment is-secondary has-bottom-spaced">
        <div class="ts-text is-label">主旨</div>
        <div class="ts-text is-code">${subject}</div>
      </div>
      
      <div class="ts-segment is-secondary has-bottom-spaced">
        <div class="ts-text is-label">內容</div>
        <div class="ts-text is-code" style="white-space: pre-wrap; font-family: monospace;">${body}</div>
      </div>
    </div>
    
    <div class="ts-divider"></div>
    
    <div class="ts-content is-tertiary">
      <div class="ts-grid is-2-columns">
        <div class="column">
          <button class="ts-button is-fluid" onclick="copyEmailContent()">
            <span class="ts-icon is-copy-icon"></span>
            複製全部內容
          </button>
        </div>
        <div class="column">
          <button class="ts-button is-outlined is-fluid" onclick="closeEmailModal()">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`

  // 移除現有的模態框
  const existingModal = document.getElementById('email-modal')
  if (existingModal) {
    existingModal.remove()
  }
  
  // 添加模態框到 body
  document.body.insertAdjacentHTML('beforeend', modalContent)
  
  // 添加全域函數
  window.copyEmailContent = async () => {
    const emailContent = `收件人: kageryo@coderyo.com
主旨: ${subject}

內容:
${body}`
    
    const success = await copyToClipboard(emailContent)
    if (success) {
      alert('郵件內容已複製到剪貼簿！您可以貼到您的郵件應用程式中。')
    } else {
      alert('複製失敗，請手動選取複製上述內容。')
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

// 發送郵件功能
const sendEmail = async () => {
  isSubmitting.value = true
  
  try {
    const subject = `來自 ${form.name} 的聯絡訊息`
    const body = `姓名：${form.name}
性別：${form.gender === 'male' ? '男性' : form.gender === 'female' ? '女性' : '其它'}
電子郵件：${form.email}

訊息內容：
${form.message}`
    
    const mailtoURL = `mailto:kageryo@coderyo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    console.log('嘗試打開郵件應用程式:', mailtoURL)
    
    // 創建一個隱藏的 a 標籤來觸發 mailto
    const link = document.createElement('a')
    link.href = mailtoURL
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // 檢查是否成功觸發
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
    
    // 等待一小段時間檢查結果
    setTimeout(() => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('blur', handleBlur)
      
      if (mailAppOpened) {
        // 郵件應用程式似乎有打開
        alert('郵件應用程式已開啟，請確認發送！')
        
        // 重置表單
        Object.assign(form, {
          name: '',
          gender: 'male',
          email: '',
          message: ''
        })
      } else {
        // 郵件應用程式沒有打開，提供備用方案
        const userConfirm = confirm('郵件應用程式可能沒有正確開啟。\n\n點擊「確定」查看備用方案，或點擊「取消」保留表單內容。')
        
        if (userConfirm) {
          showEmailModal(subject, body)
          
          // 重置表單
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
    alert(`發送失敗：${error.message}\n\n請直接發送郵件到 kageryo@coderyo.com 或使用其他聯絡方式。`)
  } finally {
    isSubmitting.value = false
  }
}
</script>