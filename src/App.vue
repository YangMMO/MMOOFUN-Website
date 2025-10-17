<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin.js'
import MorphSVGPlugin from 'gsap/MorphSVGPlugin.js'
import CustomEase from 'gsap/CustomEase.js'
import CustomBounce from 'gsap/CustomBounce.js'

// gsap配置
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, CustomEase, CustomBounce)

provide('gsap', gsap)
provide('DrawSVGPlugin', DrawSVGPlugin)
provide('MorphSVGPlugin', MorphSVGPlugin)
provide('CustomEase', CustomEase)
provide('CustomBounce', CustomBounce)

// 主题配置
const themeMode = ref('light') // 默认值设为 'light'
provide('themeMode', themeMode)

onMounted(() => {
  // 初始检测
  checkSystemTheme()
  
  // 监听系统主题变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = (e) => {
    themeMode.value = e.matches ? 'dark' : 'light'
    console.log('系统主题变化:', themeMode.value)
  }
  
  mediaQuery.addEventListener('change', handleChange)
  
  // 清理
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleChange)
  })
})

function checkSystemTheme() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  themeMode.value = isDark ? 'dark' : 'light'
  console.log('初始系统主题:', themeMode.value)
}

</script>


<style scoped lang="scss">

</style>
