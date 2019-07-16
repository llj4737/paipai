<template>
  <div>
    <Header></Header>
    <div class="personal">
      <div class="box-card">
          <h3 class="first">个人中心</h3>
          <router-link to="/personal" tag="p">个人闲置</router-link>
          <router-link to="/personal/order" tag="p">我的订单</router-link>
          <router-link to="/personal/find_pwd" tag="p">忘记密码</router-link>
      </div>
      <div class="main">
          
      <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
    data(){
        return {
            
        }
    },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.personal {
  width: 1190px;
  height: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .box-card{
      width: 180px;
      height: 300px;
      background: white;
      box-sizing: border-box;
      padding: 15px 20px;
      .router-link-exact-active {
          color: #01c30b;
      }
      p {
          font-size: 14px;
          line-height: 40px;
          user-select: none;
          cursor: pointer;
          &:hover {
              color: #01c30b;
          }
      }
      .first {
          font-size: 16px;
          font-weight: bold;
          line-height: 40px;
      }
  }
  .main{
      width: 1000px;
      padding: 10px;
  }
}
</style>