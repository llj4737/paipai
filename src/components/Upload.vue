<template>
  <div class="my-load">
    <div class="upload" @click="showUpload()">
      <i class="iconfont icon-upload"></i>
    </div>
    <ul>
      <li v-for="(list, index) in imgList" :key="list.id">
        <img :src="list.url" alt>
        <div class="shadow">
          <p @click="deleteImg($event, index)">
            <span class="iconfont icon-ziyuan"></span>
          </p>
        </div>
      </li>
    </ul>
    <input type="file" style="display:none" @change="showFile()" ref="inputfile">
  </div>
</template>

<script>
import { upload } from "../axios/goods";
import axios from "axios";
export default {
  data() {
    return {
      // uploadlist: []
    };
  },
  props: ["imgList"],
  computed: {
  },
  methods: {
    deleteImg(e, index) {
        console.log(1)
        this.imgList.splice(index, 1);
    },
    showUpload() {
      this.$refs.inputfile.click();
    },
    showFile() {
      //   console.log(this.$refs.inputfile.files[0]);
      this.uploadFile();
    },
    async uploadFile() {
      let formData = new FormData();
      formData.append("file", this.$refs.inputfile.files[0]);
      let res = await upload(formData);
      if (res.code === 0) {
        this.imgList.push({ id: +new Date(), url: res.path });
        
        this.$emit("getListFromChild", this.imgList)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.my-load {
  display: flex;
  ul {
    // border: 1px solid #ccc;
    height: 130px;
    overflow: hidden;
    li {
      float: left;
      margin-left: 10px;
      height: 100%;
      width: 130px;
      position: relative;
      &:hover {
        .shadow {
          display: block;
        }
      }
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #0ff;
      }
      .shadow {
        z-index: 100;
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: 0.5);
        &:hover {
          p {
            transform: translate(-50%, -50%);
            opacity: 1;
          }
        }
        p {
          transition: all 0.4s linear;
          color: white;
          margin-top: 50%;
          margin-left: 50%;
          display: inline-block;
          transform: translate(-50%, 0);
          opacity: 0;
          span {
            font-size: 22px;
            cursor: pointer;
            &:hover {
              color: #ccc;
            }
          }
        }
      }
    }
  }
  .upload {
    width: 130px;
    height: 130px;
    border: 1px solid #ccc;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s linear;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 10px #ccc;
    }
    i {
      width: 20px;
      height: 20px;
      color: #aaa;
    }
  }
}
</style>