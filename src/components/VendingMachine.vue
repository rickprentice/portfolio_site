<template>
    <h2>Vending Machine</h2>
    <img src="../../public/project_images/vending_machine/consoleMenu.png" alt="" class="projectImage" />
    <p>This was my very first project during my Bootcamp at Tech Elevator. With a team of 2, we built all 
        the functionality requested in Java in less than a week. It reads from a text file that contains the 
        item name, slot number, cost, and item type (see image below), and every item is auto assigned
        an availability of 5 at app start. The program will allow you to feed "money" into it in whole dollar increments,
        view inventory, make a purchase, and dispense change. It would also keep track of the inventory until the application
        was reset and log every transaction to a file.
    </p>
    <label>Text File Format</label>
    <img src="../../public/project_images/vending_machine/textFile.png" alt="" class="projectImage" />
    <!-- <label>Vending Item Class</label>
    <img src="../../public/project_images/vending_machine/constructor.png" alt="" class="projectImage" /> -->
    <label>Import Text File</label>
    <img src="../../public/project_images/vending_machine/readFromFile.png" alt="" class="projectImage" />
    <p>This was the first time I was seeing a full project built. Granted we were provided the basic skeleton, the bigger 
        picture view was essential to my understanding and brought all these, until now, separate classes and
        functions together. Within 5 days, me and my fellow teammate split up the classes and built the functionality
        that was required. I am impressed on what we were able to accomplish in such a short time within 3 weeks
        of starting the program. However, as the cohort continued and my understanding grew, there are some areas
        that I wished to go back and address and improve upon my approach.
    </p>
    <p>
        My main focus for improvement was that the original attempt was not object oriented in certain areas. Especially
        in the "Bank" class that I felt we rushed to finish as to make the assignment deadline. As shown below 
        there were a couple of functions where we recreated the entire inventory just to gain access to an items
        price. 
    </p>
    <label>Recreated inventory multiple times within the Bank class</label>
    <img src="../../public/project_images/vending_machine/bankClassProblems.png" alt="" class="projectImage" />
    <p>I realized that we already had access to the price we needed by an already existing method in the inventory
        class. This allowed me to shorten the work of the function to only Bank related abilities. I also removed
        the check for available funds method, as it was unnecessary based on where it was being used. You can see the 
        update in the screenshot below. Being able to simplify the code, in this case, helps readability.
    </p>
    <label>Bank class functions after fix</label>
    <img src="../../public/project_images/vending_machine/bankClassAfter.png" alt="" class="projectImage" />
    <p>It was a helpful lesson on how access works and again, connecting all the smaller pieces together for the 
        bigger picture.
    </p>
    <p id="lastP">
        The software and languages that I learned to use for this project are:
        <ul>
            <li>Java 11</li>
            <li>IntelliJ IDEA CE</li>
        </ul>
    </p>
</template>

<style scoped>
p {
    text-align: justify;
    margin:40px 0;
}
#lastP {
    margin-bottom:0;
}
.projectImage {
    max-width:100%;
    height:auto;
}
label {
    font-style: italic;
}
</style>