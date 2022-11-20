<template>
  <form @submit.prevent="handleSubmit(!v$.$invalid)" class="grid p-4">
    <div class="col-12 md:col-4 mt-3">
      <div class="p-float-label">
        <InputText
          id="topic"
          v-model="v$.topic.$model"
          :class="[
            { 'p-invalid': v$.topic.$invalid && state.submitted },
            'w-full'
          ]"
          aria-describedby="topic-error"
        />
        <label
          for="topic"
          :class="{ 'p-error': v$.topic.$invalid && state.submitted }"
        >
          Topic *
        </label>
      </div>
    </div>
    <div class="col-12 md:col-4 mt-3">
      <div class="p-float-label">
        <InputNumber
          id="stars"
          v-model="v$.stars.$model"
          :class="[
            { 'p-invalid': v$.stars.$invalid && state.submitted },
            'w-full'
          ]"
          aria-describedby="stars-error"
        />
        <label
          for="stars"
          :class="{ 'p-error': v$.stars.$invalid && state.submitted }"
        >
          stars *
        </label>
      </div>
    </div>
    <div class="col-12 md:col-4 text-right mt-3">
      <Button label="Buscar" type="submit" class="search-button" />
    </div>
  </form>
</template>

<script setup>
import { numeric, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import query from '~~/queries/search.gql'

const state = reactive({
  topic: '',
  stars: null,
  loading: false,
  submitted: false
})
const rules = {
  topic: { required },
  stars: { required, numeric }
}
const v$ = useVuelidate(rules, state)
const repositories = useRepositories()

const handleSubmit = async (isValid) => {
  state.submitted = true
  if (!isValid) return
  const variables = {
    query: `topic:${state.topic} stars:>=${state.stars}`,
    last: 10
  }
  const { data } = await useAsyncQuery(query, variables)
  const { edges } = data.value.search
  repositories.value = edges.map((item) => item.repository)
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins';
@import '@/assets/scss/colors';

.search-button {
  @include breakpoint(mobile) {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
