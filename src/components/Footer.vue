<template>
    <div class="footer">
        <div class="imgwrapper">
            <img src="https://www.paipai.com/static/img/bottom_slogan@2x.306d20c.png" alt="">
        </div>
        <div class="about">
            <p class="p1">
                <span>关于拍拍</span>
                <span>|</span>
                <span>联系我们</span>
            </p>
            <p class="p2">
                <span>粤ICP备13011462号-2</span>
                <span>客服电话：400-612-2333</span>
                <span>Copyright©2017-2018 拍拍paipai.com版权所有</span>
            </p>
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.footer{
    .imgwrapper{
        background: white;
        img{
            margin: 70px 0 60px 200px;
            width: 530px;
            height: 40px;
        }
    }
    .about{
        background: #2e2e2e;
        padding: 30px 0;
        color: #aaa;
        text-align: center;
        p{
            line-height: 22px;
            span{
                &:nth-child(2){
                    margin: 0 18px;
                }
            }
        }
        
    }
    

}
</style>