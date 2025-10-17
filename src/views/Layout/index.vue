<template>
  <div class="max-w-[100rem] mx-auto">
    <!-- 导航 -->
    <div class="navbar bg-base-100 border-b border-base-300 sticky top-0 z-30">

      <div class="flex-1 mx-2">
        <router-link to="/home" class="logoBox flex gap-2 relative items-center">
          <svg class="logo w-[32px] h-[32px]" width="620" height="620" viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="draw-line" x="210" y="210" width="200" height="200" rx="100" stroke="black" stroke-width="20"/>
            <rect class="draw-line" x="10" y="10" width="600" height="600" rx="300" stroke="black" stroke-width="20"/>
            <path class="draw-line" d="M210 510C210 565.228 254.772 610 310 610C365.228 610 410 565.228 410 510V460C410 432.386 432.386 410 460 410H510C565.228 410 610 365.228 610 310C610 254.772 565.228 210 510 210M110 410C54.7715 410 10 365.228 10 310C10 254.772 54.7715 210 110 210H160C187.614 210 210 187.614 210 160V110C210 54.7715 254.772 10 310 10C365.228 10 410 54.7715 410 110" stroke="black" stroke-width="20" stroke-linecap="round"/>
            <path class="draw-line" d="M337.853 496L316.64 517.213C312.734 521.118 306.403 521.118 302.497 517.213L281.284 496M281.284 124L302.497 102.787C306.403 98.8815 312.734 98.8815 316.64 102.787L337.853 124M124 337.853L102.787 316.64C98.8816 312.734 98.8816 306.403 102.787 302.497L124 281.284M496 281.284L517.213 302.497C521.118 306.403 521.118 312.734 517.213 316.64L496 337.853" stroke="black" stroke-width="20" stroke-linecap="round"/>
          </svg>
          <span class="text-lg">MMOOFUN</span>
        </router-link>
      </div>

      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
        </button>
      </div>
    </div>

    <!-- 页面 -->
    <router-view></router-view>

    <!-- 页脚 -->
    <footer class="footer sm:footer-horizontal footer-center border-t border-base-300 text-base-content p-[0.5rem]">
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
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import theme from '../../components/theme.vue'

const router = useRouter()
const gsap = inject('gsap')

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
</script>

<style scoped lang="scss">
.max-w{
  width: 100%;
  max-width: 1600px;
}

.logo {
  width: 32px;
  height: 32px;

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