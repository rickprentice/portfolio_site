<template>
    <div>
        <h2>TEnmo</h2>
        <p>TEnmo is a Venmo style application that wrapped up the 2nd module at the Tech Elevator Bootcamp 
            I attended. This was my first attempt at making an app that connects a client side and server 
            side. We wrote both sides in Java using Spring Boot and Restful APIs. A Postgres database 
            stored all user, bank, and transfer information and the client side ran in the console.     
        </p>
        <img src="../../public/project_images/tenmo/login.png" alt="" />
        <p>My team of 3 completed our assigned project in the same time frame as the first class project, 
            the <router-link :to="{ name: 'vending_machine'}">Vending Machine</router-link> application. The program
            allows new users to register and handle login of existing users. Once logged in users can see a list of other
            users and select who to send funds to. A user can send funds to another user and the transfer is logged
            into the database.
        </p>
        <p>One of the biggest take-aways from this project was the process of creating objects from the various
            table data. Thinking through the various processes and to help with long term scalability and future proofing 
            was a learning process. As we developed our application, we found that we were making changes to our objects
            to contain more data to fulfill functional requirements. Spending more time on the data design of this app 
            would have been helpful, but was a lesson that I have carried forward to other projects. 
        </p>
        <p>
        The software and languages that I learned to use for this project are:
        <ul>
            <li>Java 11</li>
            <li>Spring Boot framework</li>
            <li>RESTful APIs</li>
            <li>IntelliJ IDEA CE</li>
            <li>PostgreSQL</li>
            <li>DBVisualizer</li>
            <li>Postman</li>
        </ul>
    </p>

    </div>
</template>

<style scoped>



</style>