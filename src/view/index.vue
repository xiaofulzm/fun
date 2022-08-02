<script setup lang="ts">
import Header from '@/components/header/index.vue'
import Timer from '@/components/timer/index.vue'

import {
  isDarkly,
  darklyFn
} from '@/utils'

setTimeout(() => {
  darklyFn()
}, 1000)
</script>

<template>
  <Header></Header>
  <!-- <router-link to="/login"> -->
  <!-- login页面 -->
  <div class="index">
    <!-- <h1 class="h1">
      尽情期待
    </h1> -->
    <div class="timer-wrap">
      <Timer></Timer>
    </div>
    <!-- </router-link> -->
    <div
      class="shade"
      :class="!isDarkly?'shade-moon':'shade-sun'"
    ></div>
  </div>
</template>

<style scoped lang="scss">
    .index{
        display: flex;
        align-items: center;
        justify-content: center;
        height:calc(100vh - 80px);
        .timer-wrap{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        .shade{
            position:fixed;
            top: 50%;
            left: 50%;
            z-index: -1;
            width: 500px;
            height: 500px;
            // background-color: #242424;
            border-radius: 50%;
            transform: translateX(-250px) translateY(-250px) scale(5);
            transition: transform 1s;
        }
         .shade-moon{
            background-color: #242424;
            transform: translateX(-250px) translateY(-250px) scale(0);
        }
         .shade-sun{
            background-color: #fff;
            transform: translateX(-250px) translateY(-250px) scale(0);

        }
    }
</style>
