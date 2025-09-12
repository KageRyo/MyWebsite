<template>
  <div class="ts-container has-top-spaced-large">
    <!-- 榮譽與獎項 -->
    <div class="ts-header is-big is-heavy">榮譽與獎項</div>
    <div class="ts-box has-top-spaced-small">
      <table class="ts-table">
        <thead>
          <tr>
            <th>#</th>
            <th>年份</th>
            <th>名稱</th>
            <th>獎項</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(award, index) in awards" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ award.year }}</td>
            <td>{{ award.name }}</td>
            <td>{{ award.award }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th :colspan="4">統計筆數：{{ awards.length }}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 獎項數據
const awards = ref([
  { year: '2015', name: '第 12 屆宏碁數位創作獎競賽', award: '優勝' },
  { year: '2016', name: '第 1 屆 BeingLife 創作大賽', award: '佳作' },
  { year: '2020', name: '高雄市第 60 屆中小學科學展覽會', award: '鄉土教材獎' },
  { year: '2020', name: '民生公共物聯網資料應用競賽', award: '複決前30強' },
  { year: '2021', name: '國立臺中科技大學智慧生產工程系', award: '技優甄審正取' },
  { year: '2021', name: '國立臺中科技大學智慧生產工程系', award: '甄選入學正取' },
  { year: '2021', name: '國立高雄科技大學智慧商務系', award: '技優甄審正取' },
  { year: '2021', name: '第 12 屆 IIIC 國際創新發明競賽', award: '金牌' },
  { year: '2022', name: '國立臺中科技大學 110 學年度第一學期', award: '班級第一名' },
  { year: '2022', name: '國立臺中科技大學 110 學年度第二學期', award: '班級第一名' },
  { year: '2022', name: '第 16 屆 IWIS 波蘭國際發明展', award: '金牌' },
  { year: '2022', name: '第 13 屆 IIIC 國際創新發明競賽', award: '金牌' },
  { year: '2022', name: '第 13 屆 IENA 德國紐倫堡發明展', award: '銀牌' },
  { year: '2022', name: '財團法人新光人壽獎助學金基金會', award: '成績優良獎' },
  { year: '2023', name: '國立臺中科技大學 111 學年度第一學期', award: '班級第一名' },
  { year: '2023', name: 'Coding APE 猿創力程式設計學校', award: '儲備講師錄取' },
  { year: '2023', name: '第 22 屆 MTE 馬來西亞國際發明展', award: '銀牌' },
  { year: '2023', name: '第 26 屆俄羅斯阿基米德國際發明展', award: '金牌' },
  { year: '2023', name: '第 26 屆俄羅斯阿基米德國際發明展', award: '庫班大學特別獎' },
  { year: '2023', name: '第 1 屆校園創新發明科技競賽', award: '金牌' },
  { year: '2023', name: '第 1 屆校園創新發明科技競賽', award: '特別獎' },
  { year: '2023', name: '國立臺中科技大學 111 學年度第二學期', award: '班級第一名' },
  { year: '2024', name: '國立臺中科技大學 112 學年度第一學期', award: '班級第一名' },
  { year: '2024', name: '國立臺中科技大學 112 學年度第一學期', award: '操行優良' },
  { year: '2024', name: '國立臺中科技大學智慧生產工程系專題競賽 專題實務組', award: '第一名' },
  { year: '2024', name: '國立臺中科技大學 112 學年度第二學期', award: '班級第一名' },
  { year: '2024', name: '國立臺中科技大學 112 學年度第二學期', award: '操行優良' }
])
</script>