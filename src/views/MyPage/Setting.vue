<template>
  <div id="setting-container">
    <van-nav-bar title="设置">
      <template #left>
        <van-icon name="arrow-left" color="black" size="18" @click="goBack" />
      </template>
      <template #right>
        <van-icon name="scan" color="black" size="18" />
      </template>
    </van-nav-bar>
    <van-list class="setting-content">
      <van-cell class="top-radius">
        <span class="setting-title">账号与安全</span><van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell class="bottom-radius">
        <span class="setting-title">隐私设置</span><van-icon name="arrow" size="15"/>
      </van-cell>
      <br/>
      <van-cell class="top-radius">
        <span class="setting-title">通知设置</span><van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell class="bottom-radius">
        <span class="setting-title">通用设置</span><van-icon name="arrow" size="15"/>
      </van-cell>
      <br/>
      <van-cell class="top-radius">
        <span class="setting-title">青少年模式</span>
        <span class="setting-tip">未开启</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell class="bottom-radius">
        <span class="setting-title">深色模式</span><van-icon name="arrow" size="15"/>
      </van-cell>
      <br/>
      <van-cell class="top-radius">
        <span class="setting-title">帮助与客服</span><van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="setting-title">鼓励一下</span><van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="setting-title">个人信息收集清单</span><van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="setting-title">第三方信息共享清单</span><van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell class="bottom-radius">
        <span class="setting-title">关于小红书</span><van-icon name="arrow" size="15"/>
      </van-cell>
    </van-list>
    <div class="btn-container">
      <van-button>登出账户</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#setting-container .setting-content {
  padding: 10px 15px;
}
#setting-container .top-radius {
  border-radius: 10px 10px 0 0;
}
#setting-container .bottom-radius {
  border-radius: 0 0 10px 10px;
}
.setting-content .van-cell {
  position: relative;
}
.setting-content .van-cell:active {
    background-color: #E5E5E5;
}
.setting-content .setting-tip {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translate(0,-50%);
  color: #b5b5b5;
}
.setting-content .van-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0,-50%);
  color: #b5b5b5;
}
.btn-container {
  padding:0 15px;
}
.btn-container .van-button {
  width: 100%;
  border: none;
  border-radius: 10px;
}
</style>