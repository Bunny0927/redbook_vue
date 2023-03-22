<template>
<!-- <transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeInRight" leave-active-class="animate__fadeOutRight"> -->
  <div id="editinfo-container">
    <van-nav-bar title="编辑资料">
      <template #left>
        <van-icon name="arrow-left" color="black" size="18" @click="goBack"/>
      </template>
    </van-nav-bar>
    <div id="user-pic">
        <van-image round :src="require('@/assets/img/mypage/'+ userinfo.pic)"/>
        <van-icon name="photograph"/>
    </div>
    <van-list class="editinfo-content">
      <van-cell>
        <span class="editinfo-title">名字</span>
        <span class="editinfo-tip font-black">{{userinfo.name}}</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="editinfo-title">小红书号</span>
        <span class="editinfo-tip font-black">{{userinfo.id}}</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="editinfo-title">性别</span>
        <span :class="['editinfo-tip',{'font-black':userinfo.gender!=''}]">{{userinfo.gender=='m'?'男':'女'}}</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="editinfo-title">生日</span>
        <span :class="['editinfo-tip',{'font-black':userinfo.birthday!=''}]">{{userinfo.birthday==''?'选择生日':userinfo.birthday}}</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="editinfo-title">职业</span>
        <span :class="['editinfo-tip',{'font-black':userinfo.job!=''}]">{{userinfo.job==''?'选择职业':userinfo.job}}</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="editinfo-title">地区</span>
        <span :class="['editinfo-tip',{'font-black':userinfo.region!=''}]">{{userinfo.region==''?'选择地区':userinfo.region}}</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="editinfo-title">学校</span>
        <span :class="['editinfo-tip',{'font-black':userinfo.school!=''}]">{{userinfo.school==''?'选择学校':userinfo.school}}</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell>
        <span class="editinfo-title">简介</span>
        <span :class="['editinfo-tip',{'font-black':userinfo.introduction!=''}]">{{userinfo.introduction==''?'有趣的简介可以吸引粉丝':userinfo.introduction}}</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
      <van-cell class="bgitem">
        <span class="editinfo-title">背景图</span>
        <van-image class="editinfo-tip bgpic" radius="5" v-if="userinfo.bgpic!=''" :src="require('@/assets/img/mypage/'+ userinfo.bgpic)"/>
        <span class="editinfo-tip" v-else>上传背景图</span>
        <van-icon name="arrow" size="15"/>
      </van-cell>
    </van-list>
  </div>
<!-- </transition> -->

</template>

<script>
export default {
  data() {
    return {
      userinfo: {
        // name: 'Bunny',
        // pic: 'profile.jpg',
        // id: '42659865xx',
        // gender: 'w',
        // birthday: '',
        // job: '',
        // region: '',
        // school: '',
        // introduction: '',
        // bgpic: 'mypagebg.jpg'
      }
    }
  },
  created () {
    this.$http.get(this.httpUrl.getUserInfo).then((response) => {
      console.log(response.data)
      this.userinfo = response.data
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },

  }

}
</script>

<style>
/* #editinfo-container {
  z-index: 9999;
  position: fixed;
} */
#editinfo-container .editinfo-content .van-cell {
  border-radius: 10px;
}
.editinfo-content .van-cell {
  position: relative;
}
.editinfo-content .van-cell:active {
    background-color: #E5E5E5;
}
.editinfo-content .editinfo-tip {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translate(0,-50%);
  color: #b5b5b5;
}
.editinfo-content .font-black {
  color: rgb(122, 122, 122)!important;
}
.editinfo-content .van-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0,-50%);
  color: #b5b5b5;
}
.editinfo-content .bgitem .van-cell__value {
  height: 40px;
}
.editinfo-content .bgpic {
  height: 40px;
  width: 50px;
}
.editinfo-content .bgitem .editinfo-title {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0,-50%);
}

#editinfo-container #user-pic {
  background-color: white;
  position: relative;
  padding: 30px 0;
}
#editinfo-container #user-pic .van-image {
  height: 100px;
  width: 100px;
}
#editinfo-container #user-pic .van-icon {
  position: absolute;
  bottom: 35px;
  right: 50%;
  margin-right: -50px;
  font-size: 20px;
  font-weight: lighter;
  background-color: rgb(204, 198, 198,0.7);
  padding: 5px;
  color: black;
  border-radius: 15px;
}
</style>