<template>
  <div class="max-w-[100rem] mx-auto">
    <!-- 导航 -->
    <div class="navbar bg-base-100 border-b border-base-300 sticky top-0 z-30">

      <div class="flex-1 mx-2">
        <a href="/" class=" flex gap-2">
          <svg class="logo" width="545" height="545" viewBox="0 0 545 545" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="draw-line" d="M95.3553 308.193L24.6447 378.904C5.11845 398.43 5.11844 430.088 24.6447 449.614L95.3553 520.325C114.882 539.851 146.54 539.851 166.066 520.325L236.777 449.614C256.303 430.088 287.961 430.088 307.487 449.614L378.198 520.325C397.724 539.851 429.383 539.851 448.909 520.325L519.619 449.614C539.146 430.088 539.146 398.43 519.619 378.904L448.909 308.193C429.383 288.667 429.383 257.009 448.909 237.482L519.619 166.772C539.146 147.245 539.146 115.587 519.619 96.061L448.909 25.3504C429.383 5.82414 397.724 5.82413 378.198 25.3504L307.487 96.061C287.961 115.587 256.303 115.587 236.777 96.061L166.066 25.3504C146.54 5.82414 114.882 5.82415 95.3553 25.3504L24.6447 96.061C5.11844 115.587 5.11845 147.245 24.6447 166.772L95.3553 237.482"/>
            <path class="draw-line" d="M179.293 444.525H149.293C121.679 444.525 99.2928 422.139 99.2928 394.525V364.525M362.76 444.912H392.76C420.374 444.912 442.76 422.527 442.76 394.912V364.912M363.148 101.8H393.148C420.762 101.8 443.148 124.186 443.148 151.8V181.8M179.681 101.413L149.681 101.413C122.067 101.413 99.6815 123.798 99.6815 151.413V181.413M342.843 343.548C303.79 382.601 240.474 382.601 201.421 343.548C162.369 304.496 162.369 241.179 201.421 202.127C240.474 163.075 303.79 163.075 342.843 202.127C381.895 241.179 381.895 304.496 342.843 343.548Z"/>
          </svg>
        </a>
      </div>
      <label class="toggle text-base-content">
        <input type="checkbox" value="dark" class="theme-controller" />
        <span class="mgc_sun_line text-xs"></span>
        <span class="mgc_moon_stars_line text-xs"></span>
      </label>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
        </button>
      </div>
    </div>

    <!-- 页面 -->
    <router-view></router-view>

    <!-- 页脚 -->
    <footer class="footer sm:footer-horizontal footer-center border-t border-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © 2018 - {{new Date().getFullYear()}}, All right reserved by MMOO.FUN</p>
      </aside>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin.js'

const router = useRouter()
gsap.registerPlugin(DrawSVGPlugin)

onMounted(() => {
  gsap.set(".logo", { transformOrigin: "center center" })
  gsap.set(".draw-line", { visibility: "visible" })

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 60 })

  // 渐隐显示 + 旋转45° + 绘制线条
  tl.from(".draw-line", {
    drawSVG: "0%",
    duration: 2,
    ease: "power2.inOut",
    stagger: 0.1
  },)
})
</script>

<style scoped>
.max-w{
  width: 100%;
  max-width: 1600px;
}

.logo {
  width: 32px;
  height: 32px;
}

svg path.draw-line {
  stroke: #000;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  visibility: hidden;
}

</style>