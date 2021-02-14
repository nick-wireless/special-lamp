<template>
  <h1 class=" pl-4 text-lg ">{{ msg }}</h1>
  <div data-test="keyPackages" class="text-sm" v-for="keyPackage in keyPackageNames" > 
    <ul class="ml-8 p-2"> {{ keyPackage }} </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup() {
    const keyPackageNames: String[] = ['Vite', 'Vue3.0', 'TS', 'Jest', 'Tailwind']

    return { keyPackageNames }
  }

})
</script>

<style scoped>

</style>