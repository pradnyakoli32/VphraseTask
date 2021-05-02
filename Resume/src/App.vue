<template>
<v-fragment>
<Navbar />
<Section />

<router-view />
</v-fragment>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Section from './components/Section.vue'
export default {

  components: {
    Navbar,
    Section

  }
}
</script>
<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 60rem;
   margin: 0 auto;
  color:palevioletred;

}
</style>
