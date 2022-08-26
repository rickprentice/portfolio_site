<template>
    <div id="nav">

        <a id="navLinesBox" href="#" v-on:click="isShown = !isShown">
            <img src="../../public/navLines.png" id="navLines">
        </a>

        <div id="dropDownNav" v-if="isShown">
            <span class="navItem">
                <router-link :to="{ name : 'Home' }">Home</router-link>
            </span>
            <span class="navItem">
                <router-link :to="{ name : 'vending_machine' }">Vending Machine</router-link>
            </span>
            <span class="navItem">
                <router-link :to="{ name : 'tenmo' }">TEnmo</router-link>
            </span>
            <span class="navItem">
                <router-link :to="{ name : 'med_scheduling' }">Medical Scheduling</router-link>
            </span>
        </div>

    </div>
</template>

<script>
export default {
    name: "nav-component",
    data() {
        return {
            isShown: false
        }
    }
}
</script>


<style scoped>

#nav {
    position: fixed;
    top: 0;
    left: 0;
    text-align:left;
    padding-left:5px;
}
#navLinesBox {
    display: block;
    height: 40px;
    width: 40px;
}
#navLines {
    width: 40px;
}

#dropDownNav {
    
}
.navItem {
    display: block;
    width:200px;
    height:50px;
    line-height:50px;
    background: rgba(255, 255, 255, 0.9);
    border:1px solid lightgray;
    text-align: center;
    vertical-align: middle;
}
.navItem:hover {
    background: rgba(225, 225, 225, 0.9);
    text-decoration: underline;
}
</style>