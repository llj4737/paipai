<template>
  <div>
    <div class="header">
      <div class="con">
        <div class="logo">
          <img
            src="//img14.360buyimg.com/devfe/jfs/t1/16926/33/6852/3956/5c64d63bE8bac27a9/e96cc38024dcc7a4.png"
            alt
          >
          <span>欢迎注册</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="center">
        <div class="timeline">
          <div class="active">
            <p>1</p>
            <span>验证手机号</span>
          </div>
          <div class="line">
            -----------
            <i>></i>
          </div>
          <div>
            <p>2</p>
            <span>填写账号信息</span>
          </div>
          <div class="line">
            -----------
            <i>></i>
          </div>
          <div>
            <p>3</p>
            <span>注册成功</span>
          </div>
        </div>
        <form action>
          <div class="phone">
            <span>中国 0086</span>
            <input type="text" v-model="phone" placeholder="建议使用常用手机号">
            <p v-show="validPhone">手机号格式不正确</p>
          </div>
          <div class="confirm">
            <span>密码</span>
            <input v-model="password" type="password" placeholder="密码">
          </div>
          <p>
            <input type="checkbox" v-model="isAgraee">
            <span>
              我已阅读并同意
              <a href="https://www.paipai.com/protocol.html">《 拍拍注册协议 》</a>
            </span>
          </p>
          <div class="button">
            <button @click.prevent="submit()">注册</button>
          </div>
        </form>
      </div>
    </div>
    <div class="footer">Copyright © 2012-2019 paipai.com 版权所有</div>
    <!-- <el-button :plain="true" @click="open2">成功</el-button> -->
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

import { register } from "../axios/user";
export default {
  data() {
    return {
      phone: "",
      password: "",
      isAgraee: false,
      validPhone: false
    };
  },
  watch: {
    phone(next, before) {
      this.confirmPhone();
    }
  },
  methods: {
    confirmPhone() {
      if (!this.phone) {
        this.validPhone = false;
        return;
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phone)) {
        this.validPhone = true;
      } else {
        this.validPhone = false;
      }
    },

    submit() {
      let phone = this.phone;
      let password = this.password;
      !this.validPhone &&
        phone &&
        password &&
        this.isAgraee &&
        this.to_register({ username: phone, password }); // 手机号是用户名
    },
    async to_register(data) {
      let res = await register(data);
      if (res.code === 0) {
        this.$message({
          showClose: true,
          message: "恭喜你，注册成功",
          duration: 1500,
          type: "success"
        });
        setTimeout(() => {
          this.$router.push("/login");
        }, 1000);
      }else{
        this.$message({
          showClose: true,
          message: res.msg,
          duration: 1500,
          type: "error"
        });
      }
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: white;
  .con {
    width: 1210px;
    margin: 0 auto;
    padding: 26px 0;
    overflow: hidden;
    .logo {
      float: left;
      display: flex;
      align-items: center;
      span {
        font-size: 24px;
      }
    }
  }
}
.content {
  background: white;
  height: 600px;
  overflow: hidden;
  margin: 10px 0 0;
  .center {
    width: 400px;
    height: 380px;
    // border-bottom: 1px solid red;
    margin: 80px auto;
    .timeline {
      display: flex;
      justify-content: space-between;
      text-align: center;
      .line {
        letter-spacing: 4px;
        font-size: 16px;
        color: #ccc;
        position: relative;
        i {
          position: absolute;
          top: 2px;
          right: 0;
        }
      }
      .active {
        color: #01c30b;
        p {
          background: #01c30b;
          color: white;
        }
      }
      p {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #ccc;
        margin-bottom: 10px;
      }
      span {
        display: block;
      }
    }
    form {
      padding-top: 50px;
      p {
        margin-bottom: 25px;
        height: 20px;
        display: flex;
        align-items: center;
        > input[type="checkbox"] {
          margin-right: 10px;
          width: 20px;
          height: 20px;
          background-color: #fff;
          -webkit-appearance: none;
          border: 1px solid #c9c9c9;
          border-radius: 2px;
          outline: none;
          &:checked {
            background-image: url("../assets/imgs/check_box.png");
            background-size: 100% 100%;

            background-position: center center;
          }
        }
        a {
          color: #01c30b;
        }
      }
      .button {
        border: 0;
        border-bottom: 0;
      }
      .confirm {
        // line-height: 54px;
        box-sizing: border-box;
        // padding-bottom: 1px;
        > input {
          border-left: 1px solid #c9c9c9;
          border-bottom: 1px solid #c9c9c9;
          text-indent: 6px;
          height: 53px;

          &::placeholder {
            color: #ccc;
            font-size: 14px;
          }
        }
        font-size: 15px;
        span {
          margin: 0 35px;
        }
      }
      .phone {
        display: flex;
        font-size: 16px;
        line-height: 54px;
        position: relative;
        > p {
          position: absolute;
          color: red;
          font-size: 12px;
          top: 100%;
          left: 0;
        }
        span {
          padding: 0 10px;
          flex: 2;
          font-size: 14px;
          border-right: 1px solid #cfcfcf;
          i {
            font-size: 11px;
            color: #ccc;
          }
        }
        input {
          flex: 7;
          text-indent: 8px;
          font-size: 16px;
          &::placeholder {
            color: #ccc;
            font-size: 14px;
          }
        }
      }
      > div {
        height: 54px;
        border: 1px solid #cfcfcf;
        margin-bottom: 30px;
        input {
          height: 100%;
          border: 0;
          outline: 0;
        }
        button {
          width: 100%;
          height: 100%;
          border: 0;
          outline: none;
          background: #01c30b;
          color: white;
          font-size: 16px;
        }
      }
    }
  }
}
.footer {
  border-top: 1px solid #eee;
  line-height: 100px;
  text-align: center;
  background: white;
}
</style>