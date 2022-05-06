<template>
  <div>
    <div class="background_main">
      <div class="page">
        <div class="comment_box">
          <p>哔哩哔哩（B站）是一个内容丰富生态广，有很多区的视频平台，在如今短视频火热的时代，基本是年轻人不可或缺的一部分。B站大部分都是原创视频是由up主创作发布，读者进行播放、点赞、评论、转发。我们的作品是对bilibili网页版热门板块的各个区进行数据可视化分析，全区分布热度分布情况，一方面希望能给自媒体行业的人提供一点数据情况的建议，能让他们更好得找到自己创作视频的定位以及日后应该如何定位自己的创作方向和吸引更多的观众对你的视频的赞赏，另外一方面希望有意加入自媒体行业成为一个up主的人通过数据来明确自己以后的创作方向。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.background_main{
  height: 700px;
  width: 1300px;
  background-color: #e0e8f5;
    margin: 0 auto;
    padding-top: 60px;
  .page{
    margin: 0 auto;
    height: 420px;
    width: 1140px;
    border-top: 8px solid white ;
    border-right: 8px solid white ;
    border-bottom: 8px solid #293292 ;
    border-left: 8px solid #293292 ;
    border-radius: 30px;
    box-shadow: 20px 20px 30px 20px #bdc6e8; 
    padding-top: 10px;
    .comment_box{
      height: 60px;
      width: 800px;
      margin: 0 auto;
      color: #293292;
      font-size: 30px;
      padding-bottom: 80px;
    }
  }
}
</style>