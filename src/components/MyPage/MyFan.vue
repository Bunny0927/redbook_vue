<template>
  <div id="myfan-container">
    <people-list pageindex="1" :people_list="people_list" />
  </div>
</template>

<script>
import PeopleList from "./PeopleList.vue";
export default {
  components: { PeopleList },
  data() {
    return {
      people_list: [
        // {
        //   pic: "author_pic2.jpeg",
        //   name: "Mikasa",
        //   introduction: "暂时还没有简介",
        //   state: 2, //0 未关注; 1 已关注; 2 互相关注;3 回粉
        // },
      ],
    };
  },
  created () {
    this.$http.get(this.httpUrl.getFan).then((response) => {
      this.people_list = response.data.data
    }).catch((error) => {
      console.log(error)
    })
  }
};
</script>

<style>
</style>