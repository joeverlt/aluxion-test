<template>
  <div class="socials-bar w-full py-3 flex align-items-center">
    <h4 class="m-0">Sigueme en:</h4>
    <div class="social-icons ml-2">
      <a v-for="social in socials" :href="social.link" target="_blank">
        <i :class="social.className"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
const socials = [
  {
    link: 'https://www.instagram.com/joeverlt/',
    className: 'social-icon m-2 pi pi-instagram hover:text-pink-600'
  },
  {
    link: 'https://www.linkedin.com/in/joel-crespo-83ab7716a/',
    className: 'social-icon m-2 pi pi-linkedin hover:text-blue-600'
  }
]
</script>

<style lang="scss">
@import '@/assets/scss/colors';
@import '@/assets/scss/mixins';
.socials-bar {
  padding: 0 120px;
  background-color: $help;
  height: 70px;

  h4 {
    color: $light;
    font-size: 15px;
  }

  i.social-icon {
    color: $light;
    font-size: 20px;
  }

  @include breakpoint(mobile) {
    padding: 0 20px;
  }
}
</style>
