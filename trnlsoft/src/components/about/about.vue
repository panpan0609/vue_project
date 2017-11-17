<template>
  <div>
  	<div class="index_banner about_banner">  		
  	</div>
    <h2 class="title about_title">拒绝模板 支持高端定制</h2>
    <p class="sub_title about_subtitle">TRNL</p>
    <div class="server_box  hidden-xs-only">
    	<div class="show_outbox">
       	<div class="server_type">
          <router-link :to="item.to" v-for="(item,index) in list" :key="index">{{item.html}}</router-link>
        </div>
      </div>
    </div>
     <el-collapse  class="collspse_box" v-model="activeName" accordion>
        <el-collapse-item class="collspse_item" :xs="24" title="分类" name="1">
          <router-link  :to="item.to" v-for="(item,index) of list" :key="index" tag="li" class="li">
            {{item.html}}
          </router-link>
        </el-collapse-item>
    </el-collapse>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About',
  data(){
  	return{
      list:[{
        name: 'Introduction',
        to: '/about',
        html: '公司介绍'
      },
      {
        name: 'Cultural',
        to: '/about/cultural',
        html: '文化理念'
      },
      {
        name: 'News',
        to: '/about/news',
        html: '新闻动态'
      },
      {
        name: 'Partner',
        to: '/about/partner',
        html: '合作伙伴'
      }],
      activeName: '0'
    }
  }
}
</script>

<style lang="less" scoped>
	@import "../../../static/css/nav.less";
</style>
