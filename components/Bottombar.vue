<template>
  <div class="bottom-bar w-full py-3 flex align-items-center">
    <h4 class="copy">
      Copyright © 2012-2022, Joeverlt Test. All right reserved.
    </h4>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors';
@import '@/assets/scss/mixins';
.bottom-bar {
  background-color: $dark;
  padding: 0 120px;
  height: 70px;

  .copy {
    font-size: 14px;
    color: $light;
  }

  @include breakpoint(mobile) {
    padding: 0 20px;

    .copy {
      font-size: 12px;
    }
  }
}
</style>
