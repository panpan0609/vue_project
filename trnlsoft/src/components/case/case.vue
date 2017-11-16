<template>
  <div>
    <div class="index_banner case_banner">  		
  	</div>
  	   <h2 class="title case_title">提供优秀产品，帮客户创造价值</h2>
    	<p class="sub_title case_subtitle">--用事实说话！</p>
      <div class="server_box">
       <div class="server_type">
          <router-link :to="item.to" v-for="(item,index) in list" :key="index">{{item.html}}</router-link>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Case',
  data(){
  	return{
      list:[{
        name: 'Food',
        to: '/case',
        html: '美食APP'
      },
      {
        name: 'Vegetarian',
        to: '/case/vegetarian',
        html: '素食APP'
      },
      {
        name: 'Pineapple',
        to: '/case/pineapple',
        html: '菠萝油'
      },
      {
        name: 'Flow',
        to: '/case/flow',
        html: '流量无忧'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../../static/css/nav.less";
  
</style>
