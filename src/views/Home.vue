<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Demo/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Demo from '@/components/demo.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Demo
  }
}
</script>
