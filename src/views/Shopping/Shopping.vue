<template>
    <div id="shopping-container">
        <div id="shopping-search">
            <van-search shape="round" v-model="search_value" placeholder="请输入搜索关键词"/>
            <div id="shopping-search-other">
                <van-icon name="cart-o"/>
                <van-icon name="orders-o"/>
                <van-icon name="ellipsis"/>
            </div>
        </div>
        <van-grid :column-num="5" id="shopping-nav" :border="false">
            <van-grid-item v-for="(item,index) in navlist" :key="index" :icon="require('@/assets/img/shopping/'+item.pic)" :text="item.title" />
        </van-grid>
        <div id="shopping-content">
            <shopping-unit v-for="(item,index) in commoditylist" :key="index" :commodity_info="item"/>
        </div>
    </div>
</template>

<script>
import ShoppingUnit from '../../components/Shopping/ShoppingUnit.vue'
export default {
    name:'shopping',
    components:{ShoppingUnit},
    data () {
        return {
            search_value: '',
            navlist: [{pic: '每日上新.png',title:'每日上新'},{pic: '福利社.png',title:'福利社'},{pic: '潮流穿搭.png',title:'潮流穿搭'},
            {pic: '设计师品牌.png',title:'设计师品牌'},{pic: '直播逛街.png',title:'直播逛街'},{pic: '艺术潮玩.png',title:'艺术潮玩'},
            {pic: '家居买手店.png',title:'家居买手店'},{pic: '三餐四季.png',title:'三餐四季'},{pic: '美妆护肤.png',title:'美妆护肤'},
            {pic: '潮流彩妆.png',title:'潮流彩妆'}],

            commoditylist: [{
                pic: 'commodity1.jpg',
                title: 'TOUTOU · 水波纹链条丝巾腋下包单肩斜挎包',
                price: '259'
            },{
                pic: 'commodity1.jpg',
                title: 'TOUTOU · 水波纹链条丝巾腋下包单肩斜挎包',
                price: '259'
            },{
                pic: 'commodity1.jpg',
                title: 'TOUTOU · 水波纹链条丝巾腋下包单肩斜挎包',
                price: '259'
            },{
                pic: 'commodity1.jpg',
                title: 'TOUTOU · 水波纹链条丝巾腋下包单肩斜挎包',
                price: '259'
            },{
                pic: 'commodity1.jpg',
                title: 'TOUTOU · 水波纹链条丝巾腋下包单肩斜挎包',
                price: '259'
            }]
        }
    }
}
</script>

<style>
/* 搜索框 */
#shopping-container #shopping-search {
    background-color: white;
}
#shopping-container .van-search {
    width: 70%;
    display: inline-block;
}
#shopping-container #shopping-search-other {
    width: 26%;
    display: inline-block;
}
#shopping-container #shopping-search-other .van-icon {
    width: 33%;
    font-size: 20px;
    font-weight: 500;
}
/* 导航栏 */
#shopping-container #shopping-nav {
    background-color: white;
    padding: 10px 0;
}
#shopping-container #shopping-nav .van-icon {
    font-size: 40px;
}
#shopping-container #shopping-nav .van-grid-item__content {
    padding: 5px;
}
/* 内容 */
#shopping-container #shopping-content {
    padding: 0 3px;
    margin-bottom: 60px;
    overflow: hidden;
}
</style>