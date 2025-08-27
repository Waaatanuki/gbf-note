<script setup lang="ts">
const imgUri = 'https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/vyrnsampo/assets/character/exploring'
const currentImageIndex = ref(1)
let animationFrameId: number | null = null
let lastTime = 0
const frameInterval = 150

function animate(time: number) {
  if (time - lastTime >= frameInterval) {
    currentImageIndex.value = (currentImageIndex.value % 4) + 1
    lastTime = time
  }

  animationFrameId = requestAnimationFrame(animate)
}

function startAnimation() {
  animationFrameId = requestAnimationFrame(animate)
}

function stopAnimation() {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
}

onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  stopAnimation()
})
</script>

<template>
  <div relative h-500px w-500px fc>
    <img absolute w-full src="https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/vyrnsampo/assets/header_bg/exploring/1_3.jpg" alt="" srcset="">
    <div relative w-300px>
      <img absolute :src="`${imgUri}/captain/captain_01_03_000_0${currentImageIndex}.png`">
      <img absolute :src="`${imgUri}/captain/captain_01_02_000_0${currentImageIndex}.png`">
      <img absolute :src="`${imgUri}/captain/captain_01_01_000_0${currentImageIndex}.png`">
    </div>
    <div v-for="i in 4" :key="i " relative w-300px>
      <img absolute :src="`${imgUri}/crew/crew_0${i}_0${currentImageIndex}.png`">
    </div>
  </div>
</template>
