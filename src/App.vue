<template>
    <Hello msg="Hello these are the Key Packages of this Project:" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hello from './components/Hello.vue'

export default defineComponent({
  name: 'App',
  components: {
    Hello
  }
})
</script>

<style>
  ul {
    list-style: revert;
    list-style-position: inside;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: revert;
    margin: 10px 0 !important;
  }

  pre {
    margin: 10px 0 !important;
  }

  p {
    margin: 10px 0;
  }
</style>