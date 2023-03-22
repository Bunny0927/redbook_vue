<template>
  <div id="recatt-container">
    <people-list pageindex="2" :people_list="people_list" />
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
        //   pic: "author_pic1.jpeg",
        //   name: "比奇兔",
        //   introduction: "养了一只猪和一只狗的比奇兔",
        //   state: 0, //0 未关注; 1 已关注; 2 互相关注;3 回粉
        // },
        // {
        //   pic: "author_pic2.jpeg",
        //   name: "Mikasa",
        //   introduction: "暂时还没有简介",
        //   state: 0, //0 未关注; 1 已关注; 2 互相关注;3 回粉
        // },
      ],
    };
  },
  created () {
    this.$http.get(this.httpUrl.getRAttention).then((response) => {
      this.people_list = response.data.data
    }).catch((error) => {
      console.log(error)
    })
  }
};
</script>

<style>

</style>