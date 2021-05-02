/* eslint-disable standard/object-curly-even-spacing */

<template>
<div class=container>
    <div class="project">
        <div class="actions">
            <h3 @click ="showDetails= !showDetails">{{project.title}}
            </h3>
            <div class ="icons">
                <router-link :to ="{name:'EditProject', params:{id:project.id}}"><span class=""><dd></dd></span></router-link>
                <span @click ="toggleComplete" class=""></span>

                <span @click ="deleteProject" class="material-icons">delete</span>
            </div>
        </div>
        <div v-if="showDetails" class="details">
            <p>{{project.details}}</p>
        </div>
    </div>

</div>
 <!--
          {{ todo.text }}
        -->

</template>
<script>

export default {
  props: ['project'],
  data () {
    return {
      showDetails: false, // if this become true show details in t
      // template there is a if
      uri: 'http://localhost:3000/projects/' + this.project.id
    }
  },
  methods: {
    // eslint-disable-next-line space-before-blocks
    deleteProject (){
      fetch(this.uri, {
        method: 'DELETE'
      }).then(() => this.$emit('delete', this.project.id))
        .catch((err) => console.log(err))
    },
    toggleComplete () {
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        // eslint-disable-next-line standard/object-curly-even-spacing
        body: JSON.stringify({complete: !this.project.complete }).then(() => {
          this.$emit('complete', this.project.id)
        }).catch((err) => console.log(err))
      })
    }
  }
}
</script>
<style>
.container{
     margin-top: 25px;

}
.project{

    margin: 15px auto;
    margin-left: 300px;
    margin-right: 300px;
    background:#F3F3F3;
    padding:10px  20px;

    border-radius: 15px;

    border-left: 5px solid #48485A;
    border-right: 5px solid #48485A;
}
h3{
    cursor:pointer;
    font-family: "Times New Roman", Times, serif;
}
p{
font-family: "Times New Roman", Times, serif;
font-size: 15px;
}
.actions{
    display:flex;
    justify-content: space-between;
    align-content: center;
}
.material-icons{
    font-size : 24px;
    margin-left:10px;
    color:#bbb;
    cursor:pointer;
}
.material-icons:hover{
    color:#777;
}
.content{
    background: no-repeat;
}
</style>
