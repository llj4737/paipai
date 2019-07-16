<template>
  <div>
    <Header></Header>
    <div class="detail">
      <div class="title">
        <h4>首页</h4>
        <span>></span>
        <span class="type">洗衣机</span>
        <span>></span>
        <span>{{goodsData.title}}</span>
      </div>
      <div class="info">
        <div @mousemove="move($event)" @mouseleave="leave($event)" ref="con">
          <!-- <img
            src="https://img10.360buyimg.com/n1/s520x520_jfs/t3226/307/1144042483/82009/aaea7fbf/57c791f3N12e82b41.jpg"
            alt
          >-->
          <img class="leftPic" :src="getImgUrl" alt="图片">
          <div class="box" ref="box" v-show="showbox"></div>
          <div class="rightImg" v-show="showbox">
            <img :src="getImgUrl" alt=""  ref="rightImg">
          </div>
        </div>

        <div class="info-detail">
          <div class="goods-title">
            <img
              src="data:image/png;base64,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"
              alt
            >
            {{goodsData.title}}
          </div>
          <div class="goods-price">
            <p>
              <i>售卖价</i>
              <span class="span1">¥{{goodsData.sellPrice}}</span>
            </p>
            <p>
              <i>原&nbsp;&nbsp;&nbsp;价</i>
              <span class="span2">¥{{goodsData.beforePrice}}</span>
            </p>
            <p>
              <i>发布地</i>
              <span class="span3">{{ (goodsData.address || "").split("-").slice(-2).join(" ")}}</span>
            </p>
            <p class="last">
              <span>包邮</span>
              <span>物品全新</span>
              <span>有发票</span>
            </p>
          </div>
          <div class="goods-owner">
            <div class="owner">
              <img src="https://www.paipai.com/static/avatar@2x.png" alt>

              <div class="username">
                <p>{{getName}}</p>
                <span>5小时前来过</span>
              </div>

              <div class="confirm-name">
                <span>
                  <i class="iconfont icon-shiming"></i>
                  <span>已实名</span>
                </span>
              </div>
              <div class="crefit">
                <span>
                  <i class="iconfont icon-xinyong"></i>
                  <span>信用优秀</span>
                </span>
              </div>
            </div>
            <div class="buy">
              <el-button type="primary">立即购买</el-button>
            </div>
          </div>
          <p class="shoucang">
            <span class="iconfont icon-shoucang"></span>0人已收藏
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { goods_detail } from "../axios/goods";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showbox: false,
      goodsData: {},
      gId: this.$route.params.gId
    };
  },

  created() {
    this.loadgoodsDetail();
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters(["getName"]),
    getImgUrl() {
      // console.log(this.goodsData.imgList)
      return Object.keys(this.goodsData) == ""
        ? ""
        : JSON.parse(this.goodsData.imgList).slice(0, 1)[0].url;
    }
  },
  watch: {
    gId(a, b) {
      console.log(a);
    }
  },
  methods: {
    async loadgoodsDetail() {
      let res = await goods_detail(this.gId);
      res.code == 0 && (this.goodsData = res.detail);
    },
    move(e) {
      this.showbox = true;
      let box = this.$refs.box;
      let con = this.$refs.con;
      let rightImg = this.$refs.rightImg;
      let el = con.offsetLeft;
      let et = con.offsetTop;
      let cl = e.clientX;
      let ct = e.clientY;
      let left = cl - el - box.offsetWidth / 2;
      let top = ct - et - box.offsetHeight / 2;
      left = left < 0 ? 0 : left;
      left = left > con.offsetWidth - box.offsetWidth ? con.offsetWidth - box.offsetWidth : left;
      top = top < 0 ? 0 : top;
      top = top > con.offsetHeight - box.offsetHeight ? con.offsetHeight - box.offsetHeight : top;
      box.style.left = left + "px";
      box.style.top = top + "px";
      rightImg.style.marginLeft = -left*2 + "px";
      rightImg.style.marginTop = -top*2 + "px";
    },
    leave(e) {
      this.showbox = false;
    }
  },
  beforeUpdate() {
    window.scrollTo(0, 0);
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.detail {
  width: 1190px;
  margin: 0 auto 100px;
  .title {
    font-size: 14px;
    display: flex;
    align-items: center;
    height: 60px;
    h4 {
      margin-right: 10px;
    }
    span {
      margin-right: 10px;
      color: #666;
    }
    .type {
      font-weight: bold;
    }
  }
  .info {
    background: white;
    // position: relative;
    height: 1000px;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    > div {
      height: 520px;
      width: 520px;
      position: relative;
      .rightImg{
        width: 520px;
        height: 520px;
        position: absolute;
        left: 106%;
        z-index: 100;
        overflow: hidden;
        img{
          width: 1040px;
          height: 1040px;
          
        }
      }
      .leftPic {
        width: 520px;
        height: 520px;
        border: 1px solid #ccc;
        position: absolute;
      }
      .box {
        width: 260px;
        height: 260px;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        // display: none;
        cursor: move;
      }
    }

    .info-detail {
      width: 578px;
      height: 532px;
      //   border: 1px solid red;
      .goods-title {
        > img {
          width: 78px;
          height: 21px;
          display: inline-block;

          vertical-align: middle;
          margin-bottom: 2px;
        }
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 20px;
      }
      .goods-price {
        background: #f7f7f7;
        padding: 25px 30px;
        margin-bottom: 10px;
        p {
          height: 30px;
          margin-bottom: 10px;
          i {
            font-style: normal;
            font-size: 14px;
            letter-spacing: 2px;
            margin-right: 20px;
          }
          .span1 {
            color: red;
            font-size: 24px;
          }
          .span2 {
            color: #333;
            text-decoration: line-through;
            font-size: 19px;
          }
          .span3 {
            font-size: 14px;
          }
        }
        .last {
          margin-bottom: 0;
          height: 22px;
          > span {
            border: 1px solid red;
            border-radius: 2px;
            margin-right: 14px;
            font-size: 12px;
            color: red;
            padding: 3px;
          }
        }
      }
      .goods-owner {
        border: 1px solid #e9e9e9;
        padding: 20px 30px 16px;
        .owner {
          display: flex;
          padding-bottom: 20px;
          border-bottom: 1px dotted #ccc;
          > img {
            width: 48px;
            height: 48px;
          }
          .username {
            margin-left: 18px;
            p {
              font-weight: bold;
              font-size: 13px;
              margin: 2px 0 8px;
            }
            span {
              color: #999;
            }
          }
          .confirm-name {
            padding: 2px 10px;
            span {
              padding: 3px;
              color: red;
              background: #fff0f0;
            }
          }
          .crefit {
            padding: 2px 10px;
            span {
              padding: 3px;
              background: #faf6ea;
              color: #a17348;
            }
          }
        }
        .buy {
          padding-top: 20px;
          button {
            width: 128px;
            height: 40px;
            background: #ff3434;
            border-color: #ff3434;
            font-size: 16px;
            letter-spacing: 2px;
          }
        }
      }
      .shoucang {
        padding: 10px 30px;
        font-size: 14px;
        color: #ccc;
        > span {
          margin-right: 6px;
        }
      }
    }
  }
}
</style>