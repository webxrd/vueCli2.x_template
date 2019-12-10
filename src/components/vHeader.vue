<template>
    <div class="vHeader">
        <div class="header_bg pos">
            <div class="header w1000">
                <!-- 返回 -->
                <div class="back" v-show="backShow" @click="()=>$router.go(-1)">
                    <span class="icon iconfont">&#xe653;</span>返回
                </div>
                <!-- 标题内容 -->
                <div class="text">
                    {{text}}
                </div>
<!--                &lt;!&ndash; 回到首页 &ndash;&gt;-->
<!--                <div class="navBtn" v-show="$route.path != '/select_view'" @click="()=>$router.push('/select_view')">-->
<!--                    <span class="icon iconfont">&#xe6bc;</span>-->
<!--                </div>-->
                <div class="navBtn" @click="exit">
                    <span class="icon iconfont">&#xe61b;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vHeader',
        props: {
            text: {
                default: '标题',
                type: String
            }
        },
        data(){
            return{
                backShow: false
            }
        },
        methods: {
            // 退出登录
            exit() {
                let flag = confirm('确认要离开吗？');
                if (!flag) return;
                this.$api.exit().then((res) => {
                    // console.log(res, '退出登录时返回数据');
                    let {status, msg} = res.data;
                    if (status != 0){
                        alert(msg);
                        // 先查是否登录
                        this.$store.commit('IsLogin', this);
                    } else{
                        alert(msg);
                    }

                })
            },
        },
        mounted() {
            // console.log(this.$tools, 'getEleRect');
            // 此数组内包含的path对应的页面不显示返回键
            let hideArr = ['/select_view'];
            if (window.innerWidth > 960 || hideArr.includes(this.$route.path)){
                this.backShow = false;
            } else{
                this.backShow = true;
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../static/css/common.scss";
    /* 页面标题 */
    .vHeader  {
        width: 100%;
        height: 46px;
    }
    .header_bg  {
        width: 100%;
        height: 46px;
        background-color: #e3e5e8;
    }
    /* 定位到顶部 */
    .header_bg.pos  {
        background-color: #e3e5e8;
        position: fixed;
        left: 0;
        top: 0;
    }
    /* 内容盒子 */
    .header  {
        color: #222222;
        line-height: 46px;
        position: relative;
        &>.text  {
            text-align: center;
            font-size: 18px;
            font-weight: 600;
        }
        &>.navBtn  {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 16px;
            padding:0 8px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: pointer;
            &:active  {
                opacity: 0.5;
                color:#000;
            }
            &>.icon  {
                font-size: 20px;
            }
        }
        &>.back  {
            position: absolute;
            top: 0;
            left: 0;
            font-size: 16px;
            padding-left: 8px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            &:active  {
                opacity: 0.5;
                color:#000;
            }
            &>.icon  {
                font-size: 17px;
            }
        }
    }

    @media (max-width: 770px) {
        .vHeader {
            width: 100%;
            height: 1.2432432432432432rem;
        }
        .header_bg {
            width: 100%;
            height: 1.2432432432432432rem;
            background-color: #e3e5e8;
        }
        /* 定位到顶部 */
        .header_bg.pos {
            background-color: #e3e5e8;
            position: fixed;
            left: 0;
            top: 0;
        }
        /* 内容盒子 */
        .header {
            color: #222222;
            line-height: 1.2432432432432432rem;
            position: relative;
            &>.text {
                text-align: center;
                font-size: 0.4864864864864865rem;
                font-weight: 600;
            }
            &>.navBtn {
                position: absolute;
                top: 0;
                right: 0;
                font-size: 0.43243243243243246rem;
                padding:0 0.21621621621621623rem;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                cursor: pointer;
                &:active {
                    opacity: 0.5;
                    color:#000;
                }
                &>.icon {
                    font-size: 0.5405405405405406rem;
                }
            }
            &>.back {
                position: absolute;
                top: 0;
                left: 0;
                font-size: 0.43243243243243246rem;
                padding-left: 0.21621621621621623rem;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                &:active {
                    opacity: 0.5;
                    color:#000;
                }
                &>.icon {
                    font-size: 0.4594594594594595rem;
                }
            }
        }

    }
</style>
