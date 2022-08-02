<script setup lang="ts">
import Logo from '@/assets/svg/logo.svg'
import Moon from '@/assets/svg/moon.svg'
import Sun from '@/assets/svg/sun.svg'

import {
  isDarkly,
  darklyFn
} from '@/utils/darkly'

// console.log(document.body.classList.contains)

const handlePattern = () => {
  darklyFn()
  document.documentElement.classList.toggle('dark-theme')
}

</script>

<template>
  <header class="header">
    <Logo class="logo-svg" />
    <div class="button-wrap">
      <Sun
        @click="handlePattern"
        class="sun"
        v-if="isDarkly"
      ></Sun>
      <Moon
        @click="handlePattern"
        class="moon"
        v-else
      ></Moon>
    </div>
  </header>
</template>

<style scoped lang="scss">
    .header{
        display: flex;
        align-items: center;
        width: 100vw;
        height: 80px;
        // background-color: aquamarine;
        .logo-svg{
            width: 20%;
            fill:var(--fu-text-color);
        }
        .button-wrap{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80%;
            height: 100%;
            .moon{
                width: 26px;
                height: 26px;
                cursor: pointer;
            }
            .sun{
                width: 28px;
                height: 28px;
                cursor: pointer;
            }
        }
    }

</style>
