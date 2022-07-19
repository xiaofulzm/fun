
<script setup lang="ts">
import Logo from '@/assets/svg/logo.svg'
import Moon from '@/assets/svg/moon.svg'
import Sun from '@/assets/svg/sun.svg'
import { ref } from 'vue'

const pattern = ref(true)
console.log(document.body.classList.contains)

const handlePattern = () => {
  pattern.value = !pattern.value
  document.documentElement.classList.toggle('dark-theme')
}

</script>

<template>
  <header class="header">
    <Logo class="logo-svg" />
    <div class="button-wrap">
      <Moon
        @click="handlePattern"
        class="moon"
        v-show="pattern"
      ></Moon>
      <Sun
        @click="handlePattern"
        class="sun"
        v-show="!pattern"
      ></Sun>
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
            // background-color: aquamarine;
            .moon{
                width: 28px;
                height: 28px;
                cursor: pointer;
                &:hover {
                    transform: rotate(-1turn);
                    transition: all 0.5s cubic-bezier(.34,0,.84,1);
                }
            }
            .sun{
                width: 46px;
                height: 46px;
                cursor: pointer;
                 &:hover {
                    transform: rotate(-1turn);
                    transition: all 0.5s cubic-bezier(.34,0,.84,1);
                }
            }
        }
    }

</style>
