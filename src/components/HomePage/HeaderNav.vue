<template>
  <div id="headernav-container">
    <van-tabs swipeable animated v-model="active" title-active-color="black" title-inactive-color="#AAAAAA">
        <van-tab title="关注"><home-attention/></van-tab>
        <van-tab title="发现"><home-find/></van-tab>
        <van-tab :title="locate"><home-location/></van-tab>
    </van-tabs>
    <van-nav-bar fixed @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="smile-o" size="18" color="black"/>
      </template>
      <template #right>
        <van-icon name="search" size="18" color="black"/>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import {Tabs,Tab,Icon,NavBar} from 'vant'
import HomeFind from './HomeFind.vue'
import HomeAttention from './HomeAttention.vue'
import HomeLocation from './HomeLocation.vue'
export default {
  name: 'headernav',
  components: {[Tabs.name]:Tabs,[Tab.name]:Tab,[Icon.name]:Icon,[NavBar.name]:NavBar,
      HomeAttention,
      HomeFind,
      HomeLocation,

  },
  data() {
    return {
      active: 1,
      locate: '淳安',
      showdaily: false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/dailylog')
    },
    onClickRight() {
      this.$router.push('/search')
    },
    showDailyLog() {
      this.showdaily = true
    }
  },
}
</script>

<style>
#headernav-container .van-tabs__nav {
  width: 70%;
  z-index: 9998;
  margin: auto 15%;
  position: fixed;
  overflow: hidden;
  padding-top: 7px;
  padding-bottom: 0;
  height: 30px;
}
#headernav-container .van-tabs {
  padding-bottom: 0;
}
#headernav-container .van-tabs__line {
  bottom: 0;
}
#headernav-container #dailylog-container {
  z-index: 9999;
}
</style>