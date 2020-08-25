<template>
  <div class="tab-control">
    <!-- <div
      @click="itemClick(index)"
      :class="{ active: index === currentIndex }"
      v-for="(item, index) in title"
      :key="index"
      class="tab-control-item"
    >
      <span>{{ item }}</span>
    </div>
    <hr /> -->
    <div>
      <i-button type="info">信息按钮</i-button>
      <i-button type="success">成功按钮</i-button>
      <i-button type="warning">警告按钮</i-button>
      <i-button type="error">错误按钮</i-button>
      <Alert type="success">A success prompt</Alert>
      <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
    </div>
  </div>
</template>
<script>
import { MenuGroup }  from 'view-design'
export default {
  name: 'control',
  data () {
    return {
      title: ['新款', '流行', '推荐', '厉害'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      //   this.$emit('tabClick', index)
      console.log(index)
    }
  }
}
</script>

<style lang="less" scoped>
@deep: ~'>>>';
@{deep}.ivu-transfer-operation {
  visibility: hidden !important;
}
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  .tab-control-item {
    flex: 1;
    span {
      padding: 5px;
    }
  }
  .active {
    color: deeppink;
    span {
      border-bottom: 3px solid pink;
    }
  }
  .actives {
    background-color: deeppink;
    color: #000;
    span {
      border-bottom: 3px solid pink;
    }
  }
  position: sticky;
  top: 44px;
}
</style>
