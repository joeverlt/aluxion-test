<template>
  <div class="col-12">
    <div class="flex align-items-center justify-content-between py-2 px-4">
      <div>
        <h3 class="my-2">
          {{ item.name }}
        </h3>
        <p class="my-2">
          {{ item.description }}
        </p>
        <p class="my-2">
          <a :href="item.url">github</a> -
          <a :href="item.homepageUrl">homepage</a>
        </p>
      </div>
      <p class="m-0 flex align-items-center justify-content-between">
        <i class="pi pi-star mr-2" />
        {{ item.stargazerCount }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps(['item'])
</script>
