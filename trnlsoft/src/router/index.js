import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Server from '@/components/server/server'
import Website from '@/components/server/website'
import Customization from '@/components/server/customization'
import Wechat from '@/components/server/wechat'
import Platform from '@/components/server/platform'
import Mobile from '@/components/server/mobile'
import About from '@/components/about/about'
import Introduction from '@/components/about/introduction'
import Cultural from '@/components/about/cultural'
import News from '@/components/about/news'
import Partner from '@/components/about/partner'
import Case from '@/components/case/case'
import Food from '@/components/case/food'
import Pineapple from '@/components/case/pineapple'
import Vegetarian from '@/components/case/vegetarian'
import Flow from '@/components/case/flow'
import Connection from '@/components/connection/connection'
import Company from '@/components/connection/company'
import Branch from '@/components/connection/branch'
import Activity from '@/components/activity'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/server',
      component: Server,
      children:[
        {path:'/',name:'Website',component:Website},
        {path:'customization',name:'Customization',component:Customization},
        {path:'wechat',name:'Wechat',component:Wechat},
        {path:'platform',name:'Platform',component:Platform},
        {path:'mobile',name:'Mobile',component:Mobile}
      ]
    },
    {
      path: '/about',
      component: About,
      children:[
        {path:'/',name:'Introduction',component:Introduction},
        {path:'cultural',name:'Cultural',component:Cultural},
        {path:'news',name:'News',component:News},
        {path:'partner',name:'Partner',component:Partner}
      ]
    },
    {
      path: '/case',
      component: Case,
      children:[
        {path:'/',name:'Food',component:Food},
        {path:'pineapple',name:'Pineapple',component:Pineapple},
        {path:'vegetarian',name:'Vegetarian',component:Vegetarian},
        {path:'flow',name:'Flow',component:Flow}
      ]
    },
    {
      path: '/connection',
      component: Connection,
      children:[
        {path:'/',name:'Company',component:Company},
        {path:'branch',name:'Branch',component:Branch}
      ]
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    }
  ]
})
