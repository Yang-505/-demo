<template>
  <div>
    <h1>我是子组件</h1>
    <button @click="sub">-</button>
    <input type="text" name="text" v-model="number" />
    <button @click="add">+</button>
    <button @click="children">点击有惊喜</button>
    <p>{{ login }}</p>
    <div class="btn" @click="click" :style="activeColor">{{ 1 }}</div>
  </div>
</template>

<script>
import { log } from 'util'
export default {
  data () {
    return {
      number: 0,
      messages: 'vue',
      activeColor: {
        fontSize: '12px',
        color: 'red'
      }
    }
  },
  methods: {
    click () {},
    // 减
    sub () {
      if (this.number === 0) {
        alert('数字不能为空')
        return
      }
      this.number--
    },
    // 加
    add () {
      this.number++
    },
    children () {
      this.$emit('children', this.number)
    }
  },
  props: ['login']
}
</script>

<style lang="less" scoped>
.btn {
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
}
</style>
