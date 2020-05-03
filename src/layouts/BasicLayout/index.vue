<template>
    <div class="main">
        <MenuLayout />
        <router-view />
    </div>
</template>
<script>
import MenuLayout from '../MenuLayout/index';

export default {
    name: 'BasicLayout',
    components: {
        MenuLayout,
    },
    data(){
        return{

        }
    },
    methods: {
        
    }
}
</script>
<style lang="less" scoped>
.main{
    display: flex;
}
</style>