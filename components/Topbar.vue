<template>
  <div class="topbar flex align-items-center justify-content-between">
    <div class="left-content flex align-items-center justify-content-center">
      <h1 class="ml-3 mr-5">Aluxion.</h1>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/colors';
.topbar {
  height: 70px;
  width: 100vw;
  background-color: $black;
  padding: 0 120px;

  .left-content {
    height: 100%;

    h1 {
      color: white;
      font-size: 25px;
    }

    h2 {
      color: white;
      font-size: 15px;
    }
  }
}
</style>
