<template>
    <div class="about">
<h2 style="text-align:center">About</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/332327113_524614239798347_7841955617351907554_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFLtWrszV9H-VILZvbY6GQvZRCHuo5PkQFlEIe6jk-RAU5lAYaamqY49ECCued3TQHg2osCViuSgmK8rJoxvWeW&_nc_ohc=5DcZjqag8RMAX_UvKTM&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfBSMThylMQXC3NobkxGxW3wBBwY5_zeHs8Fp-zQnU__tg&oe=6449DD40" alt="Patrick" style="width:100%">
      <div class="container">
        <h2>Patrick Perez</h2>
        <p class="title">Web Developer</p>
        <p>I am a second year college student at Holy Angel University taking degree of Bachelor of Science in Information Technology Specialized in Web Development</p>
        <p>pmperez1@student.hau.edu.ph</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'about',
    data () {
        return{
            title: 'About'
        }
    }
}
</script>
<style coped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
  align-items: center;
  margin-left: 500px;
  margin-top: -20px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 25px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>