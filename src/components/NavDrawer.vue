<template>
    <div id="navDrawer" class="closeDrawer">
        
        <div id="boxContain">

            <div id="box1">
                <span class="navItem mainNav">
                    <router-link :to="{ name : 'Home' }">Home</router-link>
                </span>
            </div>

            <div id="box2">
                <span class="navItem mainNav">
                    <router-link :to="{ name : 'About' }">About Me</router-link>
                </span>
            </div>

            <div id="box3">
                <span class="navTitle"><strong>Projects: </strong></span>
                <span class="navItem projectNav">
                    <router-link :to="{ name : 'vending_machine' }">Vending Machine</router-link>
                </span>
                <span class="navItem projectNav">
                    <router-link :to="{ name : 'tenmo' }">TEnmo</router-link>
                </span>
                <span class="navItem projectNav">
                    <router-link :to="{ name : 'med_scheduling' }">Medical Scheduling</router-link>
                </span>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "nav-drawer",
    data() {
        return {
            isShown: true
        }
    }
}
</script>

<style>
#navDrawer {
    width:100%;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
}
.openDrawer {
    display:block;
    transform: translateY(0);
    transition: all ease-in-out 1s;
}
.closeDrawer {
    position: absolute;
    transform: translateY(-200px);
    transition: all ease-in-out 1s;
}
#boxContain {
    width:70%;
    margin:auto;
    display: grid;
    grid-template-columns: 100px 120px 1fr;
    gap:15px;
}
.navItem {
    display:inline-block;
    text-align: center;
    vertical-align: middle;
    height:90px;
}
.mainNav {
    width:100%;
}
.projectNav {
    
    padding:0 20px;
}
/* .borderThis {
    border-left: 1px solid rgb(210, 210, 210);
    border-right: 1px solid rgb(210, 210, 210);
} */
.navTitle {
    height:100%;
}
.navItem a {
    display:inline-block;
    color:rgb(85, 85, 85);
    text-decoration: none;
    line-height: 20px;
    padding:33px 0;
    margin:auto;
    width:100%;
    height:50px;
}
.navItem a:hover {
    text-decoration: underline;
}
.navItem:hover {
    background-color: rgba(224, 224, 224, 0.8);
}
#box3 {
    margin-left:20px;
}
</style>