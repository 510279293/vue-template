<template>
  <section>
    {{ msg+name }}
    <hello-world />
  </section>
</template>
<script>
import {ref} from 'vue'
export default {
  name: 'test',
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
<style lang="less" scoped>

</style>