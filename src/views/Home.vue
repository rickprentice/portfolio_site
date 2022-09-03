<template>
  <h2>Welcome to rickprentice.com!</h2>
  <p id="attention">Site under construction - work in progress</p>
  <p>This site serves as my personal portfolio as I continue to grow as a 
    software developer. It will provide me a space to play as well as highlight my projects to-date. I will
    discuss what I learned from each project and what I have done to improve upon the first release of each. 
    Please be aware that this site will be under ongoing updates and will be updated regularly.
  </p>
  <h3>Current Projects</h3>
  <p>Below is a list of project listed from most recent. As projects are added, older projects will be moved to 
    an archive in effort to highlight the most current development projects.
  </p>
  <router-link :to="{ name: 'med_scheduling' }" class="projectLink">Medical Scheduling App</router-link>
  <p>Latest Project. Patient and Doctor user roles to schedule appointments, set availability, and leave reviews</p>
  <router-link :to="{ name: 'tenmo' }" class="projectLink">Tenmo Cash App</router-link>
  <p>A Venmo style console app. Register users, adjust balance, & send money to other users.</p>
  <router-link :to="{ name: 'vending_machine' }" class="projectLink">Vending Machine</router-link>
  <p>Import vending items from text file into console application. Keep track of inventory, feed money, and calculate transactions.</p>
</template>

<style scoped>

h2 {
    
}
p {
    width:75%;
    text-align: justify;
}
.projectLink {
    display: block;
    color: #2c3e50;
}
#attention {
    /* text-align: center; */
    font-weight: bold;
}

</style>>