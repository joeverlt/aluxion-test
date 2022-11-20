<template>
  <div
    class="home-page flex flex-column justify-content-between align-items-center"
  >
    <Topbar />

    <div
      class="container-wrapper w-full flex flex-column align-items-center justify-content-between"
    >
      <div class="w-full container">
        <slot />
      </div>
      <div class="w-full">
        <Socialbar />
        <Bottombar />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixins';
@import '@/assets/scss/colors';

.home-page {
  .container-wrapper {
    background-color: #f8f8f8;
    height: calc(100vh - 70px);
    overflow-y: auto;
    overflow-x: hidden;

    .container {
      padding: 0 120px;
      @include breakpoint(mobile) {
        padding: 0px;
      }
    }
  }
}
</style>
