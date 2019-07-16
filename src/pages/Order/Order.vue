<template>
    <div class="my_order">
        <p>我的订单</p>
        <div class="con">
            <ul>
                <li class="active">全部</li>
                <li>待付款</li>
                <li>待发货</li>
                <li>待收货</li>
                <li>待评价</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.my_order{
    background: white;
    height: 300px;
    p{
        line-height: 54px;
        font-size: 18px;
        padding-left: 20px;
        border-bottom: 1px solid #eee;
    }
    .con{
        ul{
            display: flex;
            li {
                flex: 1;
                text-align: center;
                line-height: 60px;
                font-size: 16px;
                box-sizing: border-box;
            }
            .active{
                border-bottom: 3px solid #01c30b;
            }
        }
    }
}
</style>