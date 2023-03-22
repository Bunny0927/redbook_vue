<template>
  <div id="search-container">
    <van-nav-bar >
      <template #left>
        <van-icon name="arrow-left" color="black" size="18" @click="goBack"/>
      </template>
      <template #right>
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          shape="round"
        >
          <template #action>
            <div class="search-btn" @click="onSearch">搜索</div>
          </template>
          </van-search>
      </template>
    </van-nav-bar>

    search
  </div>
</template>

<script>
import {Icon,Search} from 'vant'
export default {
  name: 'searchpage',
  components: {[Search.name]:Search,[Icon.name]:Icon},
  data () {
    return {
      value:''
    }
  },
  methods: {
    onSearch () {
      console.log('search')
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#search-container .van-nav-bar .van-icon {
    color: black;
}
#search-container .search-btn {
    color: #AAAAAA;
}
</style>