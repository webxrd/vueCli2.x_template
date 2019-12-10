<!--首页-->
<template>
    <div id="home">
        <vHeader text="筛选"></vHeader>
        <div class="paging_wrap">
            <div class="show_max_page">最大<span>{{maxPage}}</span>页</div>
            <div class="paging_content">
                <div  class="paging_btn paging_p" @click="prePage">上一页</div>
                <input type="number" min="1" v-model="page" @blur="inpBlur" max="15" placeholder="" class="paging_page_input">
                <div class="paging_btn paging_n" @click="nextPage">下一页</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'home',
        data() {
            return {
                page: 1,
                maxPage: 1
            }
        },
        created() {
            this.getData();// 获取数据
        },
        methods: {
            // 上一页
            prePage() {
                let page = this.page;
                page--;
                page = page < 1 ? 1 : page;
                this.page = page;
                this.getData();
            },
            // 下一页
            nextPage() {
                let page = this.page;
                page++;
                page = page > this.maxPage ? this.maxPage : page;
                this.page = page;
                this.getData();
            },
            // 页数输入框
            inpBlur() {
                let page = this.page;
                page = page > this.maxPage ? this.maxPage : page;
                page = page < 1 ? 1 : page;
                this.page = page;
            },
            // 获取查询字段
            getSearchField() {
                let sendData = {
                };
                return sendData;
            },

            getData() {
                console.log('获取数据');
            }
        },
        filters: {
            resetTime(time) {
                return new Date(time).toLocaleString()
            }
        },
        mounted() {
            // // 添加多选的点击事件
            // $('.tr_body').on('click','.mut',function(){
            //     console.log($(this)[0]);
            //     let classList = $(this)[0].classList;
            //     if ([...classList].includes('cur')){
            //         classList.remove('cur');
            //     } else {
            //         classList.add('cur');
            //     }
            // });
        }
    }

</script>

<style lang="scss" scoped>
    @import "../../../../static/css/common.scss";

    .w5  {width: 5%;}
    .w10  {width: 10%;}
    .w15  {width: 15%;}
    .w20  {width: 20%;}
    .w25  {width: 25%;}
    .w30  {width: 30%;}
    .w35  {width: 35%;}
    .w40  {width: 40%;}
    .w45  {width: 45%;}
    .w50  {width: 50%;}
    .w55  {width: 55%;}
    .w60  {width: 60%;}
    .w65  {width: 65%;}
    .w70  {width: 70%;}
    .w75  {width: 75%;}
    .w80  {width: 80%;}
    .w85  {width: 85%;}
    .w90  {width: 90%;}
    .w95  {width: 95%;}
    .w100  {width: 100%;}
    #home  {
        width: 100%;
        min-height: 100vh;
        background-color: #f1f1f1;
        padding: 0 0 20px;
    }
    /* 分页器 */
    .paging_wrap   {
        width: 100%;
        padding: 15px 0 0 0;
        border-top: 1px solid #D7D7D7;
        font-size: 15px;
        position: relative;
        /*最大页数*/
        &>.show_max_page  {
            width: 100%;
            text-align: center;
            font-size: 15px;
            margin-bottom: 10px;
        }
        /*按钮盒子*/
        &>.paging_content  {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            /*左右按钮*/
            &>.paging_btn  {
                padding: 4px 8px;
                border: 1px solid #c699b2f2;
                color:#4d4d4d;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                &:active  {
                    opacity: 0.6;
                }
            }
            /*输入框*/
            &>.paging_page_input  {
                margin: 0 6px;
                padding: 3px;
                width: 70px;
            }
        }
        /*删除按钮*/
        &>.delList  {
            font-size: 16px;
            color: #fff;

        }
    }


@media (max-width: 770px) {

}
</style>
