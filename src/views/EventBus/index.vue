<template>
  <div>
    <button @click="getLogin" type="primary" :disabled="disabled">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      disabled: false,
      interval: undefined,
      totalCount: 0
    }
  },
  methods: {
    getLogin () {
      this.disabled = true
      this.totalCount = 60
      this.getCode()
      this.interval = setInterval(() => {
        this.totalCount--
        if (this.totalCount === 0) {
          clearInterval(this.interval)
          this.disabled = false
        }
      }, 1000)
    },
    getCode () {
      console.log('我在倒计时')
    }
  },
  computed: {
    btnText () {
        return this.totalCount !== 0 ? `${this.totalCount}秒再次获取` : '获取验证码'
    }
  }
}
</script>

<style></style>
