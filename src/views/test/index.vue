<template>
  <section>
    {{ msg+name }}
    <hello-world />
  </section>
</template>
<script>
import {ref} from 'vue'
import {postApi, getApi} from '@/services/example'
export default {
  name: 'test',
  setup(){
     const msg = ref('hello')
     const name = ref('zyy')
     postApi()
     getApi()
     return {
       msg,
       name
     }
  }
}
</script>
<style lang="less" scoped>

</style>