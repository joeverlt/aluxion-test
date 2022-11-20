<template>
  <div class="grid grid-nogutter">
    <div class="col-6" style="text-align: left">
      <Dropdown
        v-model="sortKey"
        :options="sortOptions"
        optionLabel="label"
        placeholder="Ordenar por ranking"
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
  { label: 'De mayor a menor', value: '!stargazerCount' },
  { label: 'De menor a mayor', value: 'stargazerCount' }
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
