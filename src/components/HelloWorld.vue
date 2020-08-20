<template>
  <div class="hello">
    {{ msg }}<br>
    {{ name + 'ts-vue 初尝试' }}
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'hello-world',
  setup(){
     const msg = ref('hello')
     const name = ref('zyy')
     return {
       msg,
       name
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
