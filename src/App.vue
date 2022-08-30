<template>
  
  <div id="nav">
      <navigation></navigation>
  </div>

  <a id="navLinesBox" href="#" v-on:click="toggleNav()">
    <img src="../public/navLines.png" id="navLines">
  </a>

  <h1 id="headTitle">rickprentice.com</h1>
  <div id="main_container">
    <router-view />

  </div>
</template>

<script>
import Navigation from './components/NavDrawer.vue';

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      isShown: true
    }
  },
  methods: {
    toggleNav() {
      let nav = document.querySelector('#navDrawer');
      let navIsClosed = !nav.classList.contains('openDrawer');
      if (navIsClosed) {
        nav.classList.remove('closeDrawer');
        nav.classList.add('openDrawer');
      } 
      else {
        nav.classList.remove('openDrawer');
        nav.classList.add('closeDrawer');
      }
    },
    pic() {
      // const imageArray = [
      //   '../public/background/yosemite.jpg',
      //   '../public/background/goldengate.jpg', 
      //   '../public/background/hotel.jpg', 
      //   '../public/background/bird.jpg', 
      //   '../public/background/blades.jpg'
      //   ];
      // document.body.style.backgroundImage = "url(" + imageArray[Math.floor(Math.random() * imageArray.length)] + ")";
    }
  },
  created() {
    this.pic();
  }
}
</script>

<style>
html {
    height: 100%;
}
body {
  margin:0;
  height: 100%;
  background: rgb(7,1,107);
  background: linear-gradient(0deg, rgba(7,1,107,1) 0%, rgba(9,9,121,1) 35%, rgba(0,169,255,1) 100%);
  background-image: url("../public/background/hotel.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-bottom:50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:auto;
  margin-bottom:50px;
  
}
#navLinesBox {
    position: fixed;
    height: 40px;
    width: 40px;
    top: 0;
    left: 0;
    text-align:left;
    padding-left:5px;
}
#navLines {
    width: 40px;
}
#headTitle {
  color:rgba(255, 255, 255, 0.8);
  text-shadow: 2px 2px rgba(77, 77, 77, 0.8);
  width:70%;
  margin:auto;
  padding:30px 0;
}
#main_container {
  width:70%;
  margin:auto;
  background: rgba(255, 255, 255, 0.7);
  border:1px solid rgba(112, 128, 144, 0.418); 
  border-radius: 10px;
  padding: 20px 40px;
  max-width:100%
}
#main_container a {
  color: #2c3e50;
  font-weight: bold;
}
#main_container a:hover {
  text-decoration: none;
}
</style>
