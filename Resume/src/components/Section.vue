<template>
<section class="content">

        <h3>EDUCATION
        </h3>
        <p>  <a href="https://www.somaiya.edu">Kj somaiya college of engineerin</a><br>
        2018-2021<br>
        <a href="https://sndt.ac.in/academics/conducted-colleges/pvp">Premlila vithaldas polytechnic</a><br>
        2014-2018<br>
        R.G.S English High School<br>
        2014
        </p>
        <h3>TECHNICAL SKILLS</h3>
        <p>Programming Languages: C, C++, Python.<br>
        Web: HTML, CSS, JavaScript, react.js, node.js.<br>
        Database: My-SQL. <br>Software: Tableau(basic)</p>

<h><router-link :to="{name: 'AddProject'}">Add Experience</router-link></h>
    </section>

</template>
<style scoped>
.content{
 margin: 15px auto;
    margin-left: 300px;
    margin-right: 300px;
    background:#F3F3F3;
    padding:10px  20px;

    border-radius: 15px;

    border-left: 5px solid #48485A;
    border-right: 5px solid #48485A;
}
.content h3{
display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color:black;
    font-size: 18.75px;
   font-family: "Times New Roman", Times, serif;
}
.content p{
    font-family: "Times New Roman", Times, serif;
    font-size: 15px;

}
</style>
