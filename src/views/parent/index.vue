<template>
  <div>
    <h1>我是父组件</h1>
    <hr />
    <children @children="children" :login='login'></children>
    <hr />
    <eventbus></eventbus>
  </div>
</template>

<script>
import Children from '@/views/children'
import Eventbus from '@/views/EventBus'
export default {
  data() {
    return {
      login:'我是父组件传给子组件'
    }
  },
  methods:{
    children(data){
      console.log(data);
    }
  },
  components:{
    Children,
    Eventbus
  }
}
</script>

<style>

</style>