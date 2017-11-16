<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
    	<ul>
    		<li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}">
    			<span class="text">
    				<span v-show="item.type > 0" class="icon" :class="classMap[item.type]">
    				
    			  </span>
            {{item.name}}
    			</span>
    		</li>
    	</ul>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="item in goods" class="food-list foot-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img width="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="des">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}</span>
                  <span>好评{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Shopcart></Shopcart>
  </div>
  
</template>

<script>
import Shopcart from "@/components/shopcart/shopcart"
import BScroll from 'better-scroll';
import axios from 'axios';
const ERR_OK=0;
export default {
  name: 'Goods',
  props:{
  	seller:{
  		type:Object
  	}
  },
  data(){
  	return{
  		goods:[],
      listHeight:[],
      srcollY:0
  	}
  },
  components:{
    Shopcart
  },
  computed:{
    currentIndex(){
      for(let i=0;i<this.listHeight.length;i++){
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i+1];
        if(!height2 || (this.srcollY>=height1 && this.srcollY<height2)){
          return i;
        }
      }
      return 0;
    }
  },
  created:function(){
  	this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    axios.get('/api/goods')
    .then(response=>{
    	response = response.data;
    	if (response.errno === ERR_OK) {
	        this.goods=response.data;
          // DOM 更新了 操作dom时一定要在$nextTick里
          this.$nextTick(() => {
              this._initScroll();
              this._calculateHeight();
          });
    	}
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误');
    })
  },
  methods:{
    _initScroll(){
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{});
      this.foodScroll = new BScroll(this.$refs.foodWrapper, {
        probeType:3
      });
      this.foodScroll.on('scroll',(pos) =>{
        this.srcollY = Math.abs(Math.round(pos.y));
      })
    },
    _calculateHeight() {
        // 获取食物的li Dom节点列表
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
            let item = foodList[i];
            height += item.clientHeight;
            this.listHeight.push(height);
        }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/css/mixins";
	.goods{
		position: absolute;
		display: flex;
		top: 174px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
		.menu-wrapper{
			flex:0 0 80px;
			width: 80px;
			background: #f3f5f7;
			.menu-item{
				display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;
        padding: 0 12px;
        &.current{
          font-weight: bold;
          position: relative;
          margin-top: -1px;
          z-index: 10;
          background: #fff;
        }
				.icon{
					display: inline-block;
                    vertical-align: top;
                    width: 12px;
                    height: 12px;
                    margin-right: 2px;
                    background-size: 12px 12px;
                    background-repeat: no-repeat;
					  &.decrease {
              .bg-image('../../components/goods/','decrease_3');
            }
            &.discount {
               .bg-image('../../components/goods/','discount_3');
            }
            &.guarantee {
                .bg-image('../../components/goods/','guarantee_3');
            }
            &.invoice {
                .bg-image('../../components/goods/','invoice_3');
            }
            &.special {
                .bg-image('../../components/goods/','special_3');
            }
				}
				.text{
					display: table-cell;
					width: 56px;
          height: 56px;
					vertical-align: middle;
					.border-1px(rgba(7,17,27,.1));
					font-size: 12px;
				}
			}
		}
		.foods-wrapper{
			flex:1;
      .title{
        padding-left: 14px;
        height:26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147,153,159);
        background: #f3f5f7;
      }
      .food-item{
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        .border-1px(rgba(7,17,27,.1));
        .icon{
          flex:0 0 57px;
          margin-right:10px; 
        }
        .content{
          flex:1;
          .name{
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color:rgb(7,17,27);
          }
          .des{
            margin-bottom: 8px;
          }
          .extra,.des{
            line-height: 10px;
            font-size: 10px;
            color: rgb(147,153,159);
          }
          .extra{
            .count{
              margin-right:2px; 
            }
          }
          .price{
            font-weight: bold;
            line-height: 24px;
            .now{
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240,20,20);
            }
            .old{
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147,153,159);
            }
          }
        }
      }
		}
	}
</style>