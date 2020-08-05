<template>
  <div class="hello">
    {{ msg }}<br>
    hello globalComponent
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  props: {
    msg: {
      type: String,
      default: ''
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
