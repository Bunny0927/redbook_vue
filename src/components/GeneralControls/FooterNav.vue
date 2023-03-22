<template>
    <div id="footernav-container">
        <van-tabbar route v-model="active" active-color="black" inactive-color="#AAAAAA">
            <van-tabbar-item replace to="/homepage">首页</van-tabbar-item>
            <van-tabbar-item replace to="/shopping">购物</van-tabbar-item>
            <van-tabbar-item replace to="/dailylog"><van-icon name="add-square" color="#ee0a24" size="50"/></van-tabbar-item>
            <van-tabbar-item replace to="/message">消息</van-tabbar-item>
            <van-tabbar-item replace to="/mypage">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vant'
export default {
    name: 'footernav',
    components:{[Tabbar.name]:Tabbar,[TabbarItem.name]:TabbarItem},
    data () {
        return {
            active: 0,
        }
    }
}
</script>

<style>
#footernav-container .van-tabbar-item {
    font-size: 16px;
}
</style>