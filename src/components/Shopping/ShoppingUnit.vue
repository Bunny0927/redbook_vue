<template>
    <div class="commodity-container">
        <van-image :src="require('@/assets/img/shopping/'+commodity_info.pic)"/>
        <p class="title van-multi-ellipsis--l2">{{commodity_info.title}}</p>
        <p class="price">￥<span class="price-num">{{commodity_info.price}}</span></p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // commodity_info: {
            //     pic: 'commodity1.jpg',
            //     title: 'TOUTOU · 水波纹链条丝巾腋下包单肩斜挎包',
            //     price: '259'
            // }
        }
    },
    props:['commodity_info']
};
</script>

<style>
.commodity-container {
    width: 48%;
    margin: 0 1%;
    border-radius: 10px;
    float: left;
    text-align: left;
    background-color: white;
    margin-top: 5px;
}
.commodity-container .van-image {
    height: 200px;
}
.commodity-container .van-image__error,.commodity-container .van-image__img,.commodity-container .van-image__loading {
    border-radius: 10px 10px 0 0;
}
.commodity-container .title {
    padding: 0 5px;
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 7px;
}
.commodity-container .price {
    margin-top: 0;
    font-size: 12px;
}
.commodity-container .price .price-num {
    font-size: 18px;
    padding: 0 5px;
}
</style>