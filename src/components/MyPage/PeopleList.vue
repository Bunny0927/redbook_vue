<template>
    <div class="peoplelist-container">
        <van-list>
            <van-cell v-for="(item,index) in people_list" :key="index">
                <van-image round :src="require('@/assets/img/note/'+item.pic)" height="40" width="40"/>
                <div class="people-info">
                    <p class="people-name">{{item.name}}</p>
                    <p class="people-introduction van-ellipsis">{{item.introduction}}</p>
                </div>
                <div class="people-other">
                    <van-button :class="{'notattent':item.state==0||item.state==3}" round>
                        {{item.state==0?"未关注":(item.state==1?"已关注":(item.state==2?"相互关注":"回粉"))}}
                    </van-button>
                    <van-icon v-if="pageindex=='2'" :name="require('@/assets/img/general/close.png')"/>
                </div>

            </van-cell>
        </van-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // pageindex: 0,
            // people_list: [{
            //         pic: 'author_pic1.jpeg',
            //         name:'比奇兔',
            //         introduction:'养了一只猪和一只狗的比奇兔',
            //         state: 1    //0 未关注; 1 已关注; 2 互相关注;3 回粉
            //     }
            // ]
        }
    },
    props: {
        pageindex: String,
        people_list: {
            type: Array,
            default: () => []
        }
  }
};
</script>

<style>
.peoplelist-container .van-cell {
    position: relative;
}
.peoplelist-container .van-cell .van-image {
    vertical-align: middle;
}
.peoplelist-container .van-cell .people-info {
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    left: 50px;
    width: 50%;
}
.peoplelist-container .van-cell .people-info p {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 20px;
}
.peoplelist-container .van-cell .people-introduction {
    color: #b6b4b4;
}
.peoplelist-container .van-cell .people-other {
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    right: 0;
}
.peoplelist-container .van-cell .van-button {
    color: #9e9d9d;
    vertical-align: middle;
    height: 30px;
}
.peoplelist-container .van-cell .notattent {
    border: 1px solid #f08b97;
    color: #f08b97;
}
.peoplelist-container .van-cell .van-icon {
    margin-left: 15px;
    vertical-align: middle;
}
</style>