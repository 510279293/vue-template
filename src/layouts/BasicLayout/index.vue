<template>
  <div class="main">
    <menu-layout />
    <router-view />
  </div>
</template>
<script>
import MenuLayout from '../MenuLayout/index';

export default {
    name: 'basic-layout',
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