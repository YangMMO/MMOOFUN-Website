<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import { provide } from 'vue'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin.js'
import MorphSVGPlugin from 'gsap/MorphSVGPlugin.js'
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin)

provide('gsap', gsap)
provide('DrawSVGPlugin', DrawSVGPlugin)
provide('MorphSVGPlugin', MorphSVGPlugin)

</script>


<style scoped lang="scss">

</style>
