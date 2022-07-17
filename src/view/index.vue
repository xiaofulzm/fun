
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
    }

</style>
