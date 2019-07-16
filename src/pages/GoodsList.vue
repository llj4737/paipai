<template>
  <div>
    <Header></Header>
    <div class="goodslist">
      <div class="allcategory">
        <span class="span1">全部闲置</span>
        <ul>
          <li v-for="(list, key) in categoryList" :key="key"
           :class="activeType() === list ? 'active' : ''">{{list}}</li>
          
        </ul>
        <span>
          展开
          <i></i>
        </span>
      </div>
      <div class="filter-title">
        <div class="box-card">
          <div class="card-title">
            <span>手机</span>
          </div>
          <div class="card-body">
            <ul>
              <li class="activeli">综合</li>
              <li>最新发布</li>
              <li>价格</li>
            </ul>
            <div class="sell-price">
              <div>
                <input type="text" placeholder="最低价">
                <i class="iconfont icon-renminbi"></i>
              </div>
              <span>-</span>
              <div>
                <input type="text" placeholder="最高价">
                <i class="iconfont icon-renminbi"></i>
              </div>
              <button>确定</button>
            </div>
            <div class="checkbox">
              <span>
                <input type="checkbox">包邮
              </span>
              <span>
                <input type="checkbox">小白信用认证
              </span>
            </div>
            <div class="page">
              <i class="iconfont icon-xiayige-copy"></i>
              <span>1/90</span>
              <i class="iconfont icon-shangyige"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="list">
        <ul>
          <li v-for="(o, index) in 32" :key="index">
            <div class="title">
              <div>
                <img
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2629116435,785308976&fm=11&gp=0.jpg"
                  alt
                >
                <span>lpsi148</span>
              </div>
              <span>3小时前来过</span>
            </div>
            <img
              class="conImg"
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2578546567,4113366012&fm=26&gp=0.jpg"
              alt
            >
            <div class="intro">
              <h3>8848 钛金手机 M3巅峰版 全网通4G 双卡双待 128G内存</h3>
              <p>活动时买的，新的没用过！</p>
              <div>
                <span class="red">3780.00</span>
                <span class="grey">6999.00</span>
              </div>
              <p>
                <span></span>来自辽宁丹东市凤城市
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="pa">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      currentPage3: 1,
      categoryList: ["手机","笔记本电脑","平板","台式机","手表","箱包","耳机耳麦","路由器","网络盒子",
      "智能手表","游戏手柄","无人机","MP3/MP4","音响/音箱","麦克风","笔记本","一体机","组装机"]
    }
  },
  created() {
    // console.log(222)
  },
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapState(["activeType"]),
    handleSizeChange(){},
    handleCurrentChange(){}
  }
};
</script>

<style lang="scss" scoped>
.goodslist {
  width: 1190px;
  //   height: 5000px;
  // border: 1px solid #ccc;
  position: relative;
  margin: 0 auto;
  .allcategory {
    position: relative;
    background: white;
    margin: 20px 0;
    padding: 22px 60px;
    display: flex;
    justify-content: space-between;
    .span1 {
      font-size: 15px;
      color: red;
    }
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: space-between;
      // border: 1px solid red;
      margin: 0 0 0 30px;
      width: 900px;
      .active{
        color: red;
      }
      li {
        width: 110px;
        margin-right: 30px;
        float: left;
        color: #666;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }
  .filter-title {
    background: white;
    position: relative;
    .box-card {
      .card-title {
        border-bottom: 1px solid #eee;
        padding: 14px 60px;
        span {
          font-size: 15px;
          font-weight: bold;
          color: black;
        }
      }
      .card-body {
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: 14px 60px;
        ul {
          overflow: hidden;
          //   float: left;
          li {
            float: left;
            margin-right: 40px;
            color: black;
            font-weight: bold;
          }
          .activeli {
            color: red;
          }
        }
        .sell-price {
          //   float: left;
          display: flex;
          color: #999;
          margin-right: 70px;
          > div {
            position: relative;
            i {
              position: absolute;
              width: 18px;
              height: 18px;
              left: 2px;
              top: 0;
            }
          }
          span {
            margin: 0 8px;
          }
          input {
            width: 60px;
            height: 24px;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            padding-left: 15px;
            &::placeholder {
              color: #aaa;
            }
          }
          button {
            outline: 0;
            border: 1px solid #ccc;
            width: 50px;
            border-radius: 4px;
            background: white;
            height: 24px;
            color: #666;
            margin-left: 10px;
          }
        }
        .checkbox {
          margin-right: 330px;
          display: flex;
          align-items: center;
          span {
            display: flex;
            align-items: center;
            margin-right: 20px;
            color: black;
            font-weight: bold;
          }
          input[type="checkbox"] {
            margin-right: 4px;
            width: 18px;
            height: 18px;
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
        }
        .page {
          // float: right;
          font-size: 14px;
          i {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
  .list {
    position: relative;
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 290px;
        box-sizing: border-box;
        height: 494px;
        // border: 1px solid red;
        margin-top: 10px;
        padding: 0 10px;
        background: white;
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          > div {
            display: flex;
            align-items: center;
            span {
              font-size: 14px;
              color: black;
              font-weight: bold;
            }
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 10px;
            }
          }
        }
        .conImg {
          width: 100%;
          height: 290px;
          margin-bottom: 8px;
        }
        .intro {
          > div {
            padding: 18px 0 10px;
            .red {
              font-size: 20px;
              color: red;
              margin-right: 12px;
            }
            .grey {
              font-size: 14px;
              color: #666;
              text-decoration: line-through;
            }
          }
          h3 {
            font-size: 14px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            margin-bottom: 6px;
          }
          p {
            color: #999;
          }
        }
      }
    }
  }
}
.pa {
  background: white;
  width: 100%;
  margin: 20px 0 4px;
  padding: 20px 0;
  .block {
      overflow: hidden;
    width: 1190px;
    margin: auto;
    .el-pagination{
        float: right;
    }
  }
}
</style>