<template>
  <div>
    <!-- 导航 -->
    <div class="bg-base-100 sticky top-0 z-30">

      <div class="navbar max-w-[100rem] mx-auto justify-between p-[0.5rem]">
        <div>
          <router-link to="/home" class="logoBox flex gap-2 relative items-center">
            <svg class="logo w-[40px] h-[40px]" width="620" height="620" viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect class="draw-line" x="210" y="210" width="200" height="200" rx="100" stroke="black" stroke-width="20"/>
              <rect class="draw-line" x="10" y="10" width="600" height="600" rx="300" stroke="black" stroke-width="20"/>
              <path class="draw-line" d="M210 510C210 565.228 254.772 610 310 610C365.228 610 410 565.228 410 510V460C410 432.386 432.386 410 460 410H510C565.228 410 610 365.228 610 310C610 254.772 565.228 210 510 210M110 410C54.7715 410 10 365.228 10 310C10 254.772 54.7715 210 110 210H160C187.614 210 210 187.614 210 160V110C210 54.7715 254.772 10 310 10C365.228 10 410 54.7715 410 110" stroke="black" stroke-width="20" stroke-linecap="round"/>
              <path class="draw-line" d="M337.853 496L316.64 517.213C312.734 521.118 306.403 521.118 302.497 517.213L281.284 496M281.284 124L302.497 102.787C306.403 98.8815 312.734 98.8815 316.64 102.787L337.853 124M124 337.853L102.787 316.64C98.8816 312.734 98.8816 306.403 102.787 302.497L124 281.284M496 281.284L517.213 302.497C521.118 306.403 521.118 312.734 517.213 316.64L496 337.853" stroke="black" stroke-width="20" stroke-linecap="round"/>
            </svg>
            <!-- <span class="text-lg">MMOOFUN</span> -->

          </router-link>
        </div>

        <div class="flex gap-1">
              <kbd class="kbd cursor-default text-center">M</kbd>
              <kbd class="kbd cursor-default">M</kbd>
              <kbd class="kbd cursor-default">O</kbd>
              <kbd class="kbd cursor-default">O</kbd>
              <kbd class="kbd cursor-default">F</kbd>
              <kbd class="kbd cursor-default">U</kbd>
              <kbd class="kbd cursor-default">N</kbd>
            </div>

        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> -->
            <span class="mgc_menu_line text-xl"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- 页面 -->
    <router-view class="max-w-[100rem] mx-auto  px-[0.5rem]"></router-view>

    <!-- 页脚 -->
    <footer class="sm:footer-horizontal text-base-content">
      <div class="footer p-[0.5rem]  max-w-[100rem] mx-auto">
        <aside>
          <!-- <svg class="w-[64px] h-[64px]" width="620" height="620" viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="210" y="210" width="200" height="200" rx="100" stroke="black" stroke-width="20"/>
            <rect x="10" y="10" width="600" height="600" rx="300" stroke="black" stroke-width="20"/>
            <path d="M210 510C210 565.228 254.772 610 310 610C365.228 610 410 565.228 410 510V460C410 432.386 432.386 410 460 410H510C565.228 410 610 365.228 610 310C610 254.772 565.228 210 510 210M110 410C54.7715 410 10 365.228 10 310C10 254.772 54.7715 210 110 210H160C187.614 210 210 187.614 210 160V110C210 54.7715 254.772 10 310 10C365.228 10 410 54.7715 410 110" stroke="black" stroke-width="20" stroke-linecap="round"/>
            <path d="M337.853 496L316.64 517.213C312.734 521.118 306.403 521.118 302.497 517.213L281.284 496M281.284 124L302.497 102.787C306.403 98.8815 312.734 98.8815 316.64 102.787L337.853 124M124 337.853L102.787 316.64C98.8816 312.734 98.8816 306.403 102.787 302.497L124 281.284M496 281.284L517.213 302.497C521.118 306.403 521.118 312.734 517.213 316.64L496 337.853" stroke="black" stroke-width="20" stroke-linecap="round"/>
          </svg> -->
          <theme></theme>
          <p>Copyright © 2018 - {{new Date().getFullYear()}}, All right reserved by MMOO.FUN</p>
        </aside>
      </div>
    </footer>

    <div class="fab">
      <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
      <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">
        <span class="mgc_more_2_line text-xl"></span>
      </div>

      <!-- buttons that show up when FAB is open -->
      <button class="btn btn-lg btn-circle" @click="scrollToTop">
        <span class="mgc_arrow_to_up_line text-xl"></span>
      </button>
      <a href="https://space.bilibili.com/5612894" target="_blank" class="btn btn-lg btn-circle">
        <span class="mgc_bilibili_line text-xl"></span>
      </a>
      <a href="https://github.com/YangMMO" target="_blank" class="btn btn-lg btn-circle">
        <span class="mgc_figma_line text-xl"></span>
      </a>
      <a href="https://github.com/YangMMO" target="_blank" class="btn btn-lg btn-circle">
        <span class="mgc_github_line text-xl"></span>
      </a>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import theme from '../../components/theme.vue'

const router = useRouter()
const gsap = inject('gsap')
const ScrollToPlugin = inject('ScrollToPlugin')

// LOGO 动画
onMounted(() => {
  gsap.set(".logo", { opacity: 0, rotation: 0, transformOrigin: "center center" })
  gsap.set(".draw-line", { visibility: "visible" })

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 60 })

  tl.to(".logo", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  })
  .from(".draw-line", {
    drawSVG: "0%",
    duration: 2,
    ease: "power2.inOut",
    stagger: 0.1
  }, "<")
})

// 回到页面顶部
const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: 0,
      autoKill: true
    },
    ease: "power2.inOut"
  })
}

</script>

<style scoped lang="scss">
.max-w{
  width: 100%;
  max-width: 1600px;
}

.logo {

  .logo-hidden {
    opacity: 0;
    transform: scale(0.8);
  }

  .logo-visible {
    opacity: 1;
    transform: scale(1);
  }
}

.logo {
  .draw-line{
    stroke: currentColor;
    stroke-width: 20;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    visibility: hidden;
  }
}


</style>