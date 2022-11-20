<template>
  <div class="grid grid-nogutter">
    <div class="col-6" style="text-align: left">
      <Dropdown
        v-model="sortKey"
        :options="sortOptions"
        optionLabel="label"
        placeholder="Sort by rank"
        @change="onSortChange($event)"
      />
    </div>
  </div>
</template>

<script setup>
defineProps(['order', 'field'])
const emit = defineEmits(['update:order', 'update:field'])

const sortKey = ref()
const sortOptions = [
  { label: 'Hight to Low', value: '!stargazerCount' },
  { label: 'Low to High', value: 'stargazerCount' }
]

const onSortChange = (event) => {
  const value = event.value.value
  const sortValue = event.value

  if (value.indexOf('!') === 0) {
    emit('update:order', -1)
    emit('update:field', value.substring(1, value.length))
    sortKey.value = sortValue
  } else {
    emit('update:order', 1)
    emit('update:field', value)
    sortKey.value = sortValue
  }
}
</script>
