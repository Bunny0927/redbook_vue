<template>
  <div id="app">
    <!-- <transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeInRight" leave-active-class="animate__fadeOutRight"> -->
      <router-view/>
    <!-- </transition> -->
    <footernav v-if="showFooterNav"></footernav>
  </div>
</template>
<script>
import footernav from './components/GeneralControls/FooterNav.vue'
export default {
  components:{footernav},
  data () {
    return {
      showFooterNav: true
    }
  },
  mounted () {
    this.hideNavigation(this.$route.path)
  },
  watch: {
    $route: {
      handler (newRouter) {
        this.hideNavigation(newRouter.path)
      },
      // $route(to, from) {
      //   //将不想有过渡动画效果的部分路由写进判断条件中
      //   if(true){
      //     //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      //     if(to.meta.index < from.meta.index){
      //     //设置动画名称
      //       this.transitionName = 'slide-left';
      //     }else if(to.meta.index > from.meta.index){
      //       this.transitionName = 'slide-right';
      //     }else if(to.meta.index == 99){
      //       this.transitionName =""
      //     }
      //   }else{
      //     this.transitionName =""
      //   }
      // }
    },
  },
  methods: {
    // 如果是登陆页或者注册页，隐藏导航栏，否则显示
    hideNavigation (path) {
      if ((path.includes('homepage') || path.includes('shopping')
      || path.includes('message') || path.includes('mypage'))) {
        this.showFooterNav = true
      } else {
        this.showFooterNav = false
      }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
