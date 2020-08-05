<template>
  <div class="hello">
    {{ msg }}<br>
    {{ name + 'ts-vue 初尝试' }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class HelloWorld extends Vue{
  msg: any = null
  firstName: String = 'zeng'
  lastName: String = 'qingsen'

  mounted () {
    this.msg = 'hello';
  }
  get name() {
    return this.firstName + '  ' + this.lastName;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
