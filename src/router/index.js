import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Home from '../components/home.vue'
import Analyze from '../components/analyze.vue'
import Summary from '../components/summary.vue'
import WordCloud from '../components/wordcloud.vue'
//分析的子组件
import TopViewCounts from '../components/data_analyze/top100_viewCounts.vue'
import TopType from '../components/data_analyze/top100_type'
import ThreePartsS from '../components/data_analyze/threeParts_situation'
import ZoneViewCS from '../components/data_analyze/zone_viewCountsSituation'
import ZoneSanLS from '../components/data_analyze/zone_sanlian_situation'
import SanLianDistribution from '../components/data_analyze/sanlian_distribution'
import Transpond from '../components/data_analyze/transpond_situstion'

Vue.use(VueRouter)

//创建路由的实例对象
const router=new VueRouter({
  //数组，作用，定义"hash"地址和组件之间的对应关系
  routes:[
    //重定向
    {path:'/',redirect:'/home'},
    {path:'/home',name:'home',component:Home},
    {
      path:'/analyze',
      name:'analyze',
      component:Analyze,
      redirect:'/analyze/topViewCounts',
      children:[
        {path:'topViewCounts',name:'topViewCounts',component:TopViewCounts},
        {path:'topType',name:'topType',component:TopType},
        {path:'threePartsS',name:'threePartsS',component:ThreePartsS},
        {path:'zoneViewCS',name:'zoneViewCS',component:ZoneViewCS},
        {path:'zoneSanLS',name:'zoneSanLS',component:ZoneSanLS},
        {path:'sanLianDistribution',name:'sanLianDistribution',component:SanLianDistribution},
        {path:'transpond',name:'transpond',component: Transpond}

    ]},
    {path:'/wordcloud',name:'wordcloud',component:WordCloud},
    {path:'/summary',name:'summary',component:Summary}

  ]
})

export default router