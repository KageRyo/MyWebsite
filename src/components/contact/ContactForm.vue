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
      
      <!-- Ko-fi 贊助按鈕 -->
      <div class="has-flex-center has-top-spaced">
        <div id="kofi-button-container"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// 表單數據
const form = reactive({
  name: '',
  gender: 'male',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

// 發送郵件功能
const sendEmail = () => {
  isSubmitting.value = true
  
  try {
    const subject = `來自 ${form.name} 的聯絡訊息`
    const body = `姓名：${form.name}
性別：${form.gender === 'male' ? '男性' : form.gender === 'female' ? '女性' : '其它'}
電子郵件：${form.email}

訊息內容：
${form.message}`
    
    const mailtoURL = `mailto:kageryo@coderyo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoURL
    
    // 重置表單
    Object.assign(form, {
      name: '',
      gender: 'male',
      email: '',
      message: ''
    })
    
    alert('郵件應用程式已開啟，請確認發送！')
  } catch (error) {
    console.error('發送郵件時發生錯誤：', error)
    alert('發送失敗，請稍後再試或直接發送郵件到 kageryo@coderyo.com')
  } finally {
    isSubmitting.value = false
  }
}

// 載入 Ko-fi 按鈕
onMounted(() => {
  const KOFI_SCRIPT_ID = 'kofi-widget-script';
  const KOFI_SCRIPT_SRC = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
  const container = document.getElementById('kofi-button-container');
  if (!container) return;

  // Check if script is already present
  let script = document.getElementById(KOFI_SCRIPT_ID);
  if (!script) {
    script = document.createElement('script');
    script.id = KOFI_SCRIPT_ID;
    script.src = KOFI_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      if (typeof kofiwidget2 !== 'undefined') {
        kofiwidget2.init('Support Me on Ko-fi', '#606466', 'P5P0KOCNI');
        kofiwidget2.draw();
      } else {
        console.error('Ko-fi widget failed to load.');
      }
    };
    script.onerror = () => {
      console.error('Failed to load Ko-fi widget script.');
    };
    document.body.appendChild(script);
  } else {
    // Script already loaded, try to init immediately
    if (typeof kofiwidget2 !== 'undefined') {
      kofiwidget2.init('Support Me on Ko-fi', '#606466', 'P5P0KOCNI');
      kofiwidget2.draw();
    } else {
      // Wait a bit in case script is still loading
      setTimeout(() => {
        if (typeof kofiwidget2 !== 'undefined') {
          kofiwidget2.init('Support Me on Ko-fi', '#606466', 'P5P0KOCNI');
          kofiwidget2.draw();
        } else {
          console.error('Ko-fi widget failed to load.');
        }
      }, 500);
    }
  }
});
</script>