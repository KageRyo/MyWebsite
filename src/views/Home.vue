<template>
  <div>
    <!-- 穹頂 -->
    <HeroSection />
    
    <QuoteSection />
    
    <FeaturedPhotos />
    
    <InfoCards />
    
    <!-- 邊緣收屜內容 -->
    <DrawerContent />
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import QuoteSection from '../components/home/QuoteSection.vue'
import FeaturedPhotos from '../components/home/FeaturedPhotos.vue'
import InfoCards from '../components/home/InfoCards.vue'
import DrawerContent from '../components/home/DrawerContent.vue'
</script>
