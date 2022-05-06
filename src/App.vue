<template>
    <!-- <h1>app根组件</h1> -->
  <div class="App">
    <div class="video" :style="display" >
     <video id="video" src="./assets/beginning.mp4" autoplay="autoplay" loop="loop" muted="muted" height="100%" width="100%"></video>
     <div class="clickCart">
        <div class="comment_box">
          <h1 class="head">bilibili平台全站可视化分析</h1>
        </div>
       <div class="clickButton_cover" >
         <button class="clickButton" @click="ChangeVideo">click open</button>
       </div>
     </div>
    </div>

    <!-- 上 -->
    <!-- t头部 未封装成组件 -->
    <div class="realPage"></div>
      <header >
      <div class="container">
      <!-- left -->
      <h1 class="left_icon">
        <a href="">
        <img src="./assets/blue2.png" alt="">
        </a>
      </h1>
      <!-- right -->
      <div class="right">
          <div class="banner_item"
               v-for="(item,index) of banner " :key="index"
               @click="getNavindex(index)">
            <router-link style="text-decoration: none;" :to="{name:item.route_path}">
              <span class="tap_span" >
              {{item.name}}
              </span>
              </router-link>
            </div>
        </div>
      </div>
    </header>
    

<!-- 下 -->
<router-view></router-view> 

  </div>
</template>

<script>
export default {
  name:'App',
   data() {
      return {
        banner:[
          {name:'首页',route_path:'home'},
          {name:'数据分析库',route_path:'analyze'},
          {name:'词云图',route_path:'wordcloud'},
          {name:'总结',route_path:'summary'}
        ],
        display:""
      };
    },
    methods: {
      ChangeVideo(){
        this.display='display:none'
      }
    },
  components:{
  }
}
</script>

<style lang="less" scoped>
.App{
  background-color: #e0e8f5;
  .video{
    margin: 0 auto;
    width: 1490px;
    height: 850px;
    position: relative;
    .clickCart{
      z-index: 10;
      position: absolute;
      margin: 0 auto;
      top: 200px;
      left: 300px;
      background-color: #bdc6e8;
      opacity: .8;
      height: 380px;
      width: 900px;
      padding-top: 20px;
      .comment_box{
        height: 60px;
        width: 800px;
        margin: 0 auto;
        color: #293292;
        font-size: 30px;
        padding-bottom: 60px;
    }
      .clickButton_cover{
        border: 5px solid white;
        margin: 0 auto;
        line-height: 100px;
        height: 90px;
        width: 200px;
        background-color: rgb(143, 129, 129);
        .clickButton{
           background-color: #293292;
           color: white;
           font-size: 40px;
           height: 90px;
           width: 200px;
        }
      }
    }
  }
  header{
    position: sticky;
    height: 80px;
    color: #fff;
    top: 0;
    background-color: #bdc6e8;
    width: 100%;
    z-index: 100;
    .container{
      height: 100%;
      box-sizing: border-box;
      width: 1140px;
      padding: 0;
      margin: 0 auto;
      .left_icon{
        margin: 0;
        float: left;
        font-size: 32px;
        font-weight: 400;
        > a{
          text-decoration: none;
          display: block;
        }
      }
      .right{
        float: right;
        height: 100%;
        line-height: 80px;
        background: transparent;
        padding: 0;
        margin: 0;
        .banner_item{
          margin: 0;
          float: left;
          list-style: none;
          cursor: pointer;
          text-decoration: none;
          color: #293292;
          opacity: .8;
          display: block;
          padding: 0 22px;
          font-family: SimHei;
          .router-link-active{
            // background-color: #fff;
              .tap_span{
                opacity: 1;
                font-weight:bolder;
                font-size: 20px;
                // background-color: #fff;
              }

          }
        }
      }
    }

}

}



</style>