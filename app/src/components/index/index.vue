<template>
  <div>
    <div class="tab">
        <router-link :to="item.to" class="tab_item" v-for="(item,index) in list" :key="index">{{item.html}}</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data(){
    return{
      list:[{
        name:'Goods',
        to:'/',
        html:'商品'
      },
      {
        name:'Ratings',
        to:'/ratings',
        html:'评论'
      },
      {
        name:'Seller',
        to:'/seller',
        html:'商家'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
/* 路由链接被激活的颜色 */
.router-link-exact-active{
  color: red;
}
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7,17,27,.3);

  .tab_item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
}

</style>