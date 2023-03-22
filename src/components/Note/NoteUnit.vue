<template>
  <div class="note-container">
    <van-image class="pic" :src="getPicUrl(note_info.pic)"/>
    <p class="title van-multi-ellipsis--l2">{{note_info.title}}</p>
    <div class="note-bottem-left">
      <van-image class="author-profile" round  :src="getPicUrl(note_info.author_profile)"/>
      <span class="author-name">{{note_info.author_name}}</span>
    </div>
    <div class="note-bottem-right">
      <van-icon v-show="note_info.ifLike" name="like" color="red" @click="changeLike"/>
      <van-icon v-show="!note_info.ifLike" name="like-o" @click="changeLike"/>
      <span class="like-tip">赞</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noteunit',
  data () {
    return {
    }
  },
  props: ['note_info'],
  // note_info:
  //{ pic: 'note_pic1.jpg', title: '猫猫真可爱！', author_profile: 'author_pic1.jpeg', author_name: 'Bunny', ifLike: false}
  methods: {
    changeLike() {
      console.log(111111)
      this.note_info.ifLike = !this.note_info.ifLike
      console.log(this.note_info.ifLike)
    },
    getPicUrl (pic) {
      return require('../../assets/img/note/'+pic)
    }
  },
  created () {
    // console.log(this.note_info)
  }
}
</script>

<style>
.note-container {
  width: 45%;
  margin: 5px 2% 0px 2%;
  border-radius: 5px;
  background-color: white;
}
.note-container .van-image__error, .note-container .van-image__img, .note-container .van-image__loading {
  border-radius: 5px 5px 0 0;
}
.note-container .pic {
  width: 100%;
  border-radius: 5px;
}
.note-container .title {
  margin-top: 5px;
  padding: 0 10px;
  text-align: left;
  font-size: 15px;
}
.note-container .note-bottem-left {
  float: left;
  margin-left: 10px;
  color: #aaa;
  font-size: 14px;
}
.note-container .author-profile {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-bottom: 5px;
}
.note-container .author-name {
  margin-left: 5px;
}
.note-container .note-bottem-right {
  float: right;
  margin-right: 10px;
  color: #636363;
  font-size: 13px;
  height: 30px;
  line-height: 30px;
}

.note-container .like-tip {
  margin-left: 5px;
}
</style>