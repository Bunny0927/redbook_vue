import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Message from '../views/Message/Message.vue'
import MyPage from '../views/MyPage/MyPage.vue'
import EditInformation from '../views/MyPage/EditInformation.vue'
import Setting from '../views/MyPage/Setting.vue'
import AttentionAFan from '..//views/MyPage/AttentionAFan.vue';
import Shopping from '../views/Shopping/Shopping.vue'
import DailyLog from '../views/DailyLog'
import SearchPage from '../views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/homepage'
  },
  {
    path: '/homepage',
    component: HomePage
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/message',
    component: Message
  },
  // 个人主页中页面
  {
    path: '/mypage',
    component: MyPage
  },
  {
    path: '/editinfo',
    component: EditInformation
  },
  {
    path: '/setting',
    component: Setting
  },
  {
    path: '/attfan',
    component: AttentionAFan
  },

  {
    path: '/dailylog',
    component: DailyLog
  },
  {
    path: '/search',
    component: SearchPage
  }
]

const router = new VueRouter({
  routes
})

export default router
