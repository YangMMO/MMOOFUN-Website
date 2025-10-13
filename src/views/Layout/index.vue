<template>
  <div class="max-w-[100rem] mx-auto">
    <!-- 导航 -->
    <div class="navbar bg-base-100 border-b border-base-300 sticky top-0 z-30">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
        </button>
      </div>
      <div class="flex-1 mx-2">
        <a href="/home"><img class="h-[32px]" src="../../assets/images/mmo.png" alt=""></a>
      </div>
      <label class="toggle text-base-content">
        <input type="checkbox" value="dark" class="theme-controller" />
        <span class="mgc_sun_line text-xs"></span>
        <span class="mgc_moon_stars_line text-xs"></span>
      </label>
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

</script>

<style scoped>
.max-w{
  width: 100%;
  max-width: 1600px;
}

</style>