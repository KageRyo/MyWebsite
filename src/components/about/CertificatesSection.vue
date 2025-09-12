<template>
  <div class="ts-container has-top-spaced-large">
    <!-- 證照 -->
    <div class="ts-header is-big is-heavy">證照</div>
    <div class="ts-box has-top-spaced-small">
      <table class="ts-table">
        <thead>
          <tr>
            <th>#</th>
            <th>年份</th>
            <th>名稱</th>
            <th>級別</th>
            <th class="mobile:has-hidden">序號</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cert, index) in certificates" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ cert.year }}</td>
            <td>{{ cert.name }}</td>
            <td>{{ cert.level || '' }}</td>
            <td class="mobile:has-hidden">{{ cert.number || '' }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th :colspan="5">統計筆數：{{ certificates.length }}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 證照數據
const certificates = ref([
  { 
    year: '2017', 
    name: 'TQC+ 基礎物件導向程式語言 Java6', 
    level: '專業級', 
    number: '2321170800001350' 
  },
  { 
    year: '2018', 
    name: 'Certiport IC3 Living Online', 
    level: '', 
    number: '' 
  },
  { 
    year: '2018', 
    name: 'Certiport IC3 Key Applications', 
    level: '', 
    number: '' 
  },
  { 
    year: '2018', 
    name: 'Certiport IC3 Computing Fundamentals', 
    level: '', 
    number: '' 
  },
  { 
    year: '2018', 
    name: 'Certiport IC3 GS5', 
    level: '', 
    number: 'XvUz-XMNe' 
  },
  { 
    year: '2019', 
    name: 'TQC+ 基礎行動裝置應用程式設計 Android6', 
    level: '專業級', 
    number: '232191200002100' 
  },
  { 
    year: '2019', 
    name: '勞動部勞動力發展署技能檢定中心 電腦軟體應用', 
    level: '丙級', 
    number: '118-852929' 
  },
  { 
    year: '2019', 
    name: '勞動部勞動力發展署技能檢定中心 電腦硬體裝修', 
    level: '丙級', 
    number: '120-279051' 
  },
  { 
    year: '2020', 
    name: '勞動部勞動力發展署技能檢定中心 電腦硬體裝修', 
    level: '乙級', 
    number: '120-056354' 
  },
  { 
    year: '2021', 
    name: 'Mircosoft Certified Azure AI Fundamentals', 
    level: '', 
    number: 'yyC5-DwWu' 
  }
])
</script>