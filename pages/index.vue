<template>
  <div class="p-0 shadow-2 p-card mt-4 mb-6">
    <SearchForm />

    <DataView
      :value="repositories"
      :layout="layout"
      :paginator="false"
      :rows="10"
      :sortOrder="sortOrder"
      :sortField="sortField"
    >
      <template #header>
        <DataviewHeader v-model:order="sortOrder" v-model:field="sortField" />
      </template>

      <template #list="slotProps">
        <ListItem :item="slotProps.data" />
      </template>
    </DataView>
  </div>
</template>

<script setup>
import SearchForm from '~~/components/SearchForm'
const repositories = useRepositories()
const layout = ref('list')
const sortOrder = ref()
const sortField = ref()
</script>
