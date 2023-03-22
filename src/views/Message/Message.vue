<template>
    <div id="message-container">
        <van-nav-bar fixed title="消息">
            <template #right>
               <span>创建聊天</span>
            </template>
        </van-nav-bar>
        <div id="message-nav">
            <van-row type="flex" justify="space-around">
                <van-col span="6">
                    <van-icon :name="require('@/assets/img/general/icon1_like.png')"/>
                    <p>赞和收藏</p>
                </van-col>
                <van-col span="6">
                    <van-icon :name="require('@/assets/img/general/icon2_attention.png')"/>
                    <p>新增关注</p>
                </van-col>
                <van-col span="6">
                    <van-icon :name="require('@/assets/img/general/icon3_comment.png')"/>
                    <p>评论和@</p>
                </van-col>
            </van-row>
        </div>
        <div id="message-content">
            <van-list>
                <van-cell v-for="(item,index) in messagelist" :key="index">
                    <van-image round :src="require('@/assets/img/message/'+item.pic)"/>
                    <div class="message-desrcibe">
                        <p class="title">{{item.title}}</p>
                        <p class="content van-ellipsis">{{item.content}}</p>
                    </div>
                    <span class="time">{{item.time}}</span>
                </van-cell>
            </van-list>
        </div>
    </div>
</template>

<script>
export default {
  name: "message",
  data () {
      return {
            messagelist: [{
                pic: 'pic3.jpg',
                title: 'Mikasa',
                content: '还好啦',
                time: '星期三'
            },{
                pic: 'pic1.jpeg',
                title: 'Wendy',
                content: '你最好看',
                time: '星期一'
            },{
                pic: 'pic2.jpeg',
                title: 'ZZ',
                content: '认真工作的猪猪',
                time: '03-20'
            },{
                pic: 'npc1.png',
                title: '陌生人消息',
                content: '瞬间小助手：2021最后一波限量小红历',
                time: '03-04'
            },{
                pic: 'npc2.jpg',
                title: '小红书成长助手',
                content: '你的桃花运怎样？戳我来测测桃花运吧~',
                time: '2021-01-16'
            }]
      }
  }
};
</script>

<style>
#message-container {
    background-color: white;
}
#message-container #message-nav {
    padding-top: 75px;
}
#message-nav .van-icon {
    font-size: 60px;
}
#message-nav p {
    margin-top: 5px;
}
#message-content .van-cell {
    position: relative;
}
#message-content .van-image {
    height: 50px;
    width: 50px;
    vertical-align: middle;
}
#message-content .message-desrcibe {
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    margin-left: 70px;
}
#message-content .message-desrcibe p {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 20px;
}
#message-content .message-desrcibe .title {
    font-size: 17px;
    margin-bottom: 5px;
}
#message-content .message-desrcibe .content {
    color: rgb(138, 135, 135);
}
#message-content .time {
    float: right;
    font-size: 12px;
    color: rgb(138, 135, 135);
}
</style>