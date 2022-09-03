<template>
  <h1>About Me</h1>
  <p>Who - <strong>Rick Prentice</strong></p>
  <p>Where - <strong>Northeast Ohio</strong></p>
  <p>What - <strong>Entry-level Full Stack Software Developer</strong></p>
  <p>After 20 years in retail management I am changing careers to software development. My passion to learn,
    my adaptability, and my personal interest in computers and tech is all culminating in this endeavor. As
    mentioned in the home page intro, I have built this website to act as a portfolio and as a medium to test
    and learn new techniques.
  </p>
  <p>I have added links to my social media pages below, as well as a copy of my current resume. Please reach 
    out to me in any way you wish. I am always open to new learning opportunities and to connect with more 
    people as I grow and develop towards this new career path.
  </p>
  <p>Thanks for reading!</p>
  
  <h3>Connect With Me</h3>
  <div id="socialMediaButtons">
  <div class="mediaLinks"><a href="https://www.linkedin.com/in/rick-prentice/">
    <img src="../../public/logos/linkedIn.png" alt="" />LinkedIn
  </a></div>
  
  <div class="mediaLinks"><a href="https://www.facebook.com/rick.prentice">
    <img src="../../public/logos/facebook.png" alt="" />Facebook
  </a></div>
  
  <p class="mediaLinks"><a href="https://github.com/rickprentice">
    <img src="../../public/logos/github.png" alt="" />GitHub
  </a></p>
  
  <div class="mediaLinks"><a :href="`${publicPath}resume.pdf`" download="richard_prentice_resume.pdf">
    <img src="../../public/logos/pdf.png" alt="" />Download Resume
  </a></div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>


<style scoped>
#socialMediaButtons {
  width:70%;
}
.mediaLinks {
  display: inline-block;
  margin: 10px;
  padding:10px 20px;
  width:40%;
  border:1px solid rgb(185, 185, 185);
  border-radius: 20px;
}
.mediaLinks:hover {
  background-color: rgba(205, 205, 205, 0.5);
}
.mediaLinks img {
  height:40px;
  line-height: 40px;
  margin-right:20px;
  vertical-align: middle;
}
.mediaLinks a {
  line-height: 40px;
  vertical-align: middle;
}
p {
  width:70%;
  text-align: justify;
}
</style>