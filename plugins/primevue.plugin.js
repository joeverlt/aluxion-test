import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Ripple from 'primevue/ripple'
import Skeleton from 'primevue/skeleton'
import Paginator from 'primevue/paginator'
import DataView from 'primevue/dataview'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.directive('ripple', Ripple)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('InputNumber', InputNumber)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  nuxtApp.vueApp.component('Skeleton', Skeleton)
  nuxtApp.vueApp.component('Paginator', Paginator)
  nuxtApp.vueApp.component('DataView', DataView)
})
