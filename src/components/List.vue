<template>
  <div class="list">
    <ul>
      <li v-for="(list, index) in dataList" :key="index">
        <img :src="list.img" alt>
        <div class="con">
          <h3>{{list.title}}</h3>
          <p>{{ list.description }}</p>
        </div>
      </li>
    </ul>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  props: ["dataList"]
};
</script>

<style lang="scss" scoped>
.list {
  overflow: hidden;
  ul {
    padding: 30px 10px 10px;
    //   background: #f7f7f7;
    li {
      border: 1px solid #eee;
      padding: 4px;
      // overflow: hidden;
      margin-bottom: 30px;
      display: flex;
      border-radius: 2px;
      background: white;
      > img {
        width: 200px;
        height: 140px;
      }
      .con {
        flex: 1;
        padding: 0 10px;
        > h3 {
          font-size: 18px;
          margin-bottom: 16px;
        }
        > p {
          font-size: 14px;
          // height: 64px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; //行数
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .el-pagination {
    float: right;
  }
}
</style>