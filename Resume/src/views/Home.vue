/* eslint-disable no-undef */
/* eslint-disable no-self-compare */
/* eslint-disable no-self-compare */
/* eslint-disable no-self-compare */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-compare */
/* eslint-disable no-return-assign */
/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable space-before-blocks */
<template>
<div class ="home">
   <div v-if="projects.length">
        <div v-for="project in projects" :key="project.id">
            <SingleProject :project="project" @delete="handleDelete" @complete="handlecomplete"/>

        </div>
   </div>
</div>
</template>
<script>
import SingleProject from '../components/SingleProject'
export default{
  name: 'Home',
  // eslint-disable-next-line standard/object-curly-even-spacing
  components: { SingleProject},
  data () {
    return {
      projects: []
    }
  },
  // data mounted to the dom
  mounted () {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      // eslint-disable-next-line no-return-assign
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete (id) {
      this.projects = this.projects.filter((_projects) => {
        // eslint-disable-next-line no-undef
        return project.id !== id
      })

    // eslint-disable-next-line indent
    }

  }

}
</script>
