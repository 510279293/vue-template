<template>
  <div class="main">
    <menu-layout />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MenuLayout from '../MenuLayout/index.vue';
@Options({
  components: {
    MenuLayout
  },
})
export default class BasicLayout extends Vue {

}
</script>
<style lang="less" scoped>
.main{
    display: flex;
}
</style>