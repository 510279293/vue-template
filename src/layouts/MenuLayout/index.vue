<template>
  <div>
    <a-menu
     mode="inline"
     :open-keys="openKeys"
     :defaultSelectedKeys="[$route.path]"
     style="width: 256px"
     @click="meunClick"
     @openChange="onOpenChange">
     <template v-for="(mitem,index) in MenusRouteConfig">
        <a-sub-menu
        v-if="!mitem.hidden && mitem.children"
        :key="mitem.path">
          <span slot="title">
            <a-icon type="mail" />
            <span>{{mitem.menuName}}</span>
          </span>
          <a-menu-item
           v-for="(sitem,idx) in mitem.children"
           :key="sitem.path" >
            {{sitem.menuName}}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item
         v-else
         :key="mitem.path">
            {{mitem.menuName}}
          </a-menu-item>
     </template>
    </a-menu>
  </div>
</template>
<script>
import MenusRouteConfig from '@/config/menu';
export default {
  name: 'MenuLayout',
  data() {
    return {
      openKeys: [''],
      MenusRouteConfig,
    };
  },
  mounted(){
    console.log(this.$route)
  },
  methods: {
    onOpenChange(openKeys) {
      const rootKeys = MenusRouteConfig.map(v => v.path);
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (rootKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    meunClick(e) {
      this.$router.push(e.key)
    }
  },
};
</script>
<style lang="less" scoped>

</style>
