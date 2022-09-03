<template>
    <div id="main">
        <h2>Medical Scheduling</h2>
        <p>The final capstone project, for the bootcamp I attended, was to create a scheduling application that
            doctors and patients could use to book and manage their appointments. Patients could leave reviews 
            for doctors, and doctors could reply. The app also had registering and login capabilities. In the 
            current version, doctors have the ability to edit the information of the office they belong to, and
            switch which office they belong to themselves. However, I agree that an admin role should have been
            established to handle those edits.
        </p>
        <img src="../../public/project_images/med_schedule/homePage.png" alt="" />
        <p>As with my previous applications, the server side of our program was using Java with Spring Boot and 
            Restful APIs. We had a database in PostgreSQL and our client side was setup using Vue.js with HTML and
            CSS. This time, with a group of 4, we had a week and a half to complete a functional demo with a friendly
            UI.
        </p>
        <label>Register a new user</label>
        <img src="../../public/project_images/med_schedule/register.png" alt="" />
        <p>There were either of two roles established upon registering for the application. The frontend would 
            check these roles and display the according navigation links in the sidebar. Below you will be able 
            to see the difference between the appointments screens for each role. The doctor's were also notified
            with any new appointments with bolder styles for those rows. Once it was marked as seen, the style would
            drop off.
        </p>
        <label>Patient's appointments</label>
        <img src="../../public/project_images/med_schedule/patientAppt.png" alt="" />
        <label>Doctor's appointments</label>
        <img src="../../public/project_images/med_schedule/doctorAppt.png" alt="" />
        <p>
            Doctors could also set their schedule on a day of the week basis (<span class="curly">All Mondays b/w these times, all
            Tuesdays b/w these times, etc.</span>). If given more time, I would like to revisit this and discover a 
            more flexible system that provides for more options.  
        </p>
        <label>Doctor setting their availability</label>
        <img src="../../public/project_images/med_schedule/doctorAvail.png" alt="" />
        <p>One of the main required functions was booking an appointment. This was the first piece that I built for the front-end,
            as I assumed it would be the most complicated and was the primary function of the application. (<span class="curly">
            I will take a moment to admit that aside from the CSS, the entirety of the front-end code was done myself. My 
            team was extremely thrilled to have me take the lead here, as they were back-end or data focused. I used this 
            opportunity to stand out and make sure it was completed on time, and educated my team on some of the areas they struggled
            with in regards to Vue, vanilla Javascript, CSS and HTML forms.</span>)
        </p>
        <p>The form itself requires users to select the options in order, and will prevent them from skipping any options. For instance,
            they will not be able to select a doctor until they select an office. Or they cannot see available day or times until they 
            pick the doctor. The availability is pulled dynamically from the database and will eliminate days or times if the doctor has
            not set their schedule for that day, or already has an appointment scheduled for that date and time. The only optional piece
            is the final textbox for the "Purpose of Visit".
        </p>
        <label>Book Appointment Form</label>
        <img src="../../public/project_images/med_schedule/bookAppt1.png" alt="" />
        <!-- <label>Book Appointment (cont.)</label> -->
        <img src="../../public/project_images/med_schedule/bookAppt2.png" alt="" />
        <p>
            We did utilize a calendar plug-in for Vue called v-calendar that was very helpful to eliminate the selectability
            of dates based on the doctors schedule. The overall design was based on a few stylesheet templates we found online, 
            but we ended up just using those for inspiration and coded it all by hand. Our teammate, Joy, created the logos and
            graphics we used in the header and sidebar. I would like to revisit some of the design elements and change some of 
            the color choices, which I may still do, but with my focus primarily on the function of the front, our team delegated 
            this work primarily to one member and made major decisions on design to team feedback.
        </p>
        <label>Full Page Application Screenshot</label>
        <img src="../../public/project_images/med_schedule/homePageFull.png" alt="" />
    </div>
</template>

<style scoped>

#main {
    width:700px;
}

p {
    text-align: justify;
}

.curly {
    font-size: 14px;
}

label {
    font-size: 12px;
    font-style: italic;
}

img {
    max-width: 100%;
    display: block;
    margin-bottom: 30px;
}

</style>