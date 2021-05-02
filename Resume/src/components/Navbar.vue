<template>
    <nav class="main-nav">
    <div class="row">
  <div class="column" style="background-color:#48485A" >
      <h>Email:abc@gmail.com</h>

  </div>
  <div class="column" style="background-color:#48485A;">
  <h>Phone:1234567890</h>
  </div>
  <div class="column" style="background-color:#48485A;">
    <h>Github:johndeo</h>
  </div>
   <div class="column" style="background-color:#48485A;">
    <h>Twitter:johndeo10</h>
  </div>
</div>
        <router-link :to="{name:'Home'}">
        <p1>Pradnya koli</p1><br>
       <p>
        Address:Ulhasnagar<br>
        Objective: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </router-link>

 </nav>

</template>
<script>
export default{
  data: () => {
    return {
      moblieView: false,
      showNav: false
    }
  }

}

</script>
<style scoped>
.main-nav{
    margin-left: 300px;
    margin-right:300px;
     background:  #48485A;
     border-radius: 15px;
     padding: 5px;

    border-left: 5px solid #48485A;
    border-right: 5px solid #48485A;
}
.main-nav a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color:white;
    font-size: 30px;
}
a.router-link-active{
    border-bottom:2px solid #00ce89;
    padding-bottom: 4px;
}
.img{
    height:200px;
    margin: 0;
    box-sizing: border-box;
    height:100vh;
    width:100%

}
.profile-pic{
    height:100px;
    width:100px;

    margin-top:10px;
    margin-left: 800px;
    margin-right: 300px;
    transform:translate(-50%,50%);
    border-radius: hidden;
    overflow: hidden;
    border: 1px solid grey;
}

* {
  box-sizing: border-box;
}

/* Create three equal columns that floats next to each other */
.column {
  float: right;
  width: 25%;
  padding: 10px;
  height: 50px;
  background: #48485A; /* Should be removed. Only for demonstration <div class ="profile-pic">
            <img src="peggi.jpg">
            <input type="file" id="file">
            <label for="file" id="uploadbtn">choose file</label>

        </div>*/
}
 /* Should be removed. Only for demonstration <div class ="profile-pic">
            <img src="peggi.jpg">
            <input type="file" id="file">
            <label for="file" id="uploadbtn">choose file</label>

        </div>*/

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.column h{
    font-style: bold;
    color:white;
    font-family: "Times New Roman", Times, serif;
font-size: 15px;

}
.column p{
  font-style: bold;
    color:white;
    font-family: "Times New Roman", Times, serif;
font-size: 15px;
}
</style>
