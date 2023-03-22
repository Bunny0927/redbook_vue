<template>
    <div id="mypage-container">
        <div id="mypage-info-container">
            <!-- 上半部分：导航栏和用户信息 -->
            <div id="mypage-info">
                <van-nav-bar fixed>
                    <template #left>
                        <van-icon name="apps-o" @click="showLeftFn"/>
                    </template>
                    <template #right>
                        <van-icon name="share-o" @click="showShare = true"/>
                    </template>
                </van-nav-bar>
                <div id="info-bottom">
                    <van-row>
                        <van-col span="6" offset="1" class="profile-container">
                            <van-image round
                                width="5rem"
                                height="5rem"
                                :src="require('@/assets/img/mypage/profile.jpg')"
                            />
                            <van-icon class="add-icon" name="add"/>
                        </van-col>
                        <van-col id="user-basicinfo" span="17">
                            <p class="user-name">{{userinfo.name}}</p>
                            <p class="user-other">小红书号：<span class="user-id">{{userinfo.id}}</span><van-icon name="qr"/></p>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="1"><p class="user-introduction" v-text="userinfo.introduction===''?'点击这里，填写简介':userinfo.introduction"></p></van-col>
                    </van-row>
                    <van-row class="user-gender">
                        <van-col offset="1" >
                            <van-icon v-show="userinfo.gender==='m'" :name="require('@/assets/img/general/gender_m.png')"/>
                            <van-icon v-show="userinfo.gender==='w'" :name="require('@/assets/img/general/gender_w.png')"/>
                        </van-col>
                    </van-row>
                    <van-row class="user-nav">
                        <van-col offset="1" span="2">
                            <p>{{userinfo.attention_num}}</p>
                            <p class="user-nav-title" @click="goAttFan('0')">关注</p>
                        </van-col>
                        <van-col offset="1" span="2">
                            <p>{{userinfo.fan_num}}</p>
                            <p class="user-nav-title" @click="goAttFan('1')">粉丝</p>
                        </van-col>
                        <van-col offset="1" span="4">
                            <p>{{userinfo.star_collect_num}}</p>
                            <p class="user-nav-title" @click="alertDialog">获赞与收藏</p>
                        </van-col>
                        <van-col offset="3" span="6">
                            <p class="user-nav-btn" @click="goEditInfo">编辑资料</p>
                        </van-col>
                        <van-col offset="1" span="2">
                            <van-icon class="user-nav-btn" name="setting-o"  @click="goSetting"/>
                        </van-col>
                    </van-row>
                </div>
            </div>
            <div id="mypage-divide-div"></div>
        </div>
        <!-- 左侧弹窗 -->
        <van-popup id="leftnav" v-model="showleft" position="left">
            <div class="list-container">
                <van-list>
                    <van-cell>
                        <van-icon name="friends-o" size="18"/><span>发现好友</span>
                    </van-cell>
                    <van-divider />
                    <van-cell>
                        <van-icon name="underway-o" size="18"/><span>浏览记录</span>
                    </van-cell>
                    <van-cell>
                        <van-icon name="notes-o" size="18"/><span>我的草稿</span>
                    </van-cell>
                    <van-cell>
                        <van-icon name="records" size="18"/><span>创作中心</span>
                    </van-cell>
                    <van-cell>
                        <van-icon name="pending-payment" size="18"/><span>钱包</span>
                    </van-cell>
                    <van-cell>
                        <van-icon name="desktop-o" size="18"/><span>免流量</span>
                    </van-cell>
                    <van-cell>
                        <van-icon name="gift-o" size="18"/><span>好物体验</span>
                    </van-cell>
                    <van-divider />
                    <van-cell>
                        <van-icon name="orders-o" size="18"/><span>订单</span>
                    </van-cell>
                    <van-cell>
                        <van-icon name="cart-o" size="18"/><span>购物车</span>
                    </van-cell>
                    <van-cell>
                        <van-icon name="coupon-o" size="18"/><span>卡券</span><van-badge dot />
                    </van-cell>
                    <van-cell>
                        <van-icon name="bag-o" size="18"/><span>心愿单</span>
                    </van-cell>
                    <van-cell>
                        <van-icon name="vip-card-o" size="18"/><span>小红卡会员</span>
                    </van-cell>
                    <van-divider />
                    <van-cell>
                        <van-icon name="flower-o" size="18"/><span>社区公约</span>
                    </van-cell>
                </van-list>
            </div>
            <div class="nav-bottom-container">
                <van-row type="flex" justify="space-around">
                    <van-col span="6"><van-icon name="setting-o" size="18"/><p>设置</p></van-col>
                    <van-col span="6"><van-icon name="service-o" size="18"/><p>帮助与客服</p></van-col>
                    <van-col span="6"><van-icon name="scan" size="18"/><p>扫一扫</p></van-col>
                </van-row>
            </div>
        </van-popup>
        <!-- 分享弹窗 -->
        <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onShareSelect"/>
        <!-- 获赞与收藏弹窗 -->
        <van-dialog v-model="showDialog" title="获赞与收藏" confirm-button-text="我知道了" theme="round-button">
            <van-divider />
            <p><van-icon class="dialog-icon" :name="require('@/assets/img/general/note.png')"/><span class="item-title">当前发布笔记数</span><span class="item-num">{{userinfo.note_num}}</span></p>
            <p><van-icon class="dialog-icon" :name="require('@/assets/img/general/like.png')"/><span class="item-title">当前获得点赞数</span><span class="item-num">{{userinfo.notelike_num}}</span></p>
            <p><van-icon class="dialog-icon" :name="require('@/assets/img/general/star.png')"/><span class="item-title">当前获得收藏数</span><span class="item-num">{{userinfo.notestar_num}}</span></p>
        </van-dialog>
        <!-- 下半部分：note内容 -->
        <div id="mypage-content">
            <van-tabs swipeable animated v-model="mypage_active">
                <van-tab title="笔记">
                    <my-note/>
                </van-tab>
                <van-tab>
                    <template #title><van-icon name="star-o" /> 收藏</template>
                    <my-star/>
                </van-tab>
                <van-tab title="赞过">
                    <my-like/>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import MyNote from '@/components/MyPage/MyNote.vue'
import MyStar from '@/components/MyPage/MyStar.vue'
import MyLike from '@/components/MyPage/MyLike.vue'
// import EditInformation from './EditInformation.vue'
export default {
    name:'mypage',
    components:{MyNote,MyStar,MyLike},
    data () {
        return {
            showleft: false,
            showShare: false,
            showDialog: false,
            options: [
                { name: '微信', icon: 'wechat' },
                { name: '微博', icon: 'weibo' },
                { name: '复制链接', icon: 'link' },
                { name: '分享海报', icon: 'poster' },
                { name: '二维码', icon: 'qrcode' },
            ],
            mypage_active: 0,
            userinfo:{
                name: 'Bunny',
                id: '42659865xx',
                attention_num: 75,
                fan_num: 1,
                star_collect_num: 0,
                introduction: '',
                gender: 'w',
                note_num: 3,
                notelike_num: 0,
                notestar_num: 0
            }

        }
    },
    methods: {
        showLeftFn () {
            this.showleft = true
        },
        onShareSelect () {
            this.showShare = false
        },
        alertDialog() {
            this.showDialog = true
        },
        goSetting() {
            this.$router.push('/setting')
        },
        goAttFan(index) {
            this.$router.push({
                path:'/attfan',
                query: {
                    attfan_active:parseInt(index)
                }
            })
        },
        goEditInfo() {
            this.$router.push('/editinfo')
        }
    }
}
</script>

<style>
#mypage-container {
    height: 100%;
}
#mypage-container #leftnav {
    height: 100%;
    width: 75%;
}
#mypage-container .van-nav-bar .van-icon {
    font-weight: bolder;
    color: white;
    font-size: 20px;
}
/* 左侧弹出层 */
#mypage-container .list-container {
    padding-top: 50px;
    height: 85%;
    overflow-y: scroll;
}
#mypage-container .list-container .van-badge {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translate(0,-50%);
    font-size: 12px;
    line-height: 24px;
}
#mypage-container .list-container span {
    padding-left: 10px;
}
#mypage-container .van-cell {
    padding-left: 40px;
}
#mypage-container .van-cell:active {
    background-color: #E5E5E5;
}
#mypage-container .van-cell::after {
    border-bottom: none;
}
#mypage-container .nav-bottom-container {
    height: 15%;
    font-size: 10px;
}
#mypage-container .nav-bottom-container .van-icon {
    background-color: #E5E5E5;
    border-radius: 50%;
    padding: 5px;
}
/* 上部分 */
#mypage-container #mypage-info-container {
    position: relative;
    height: 265px;
    background: url('~@/assets/img/mypage/mypagebg.jpg') no-repeat center;
    background-size: cover;
}
#mypage-container #mypage-info {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .4);
}

#mypage-container .van-nav-bar {
    background: transparent;
}
#mypage-container .van-nav-bar::after {
    border-bottom: none;
}
#mypage-container #info-bottom {
    margin-top: 55px;
}
#mypage-container #user-basicinfo {
    text-align: left;
    text-indent: 5px;
}
#mypage-container #mypage-info {
    color: white;
}
#mypage-container #user-basicinfo .user-name{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
}
#mypage-container #user-basicinfo .user-other{
    font-size: 12px;
    font-weight: 300;
    margin-top: 0;
}
#info-bottom .profile-container {
    position: relative;
}
#info-bottom .profile-container .add-icon {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 22px;
    color: rgb(252, 235, 5);
    font-weight: lighter;
}
#mypage-container #info-bottom .user-introduction {
    font-size: 14px;
    text-align: left;
    margin-bottom: 5px;
}
#mypage-container #info-bottom .user-gender .van-icon {
    font-size: 12px;
    padding: 3px 5px 1px 5px;
    background-color: rgba(204, 204, 204, .6);
    opacity: 0.6;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
}
#mypage-container #info-bottom .user-nav p {
    margin: 0;
}
#mypage-container #info-bottom .user-nav-title {
    font-size: 10px;
}
#mypage-container #info-bottom .user-nav-btn {
    font-size: 14px;
    border: 1px white solid;
    line-height: 18px;
    padding: 4px 10px;
    border-radius: 12px;
    background-color: rgba(204, 204, 204, .1);
}
#mypage-container #mypage-info-container {
    position: relative;
}
#mypage-container #mypage-divide-div {
    position: absolute;
    top: 255px;
    width: 100%;
    height: 15px;
    border-radius: 10px 10px 0 0;
    background-color: #FAFAFA;
}
#mypage-container #mypage-content {
    margin-bottom: 55px;
}
#mypage-content .van-tabs__nav {
    width: 60%;
    margin: 0 20%;
    background-color: #FAFAFA;
}
#mypage-content .van-tabs__wrap {
    margin-bottom: 10px;
}
#mypage-content .van-tabs__content {
    border-top: #E5E5E5 1px solid;
    overflow-y: scroll;
}
.van-dialog .item-title{
    color: #b5b5b5;
    font-size: 14px;
}
.van-dialog .dialog-icon {
    vertical-align: middle;
    margin-right: 10px;
    font-size: 24px;
}
.van-dialog .item-num {
    margin-left: 10px;
    color: rgb(90, 87, 87);
}
</style>