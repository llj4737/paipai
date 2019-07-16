<template>
  <div class="idel">
    <div class="box0">
      <div class="person">
        <div>
         <img
          src="data:image/png;base64,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"
          alt
        >
          <p>{{getName}}</p>
        </div>
      </div>
      <div class="my_manager">
        <p>我的管理</p>
        <div>
          <div>
            <span>0</span>
            <p>收藏</p>
          </div>
          <div>
            <span>0</span>
            <p>赚入</p>
          </div>
          <div>
            <span>0</span>
            <p>拍币</p>
          </div>
          <div>
            <span>0</span>
            <p>优惠券</p>
          </div>
        </div>
      </div>
    </div>

    <div class="box1">
        <p>我的闲置</p>
        <div class="my_idel">
            <router-link tag="div" to="/personal/">已发布</router-link >
            <router-link tag="div" to="/personal/sold">已卖出</router-link >
            <router-link tag="div" to="/personal/removed">已下架</router-link >
        </div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed: {
        ...mapGetters(["getName"])
    }
};
</script>

<style lang="scss" scoped>
.idel {
  .box0 {
    display: flex;
    .person {
      width: 240px;
      height: 250px;
      background: #01c30b;
      box-shadow: 0 0 8px #999;
      display: flex;
      >div{
          margin: auto;
          vertical-align: middle;
          text-align: center;
          >img{
              width: 60px;
              margin-bottom: 10px;
          }
          >p{
              color: white;
              font-size: 16px;
          }
      }
    }
    .my_manager {
      flex: 1;
      background: white;
      > p {
        line-height: 53px;
        font-size: 16px;
        padding-left: 20px;
        border-bottom: 1px solid #eee;
      }
      > div {
        height: 170px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
  .box1{
      margin-top: 20px;
      height: 1000px;
      background: white;
      >p{
          line-height: 54px;
          padding-left: 20px;
          font-size: 16px;
          border-bottom: 1px solid #eee;
      }
      .my_idel{
          display: flex;
          .router-link-exact-active {
              background: #01c30b;
              color: white;
          }
          >div{
              flex: 1;
              line-height: 55px;
              text-align: center;
              font-size: 15px;
              font-weight: bold;
              border-bottom: 1px solid #eee;
              border-right: 1px solid #eee;
              cursor: pointer;
          }
          
      }
  }
}
</style>