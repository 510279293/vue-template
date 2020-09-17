<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'app',
  components: {
  },
  data(){
    return{
      locale: zhCN,
    }
  },
  methods: {
      api(){
        // alert(233)
      }
  }
}
</script>

<style lang="less">
#app {
  color: red;
}
</style>
