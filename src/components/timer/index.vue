<script setup lang="ts">

import { onMounted } from 'vue'
import { $ref } from 'vue/macros'
import { initCanvas } from '@/utils'

const el = $ref<HTMLCanvasElement>()
onMounted(() => {
  const { ctx, dpi } = initCanvas(el, 500, 500)
  const { width: w, height: h } = el
  console.log(w, h, dpi)

  ctx.strokeStyle = '#00ffff'
  ctx.lineWidth = 15
  // 设置背景
  function canvasBg () {
    const grad = ctx.createRadialGradient(w / 2, h / 2, 5, w / 2, h / 2, w)
    grad.addColorStop(0, '#03303a')
    grad.addColorStop(1, '#fff')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, w, h)
  }

  // 将数值转化为角度 (弧度 = 2pi/360)
  function toDeg (deg: number) {
    const factor = Math.PI / 180
    return deg * factor
  }

  // 根据事件  绘制圆环效果
  function randerTime () {
    // ctx.clearRect(0, 0, w, h); dfs
    canvasBg()
    const now = new Date()
    const today = now.toDateString()
    const time = now.toLocaleTimeString()
    const hrs = now.getHours() // 小时
    const min = now.getMinutes() // 分钟
    const sec = now.getSeconds() // 秒
    const mil = now.getMilliseconds() // 毫秒
    const smoothSec = sec + (mil / 1000)
    const soothMin = min + (smoothSec / 60)

    ctx.beginPath()
    ctx.arc(w / 2, h / 2, 150, 0, toDeg((hrs * 30) - 90))
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(w / 2, h / 2, 120, 0, toDeg((soothMin * 6) - 90))
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(w / 2, h / 2, 90, 0, toDeg((smoothSec * 60) - 90))
    ctx.stroke()

    ctx.font = '24px'
    ctx.fillStyle = 'rgb(00,255,255)'
    ctx.fillText(today, w / 2 - 45, h / 2)
    ctx.fillText(`${time}`, w / 2 - 25, h / 2 + 40)
  }
  // randerTime();
  setInterval(randerTime, 1000)
})

</script>

<template>
  <canvas
    class="timer"
    ref="el"
  ></canvas>
</template>

<style scoped lang="scss">
.timer {
    width: 500px;
    height: 500px;
    // background-color: black;
}
</style>
