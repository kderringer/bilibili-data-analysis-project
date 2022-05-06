<template>
  <div class="app">
    <!-- 左边 -->
    <div class="banner">
      <div class="list">
        <div class="list_item" 
             style="list-style: none;" 
             v-for="(item,index) of distribution" :key="index"
             @click="Active()"
             :class="{'act_bgc':chartActiveNum===index}">
          <a class="list" style="text-decoration: none;color:white"
             :href="'#'+item.id">{{item.name}}
          </a></div>
      </div>
    </div>
    <!-- 右边主体 -->
    <div class="main_photo">
      <div  class="b_box" v-for="(item,index) of distribution" 
            :key="index" 
            :id="item.id"
            :class="{active:isActive}"> 
        <p class="title">{{item.name}}</p>
        <div class="photo">
          <img class="img" :src="item.url" alt="">
          <img class="img1" :src="item.url1" alt="">
        </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      isActive:false,
      chartActiveNum:0,
      distribution:[
        {id:1,name:'全区',url:require('../assets/wordCloud/全区.jpg'),url1:require('../assets/exc/全区exc.jpg')},
        {id:2,name:'动画区',url:require('../assets/wordCloud/动画区.jpg'),url1:require('../assets/exc/动画区exc.jpg')},
        {id:3,name:'动物区',url:require('../assets/wordCloud/动物区.jpg'),url1:require('../assets/exc/动物区exc.jpg')},
        {id:4,name:'鬼畜区',url:require('../assets/wordCloud/鬼畜区.jpg'),url1:require('../assets/exc/鬼畜区exc.jpg')},
        {id:5,name:'科技区',url:require('../assets/wordCloud/科技区.jpg'),url1:require('../assets/exc/科技区exc.jpg')},
        {id:6,name:'美食区',url:require('../assets/wordCloud/美食区.jpg'),url1:require('../assets/exc/美食区exc.jpg')},
        {id:7,name:'汽车区',url:require('../assets/wordCloud/汽车区.jpg'),url1:require('../assets/exc/汽车区exc.jpg')},
        {id:8,name:'知识区',url:require('../assets/wordCloud/知识区.jpg'),url1:require('../assets/exc/知识区exc.jpg')},
        {id:9,name:'生活区',url:require('../assets/wordCloud/生活区.jpg'),url1:require('../assets/exc/生活区exc.jpg')},
        {id:10,name:'时尚区',url:require('../assets/wordCloud/时尚区.jpg'),url1:require('../assets/exc/时尚区exc.jpg')},
        {id:11,name:'舞蹈区',url:require('../assets/wordCloud/舞蹈区.jpg'),url1:require('../assets/exc/舞蹈区exc.jpg')},
        {id:12,name:'音乐区',url:require('../assets/wordCloud/音乐区.jpg'),url1:require('../assets/exc/音乐区exc.jpg')},
        {id:13,name:'影视区',url:require('../assets/wordCloud/影视区.jpg'),url1:require('../assets/exc/影视区exc.jpg')},
        {id:14,name:'游戏区',url:require('../assets/wordCloud/游戏区.jpg'),url1:require('../assets/exc/游戏区exc.jpg')},
        {id:15,name:'原创区',url:require('../assets/wordCloud/原创区.jpg'),url1:require('../assets/exc/原创区exc.jpg')},
        {id:16,name:'运动区',url:require('../assets/wordCloud/运动区.jpg'),url1:require('../assets/exc/运动区exc.jpg')}
      ]
    }
  },
  mounted() {
      window.addEventListener('scroll',this.handleScroll,true)
    },
  methods:{
    Active(){
      this.isActive=true
      console.log(this.isActive);
    },
    //获取滚动高亮位置index
    handleScroll(e) {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var index=parseInt(scrollTop/660)//取整
      this.chartActiveNum=index;
    },
    beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    }
  },
}
</script>

<style lang="less" scoped>
.app{
  margin: 0 auto;
  width: 1400px;
  height: 100%;
  .banner{
    position: fixed;
    top: 130px;
    .list{
      .list_item{
        background-color: #bdc6e8;
        font-size: 18px;
        line-height: 35px;
        width: 80px;
        height: 28px;
        text-align: center;
      }
      .act_bgc{
        background-color: rgb(2, 33, 136);
      }
    }
  }
  .main_photo{
    margin: 0 auto;
    width: 1200px;
    .b_box{
      .title{
        color: #293292;
        font-size: 25px;
        font-weight: bolder;
      }
      .photo{
        .img{
          width: 500px;
          height: 500px;
          border: 10px solid #bdc6e8;
        }
        .img1{
          margin-left: 120px;
          width: 500px;
          height: 500px;
          border: 10px solid #bdc6e8;
        }
      }
    }
    .active{
      padding-top: 60px;
    }
  }
}

</style>