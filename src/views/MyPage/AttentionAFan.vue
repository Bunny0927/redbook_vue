<template>
  <div id="attfan-container">
    <van-nav-bar :title="username">
      <template #left>
        <van-icon name="arrow-left" color="black" size="18" @click="goBack" />
      </template>
    </van-nav-bar>
    <div id="attfan-content">
      <van-tabs v-model="attfan_active" sticky title-active-color="black" title-inactive-color="#AAAAAA">
        <van-tab title="关注">
          <div id="attfan-search">
            <van-search v-model="search_value" placeholder="搜索已关注的人" shape="round"/>
          </div>
          <my-attention/>
        </van-tab>
        <van-tab title="粉丝">
          <div id="attfan-search">
            <van-search v-model="search_value" placeholder="请输入搜索关键词" shape="round"/>
          </div>
          <my-fan/>
        </van-tab>
        <van-tab>
          <template #title>推荐 <van-icon name="info-o"/></template>
          <div id="attfan-search">
            <van-search v-model="search_value" placeholder="请输入搜索关键词" shape="round"/>
          </div>
          <recommend-attention/>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import MyAttention from '../../components/MyPage/MyAttention.vue';
import MyFan from '../../components/MyPage/MyFan.vue';
import RecommendAttention from '../../components/MyPage/RecommendAttention.vue';
export default {
  components: { MyAttention, MyFan, RecommendAttention },
  data() {
    return {
      username: "Bunny",
      attfan_active: parseInt(this.$route.query.attfan_active),
      search_value: ''
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#attfan-container {
  background-color: white;
}
#attfan-container .van-tabs__nav {
  width: 60%;
  margin: 0 20%;
}
</style>