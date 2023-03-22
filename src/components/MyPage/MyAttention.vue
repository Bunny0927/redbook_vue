<template>
  <div id="myattention-container">
    <p class="myattention-title">正在关注</p>
    <people-list pageindex="0" :people_list="people_list"/>
  </div>
</template>

<script>
import PeopleList from "./PeopleList.vue";
export default {
  components: { PeopleList },
  data() {
    return {
      people_list: []
      // people_list: [
      //   {
      //     pic: "author_pic1.jpeg",
      //     name: "比奇兔",
      //     introduction: "养了一只猪和一只狗的比奇兔",
      //     state: 1, //0 未关注; 1 已关注; 2 互相关注;3 回粉
      //   },
      //   {
      //     pic: "author_pic2.jpeg",
      //     name: "Mikasa",
      //     introduction: "暂时还没有简介",
      //     state: 1, //0 未关注; 1 已关注; 2 互相关注;3 回粉
      //   },
      // ],
    };
  },
  created () {
    this.$http.get(this.httpUrl.getAttention,{
      params : {id:1}
    }).then((response) => {
      this.people_list = response.data.data
      console.log(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
};
</script>

<style>
#myattention-container .myattention-title {
  text-align: left;
  font-size: 10px;
  padding-left: 15px;
  margin-bottom: 10px;
}
</style>