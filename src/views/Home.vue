<template>
  <p>Welcome to rickprentice.com!</p> 
  <p>This site serves as my personal portfolio as I continue to grow as a 
    software developer. It will provide me a space to play as well as highlight my projects to-date. I will
    discuss what I learned from each project and what I did to improve upon the first release of each.
  </p>
  <h3>Current Projects</h3>
  <p>Below is a list of project listed from most recent to earliest. As projects are added, older projects will be moved to the achieve in 
    effort to highlight the most current development projects.
  </p>
  <a href="" class="projectLink">Medical Scheduling App</a>
  <p>Latest Project. Patient and Doctor user types to schdedule appointments, set availablility, and leave reviews</p>
  <a href="" class="projectLink">Tenmo Cash App</a>
  <p>A Venmo style console app. Register users, adjust balance, & send money to other users.</p>
  <router-link :to="{ name: 'vending_machine' }" class="projectLink">Vending Machine</router-link>
  <p>Import vending items from text file into console application. Keep track of inventory, feed money, and calculate transactions.</p>
</template>

<style scoped>

p {
    width:75%;
    text-align: justify;
}
.projectLink {
    display: block;
    color: #2c3e50;
}

</style>>