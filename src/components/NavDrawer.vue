<template>
    <div id="navDrawer" class="closeDrawer">
        
        <div id="boxContain">

            <div id="box1">
                <span class="navItem borderThis">
                    <router-link :to="{ name : 'Home' }">Home</router-link>
                </span>
            </div>

            <div id="box2">
                <span class="navTitle"><strong>Projects: </strong></span>
                <span class="navItem">
                    <router-link :to="{ name : 'vending_machine' }">Vending Machine</router-link>
                </span>
                <span class="navItem borderThis">
                    <router-link :to="{ name : 'tenmo' }">TEnmo</router-link>
                </span>
                <span class="navItem">
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
    grid-template-columns: 150px 1fr;
    gap:15px;
}
.navItem {
    display:inline-block;
    vertical-align: middle;
    height:90px;
}
/* .borderThis {
    border-left: 1px solid rgb(210, 210, 210);
    border-right: 1px solid rgb(210, 210, 210);
} */
.navTitle {
    height:100%;
}
.navItem a {
    display:block;
    color:rgb(85, 85, 85);
    text-decoration: none;
    padding:33px 20px;
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
</style>