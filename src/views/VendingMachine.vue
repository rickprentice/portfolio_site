<template>
    <div id="vendingMachine">
        <vending-machine />
    </div>
</template>

<script>
import VendingMachine from '../components/VendingMachine.vue'

export default {
    components: {
        VendingMachine
    }
}
</script>

<style scoped>

#vendingMachine {
    max-width:700px;
}

</style>
