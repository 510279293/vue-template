<template>
  <div class="hello">
    {{ msg }}<br>
    {{ name + 'ts-vue 初尝试' }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'hello-world',
  data(){
    return {
      msg: 'hello',
      name: 'zyy-'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
