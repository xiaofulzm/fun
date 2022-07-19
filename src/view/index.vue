
<script setup lang="ts">
import Header from '@/components/header/index.vue'

</script>

<template>
  <Header></Header>
  <!-- <router-link to="/login"> -->
  <!-- login页面 -->
  <div class="index">
    <h1 class="h1">
      尽情期待
    </h1>
    <!-- </router-link> -->
    <div class="shade"></div>
  </div>
</template>

<style scoped lang="scss">
    .index{
        display: flex;
        align-items: center;
        justify-content: center;
        height:calc(100vh - 80px);
        .h1{
            color: var(--fu-text-color);
        }
        .shade{
            position:fixed;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100vw;
            height: 100vh;
            background-color: var(--fu-bg-color);
            // background-color: red;
            animation: shadeSun ease-in 0.7s;
        }
    }
    @keyframes shadeSun{
        0%{
            width: 0;
            height: 0;
        }
        100%{
            width: 100vw;
            height: 100vh;
        }
    }

</style>
