<template>
  <div class="tabs tabs-box bg-base-200 rounded-full p-0.5">
    <!-- 跟随系统 -->
    <label class="tab w-[28px] h-[28px] rounded-full cursor-pointer p-0" >
      <input 
        type="radio" 
        name="theme-tabs" 
        class="hidden"
        :checked="themeConfig.mode === 'auto'"
        @change="setTheme('auto')"
      />
      <span class="mgc_iMac_line text-base"></span>
    </label>
    
    <!-- 明亮模式 -->
    <label class="tab w-[28px] h-[28px] rounded-full cursor-pointer p-0" >
      <input 
        type="radio" 
        name="theme-tabs" 
        class="hidden"
        :checked="themeConfig.mode === 'light'"
        @change="setTheme('light')"
      />
      <span class="mgc_sun_line text-base"></span>
    </label>
    
    <!-- 黑暗模式 -->
    <label class="tab w-[28px] h-[28px] rounded-full cursor-pointer p-0" >
      <input 
        type="radio" 
        name="theme-tabs" 
        class="hidden"
        :checked="themeConfig.mode === 'dark'"
        @change="setTheme('dark')"
      />
      <span class="mgc_moon_line text-base"></span>
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStorage } from '@vueuse/core'

// 使用 useStorage 自动持久化主题配置
const themeConfig = useStorage('theme-config', {
  mode: 'auto', // 'auto' | 'light' | 'dark'
  systemTheme: 'light'
})

// 设置主题
function setTheme(mode) {
  themeConfig.value.mode = mode
  applyTheme()
}

// 应用主题
function applyTheme() {
  let effectiveTheme = themeConfig.value.systemTheme
  
  if (themeConfig.value.mode === 'light') {
    effectiveTheme = 'light'
  } else if (themeConfig.value.mode === 'dark') {
    effectiveTheme = 'dark'
  }
  
  // 应用到 HTML
  document.documentElement.setAttribute('data-theme', effectiveTheme)
}

// 检测系统主题变化
function initSystemThemeListener() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  
  const updateSystemTheme = (e) => {
    themeConfig.value.systemTheme = e.matches ? 'dark' : 'light'
    if (themeConfig.value.mode === 'auto') {
      applyTheme()
    }
  }
  
  // 初始检测
  themeConfig.value.systemTheme = mediaQuery.matches ? 'dark' : 'light'
  
  // 监听变化
  mediaQuery.addEventListener('change', updateSystemTheme)
  
  return () => {
    mediaQuery.removeEventListener('change', updateSystemTheme)
  }
}

onMounted(() => {
  initSystemThemeListener()
  applyTheme() // 初始应用主题
})

// 监听主题配置变化
watch(themeConfig, () => {
  applyTheme()
}, { deep: true })
</script>

<style lang="scss" scoped>

</style>