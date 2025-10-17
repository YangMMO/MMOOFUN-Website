<template>
  <div>
    <div className="absolute h-screen w-screen bg-[#ffffff] z-[-1]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#8989892e_1px,transparent_1px),linear-gradient(to_bottom,#8989892e_1px,transparent_1px)] bg-[size:20px_20px] mask-radial-[ellipse_60%_60%_at_50%_50%] mask-from-black mask-from-20% mask-to-transparent mask-to-100%"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-radial-[at_50%_10%] from-[rgba(255,255,255,0.3)] from-40% to-[rgba(255,255,255,1)] to-100%"></div>
    </div>
    
    <div class="h-screen w-screen flex justify-center items-center flex-col gap-8">
      <svg class="logo" width="620" height="620" viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="draw-line" x="210" y="210" width="200" height="200" rx="100" stroke="black" stroke-width="20"/>
        <rect class="draw-line" x="10" y="10" width="600" height="600" rx="300" stroke="black" stroke-width="20"/>
        <path class="draw-line" d="M210 510C210 565.228 254.772 610 310 610C365.228 610 410 565.228 410 510V460C410 432.386 432.386 410 460 410H510C565.228 410 610 365.228 610 310C610 254.772 565.228 210 510 210M110 410C54.7715 410 10 365.228 10 310C10 254.772 54.7715 210 110 210H160C187.614 210 210 187.614 210 160V110C210 54.7715 254.772 10 310 10C365.228 10 410 54.7715 410 110" stroke="black" stroke-width="20" stroke-linecap="round"/>
        <path class="draw-line" d="M337.853 496L316.64 517.213C312.734 521.118 306.403 521.118 302.497 517.213L281.284 496M281.284 124L302.497 102.787C306.403 98.8815 312.734 98.8815 316.64 102.787L337.853 124M124 337.853L102.787 316.64C98.8816 312.734 98.8816 306.403 102.787 302.497L124 281.284M496 281.284L517.213 302.497C521.118 306.403 521.118 312.734 517.213 316.64L496 337.853" stroke="black" stroke-width="20" stroke-linecap="round"/>
      </svg>


      <div class="prose text-center">
        <h1>404</h1>
        <p>查找的内容不在哦！</p>
        <button class="btn btn-xl btn-neutral btn-dash mt-4" @click="handleReturnHomePage">回到首页</button>
      </div>

      <div class="mockup-window bg-base-100 border border-base-300 w-full max-w-3xl prose text-center ">
        <div class="grid place-content-center h-20">
          <div class="absolute top-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <p>假装有广告，实则并没有，快点回到首页吧！</p>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const gsap = inject('gsap')
const CustomBounce = inject('CustomBounce')

function handleReturnHomePage() {
  router.push('/')
}

onMounted(() => {
  CustomBounce.create("CusBounce", {
    strength: 0.6,
    squash: 3,
    squashID: "CusBounce-squash",
  });

  gsap.set(".logo", { opacity: 0, transformOrigin: "center center" })
  gsap.set(".draw-line", { visibility: "visible" })

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

  // 渐隐显示 + 旋转45° + 绘制线条
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
  }, "<") // "<" 表示同时执行
  .to(".logo", {
    rotation: "+=45",
    duration: 1,
    ease: "CusBounce"
  })

})
</script>


<style scoped lang="scss">

.logo {
  width: 200px;
  height: 200px;
}

svg path.draw-line {
  stroke: #000;
  stroke-width: 20;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  visibility: hidden;
}
</style>
