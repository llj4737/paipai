<template>
  <div>
    <Header :show="false"></Header>
    <div class="content">
      <div class="login">
        <h3>账户登录</h3>
        <form action>
          <div>
            <span class="iconfont icon-yonghu"></span>
            <input type="text" placeholder="支持手机号" v-model="username">
          </div>
          <div>
            <span class="iconfont icon-mima"></span>
            <input type="password" placeholder="密码" v-model="password">
          </div>
          <div>
            <button @click.prevent="login()">登录</button>
          </div>
          <p>忘记密码</p>
        </form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
    mounted(){
        // this.to_login({});
    },
  components: {
    Header,
    Footer
  },
  computed: {
      ...mapGetters(["loginStatus"]),
  },
  methods: {
      
   async login() {
      let username = this.username;
      let password = this.password;
      username && password && await this.to_login({ username, password });
      // setTimeout(() => {
        let logined = this.loginStatus;
        console.log(logined)
        if (logined) {
          this.$message({
            showClose: true,
            message: "登录成功",
            duration: 1500,
            type: "success"
          });
          this.$router.push("/");
        } else {
          console.log(111);
          this.$message({
            showClose: true,
            message: "登录失败",
            duration: 1500,
            type: "error"
          });
        }
      // }, 200);
    },
    ...mapActions(["to_login"])
  }
};
</script>

<style lang="scss" scoped>
.content {
  background-image: url("https://www.paipai.com/static/img/login_bg.c509fdf.jpg");
  background-size: 100% 100%;
  background-position: center center;
  width: 100%;
  height: 540px;
  margin-top: 20px;
  position: relative;
  .login {
    width: 520px;
    height: 406px;
    background: white;
    position: absolute;
    right: 10%;
    top: 0;
    bottom: 0;
    margin: auto;
    h3 {
      font-size: 24px;
      color: #666;
      line-height: 70px;
      text-align: center;
      border-bottom: 1px solid #e9e9e9;
    }
    form {
      height: 340px;
      box-sizing: border-box;
      padding: 60px 60px 0;
      text-align: center;
      position: relative;
      > div {
        position: relative;
        margin-bottom: 14px;
        span {
          position: absolute;
          right: 52px;
          font-size: 16px;
          color: #ccc;
          top: 8px;
          // bottom: 0;
          margin: auto;
        }
      }
      input {
        width: 305px;
        height: 36px;
        font-size: 14px;
        border: 1px solid #ccc;
        text-indent: 4px;
        outline-color: rgb(149, 247, 164);
        outline-width: thin;
        // transition: all 1s;
        &::placeholder {
          color: #888;
          font-size: 14px;
          font-family: arial, "宋体";
        }
      }
      p {
        position: absolute;
        bottom: 110px;
        right: 110px;
      }
      button {
        width: 305px;
        height: 36px;
        background: #01c30b;
        outline: none;
        border: 0;
        font-size: 16px;
        color: white;
        letter-spacing: 4px;
        padding: 1px;
        font-weight: bold;
      }
    }
  }
}
</style>