<template>
  <div>
    <Header :show="true"/>
    <div class="content">
      <div class="nav">
        <div class="nav-list">
          <ul>
            <li v-for="(list, index) in navlist" :key="index">
              <span class="span1">{{list.title[0]}}</span>
              <span class="span3"  style="cursor: pointer;">{{list.title[2]}}</span>
              <span class="span2" @click="toGoodsList(list.title[1])" style="cursor: pointer;">{{list.title[1]}}</span>
            </li>
            <li class="more">
              <p>查看更多</p>
            </li>
          </ul>
          <div class="shadow"></div>
        </div>
        <div class="slide">
          <Carousel autoplay>
            <Carousel-item v-for="(img, index) in imglist" :key="index">
              <div class="demo-carousel">
                <img :src="img.url" alt>
              </div>
            </Carousel-item>
          </Carousel>
        </div>
        <div class="imglist">
          <img @click="toRelease" class="img1" src="https://www.paipai.com/static/img/entrance.018e382.png" alt>
          <img class="img2" src="https://www.paipai.com/static/img/ad.8629c1c.png" alt>
        </div>
      </div>-->
      <div class="sell">
        <img src="https://www.paipai.com/static/img/title.a1fd4a8.png" alt>
        <div class="imgs">
          <img src="https://www.paipai.com/static/img/entrance1.bcd00fa.png" alt>
          <img src="https://www.paipai.com/static/img/entrance2.a90b59d.png" alt>
          <img src="https://www.paipai.com/static/img/entrance3.1158af2.png" alt>
          <img src="https://www.paipai.com/static/img/entrance4.079adee.png" alt>
        </div>
      </div>

      <div class="buy">
        <img src="https://www.paipai.com/static/img/title.db071a7.png" alt>

        <ul>
          <li v-for="(list, index) in buylist" :key="index">
            <p>{{ list.title }}</p>
            <div class="imgwrapper">
              <div class="imglist" v-for="(imgs, index) in list.datalist" :key="index">
                <img :src="JSON.parse(imgs.imgList).slice(0,1)[0].url" alt>
                <!-- <router-link :to="'/goodsdetail/' + imgs.gId" class="introduction">
                  <span>
                    <img
                      src="data:image/png;base64,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"
                      alt
                    >
                    {{imgs.title}}
                  </span>
                  <span class="bottomIn">{{imgs.description}}</span>
                </router-link> -->

                <span class="introduction" @click="linkTo(imgs)">
                  <span>
                    <img
                      src="data:image/png;base64,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"
                      alt
                    >
                    {{imgs.title}}
                  </span>
                  <span class="bottomIn">{{imgs.description}}</span>
                </span>
                <p>¥{{imgs.sellPrice}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import {mapActions} from "vuex"
import {load_goods} from "../axios/goods"
export default {
  data() {
    return {
      navlist: [
        { id: 1, title: ["热门", "手机", "笔记本电脑"] },
        { id: 2, title: ["手机数码", "手机", "耳机耳麦"] },
        { id: 3, title: ["电脑办公", "笔记本", "平板电脑"] },
        { id: 4, title: ["电脑配件", "显示器", "显卡"] },
        { id: 5, title: ["摄影摄像", "单反相机", "微单相机"] },
        { id: 6, title: ["奢侈品", "手表", "箱包"] },
        { id: 7, title: ["家用电器", "冰箱", "洗衣机"] },
        { id: 8, title: ["图书", "教材", "励志"] }
      ],
      imglist: [
        { url: "https://www.paipai.com/static/img/banner1.57aeb9e.png" },
        { url: "https://www.paipai.com/static/img/banner2.def6353.png" },
        { url: "https://www.paipai.com/static/img/banner3.0861f56.png" }
      ],
      buylist: [
        {
          imglist: [
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            }
          ],
          title: "大家电"
        },
        {
          imglist: [
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            }
          ],
          title: "家居软饰"
        },
        {
          imglist: [
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            }
          ],
          title: "生活电器"
        },
        {
          imglist: [
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            }
          ],
          title: "厨房小店"
        },
        {
          imglist: [
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            }
          ],
          title: "手机通讯"
        },
        {
          imglist: [
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            },
            {
              url:
                "https://img10.360buyimg.com/n1/s170x170_jfs/t1/222/11/11813/29489/5bcfd695E387ce424/0913f4119d44870d.jpg!cc_1x1"
            }
          ],
          title: "数码配件"
        }
      ]
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.loadgoods();
  },
  components: {
    Header,
    Footer
  },
  methods: {
    linkTo(imgs) {
      console.log(imgs)
      this.$router.push({
        name: "GoodsDetail",
        params: {gId: imgs.gId,imgs}
      })
    },
    loadgoods () {
      Promise.all([
        load_goods({category: "大家电"}), 
        load_goods({category: "家庭软饰"}), 
        load_goods({category: "生活电器"}), 
        load_goods({category: "厨房小店"}),
        load_goods({category: "手机通讯"}),
        load_goods({category: "数码配件"})
      ]).then(res => {
        // console.log(res)
        this.buylist = res;
        this.saveGoodsList(res)
      })
      
    },
      toRelease(){
          this.$router.push("/release");
      },
      toGoodsList(type){
          this.activeType(type)
          this.$router.push("/goodslist/phone");
      },
      ...mapActions(["activeType", "saveGoodsList"])
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  padding-bottom: 80px;
  height: auto;
  width: 1190px;
//   background: #f7f7f7;
  .nav {
    position: relative;
    margin: 0 auto;
    width: 100%;
    // border: 1px solid red;
    background: white;
    overflow: hidden;

    .nav-list {
      z-index: 100;
      width: 290px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      .shadow {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
      }
      ul {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        .more {
          // padding-top: 10px;
          border-top: 1px solid #999;
          p {
            width: 100%;
            font-size: 15px;
            color: #ccc;
            text-align: center;
            cursor: pointer;
            // line-height: 48px;
          }
        }

        li {
          overflow: hidden;
          width: 290px;
          height: 48px;
          padding: 0 20px;
          box-sizing: border-box;
          color: white;
          line-height: 48px;
          &:hover{
            background: #666;
          }
          span {
            font-size: 13px;
            color: #ccc;
          }
          .span1 {
            //   float: left;
            font-size: 16px;
            color: #efefef;
          }
          .span2,.span3{
              &:hover{
                  color: #eee;
              }
          }

          .span3 {
            float: right;
            // margin-left: 90px;
          }
          .span2 {
            float: right;
            margin-right: 30px;
          }
        }
      }
    }
    .slide {
      width: 990px;
      z-index: 1;
      float: left;
      font-size: 0;
      img {
        width: 990px;
        height: 432px;
      }
    }
    .imglist {
      width: 190px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      img {
        // width: 190px;
        // height: 150px;
        transition: all 0.3s ease-in-out;
        &:hover {
          box-shadow: 0px 0px 15px #bbb, 0px 0px 15px #bbb;
        }
      }
      .img1 {
        width: 190px;
        height: 250px;
      }
      .img2 {
        width: 190px;
        height: 172px;
        position: absolute;
        bottom: 0;
      }
    }
  }
  .sell {
    > img {
      display: block;
      width: 196px;
      height: 61px;
      margin: 30px auto;
    }
    .imgs {
      display: flex;
      justify-content: space-between;
      img {
        width: 290px;
        transition: all 0.3s ease-in-out;
        height: 180px;
        &:hover {
          box-shadow: -2px 2px 18px #bbb;
        }
      }
    }
  }
  .buy {
    > img {
      display: block;
      width: 196px;
      height: 61px;
      margin: 30px auto;
    }
    > ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 590px;
        height: 366px;
        // border: 1px solid red;
        margin-bottom: 10px;
        padding: 0 20px 0 30px;
        box-sizing: border-box;
        background: white;
        > p {
          font-size: 20px;
          color: black;
          padding-left: 10px;
          margin: 28px 0 17px;
          height: 26px;
          border-left: 8px solid red;
        }
        .imgwrapper {
          display: flex;
          justify-content: space-between;
          .imglist {
            
              >img{
                width: 170px;
                height: 170px;
                display: block;
                margin: auto;
                  overflow: hidden;
                  transition: all .5s ease-in;
                  &:hover{
                      transform: scale(1.08);
                  }
              }
            > p {
              color: red;
              font-size: 18px;
              padding-left: 10px;
            }
            .introduction {
              padding: 10px;
              display: block;
              color: black;
              cursor: pointer;
              .bottomIn {
                font-size: 12px;
                color: #aaa;
                margin-top: 8px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                display: block;
                width: 170px;
              }
              span {
                img {
                  width: 70px;
                  //   float: left;
                }
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2; //行数
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }
  }
}
</style>