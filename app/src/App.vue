<template>
  <div id="app">
    <HeaderNav :seller="seller"></HeaderNav>
    
    
    <router-view :seller="seller"></router-view>
    
  </div>
  
</template>

<script>
import axios from 'axios'
import HeaderNav from '@/components/header/header'
const ERR_OK=0;
export default {
  name: 'app',
  components: {
    HeaderNav
  },
  data(){
    return{
      seller:{}
    }
  },
  created:function(){
    axios.get('/api/seller')
    .then(response=>{
    	response = response.data;
    	if (response.errno === ERR_OK) {
	        this.seller=response.data;
    	}
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误');
    })
  }
}
</script>

<style lang="less">


</style>
