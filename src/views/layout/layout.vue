<!--主要内容顶级视口-->
<template>
    <div id="layout">
        <!--详情和添加页面不需要缓存。此处exclude值为组件name-->
        <keep-alive exclude="detail,add">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {},
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../static/css/common.scss";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    /* 定义进入过渡的开始状态 */
    .ab-enter {
        @include transform(scale(0) rotate(180deg));
        @extend %opacity0;
    }
    /* 定义进入活动状态 */
    .ab-enter-active  {
        @extend %transition500ms;
    }
    /* 定义进入的结束状态 */
    .ab-enter-to  {
        @include transform(scale(1) rotate(0deg));
        @extend %opacity1;
    }
    /* 定义离开过渡的开始状态 */
    .ab-leave  {
        @include transform(scale(1) rotate(0deg));
        @extend %opacity1;
    }
    /* 定义离开活动状态 */
    .ab-leave-active  {
        @extend %transition500ms;
    }
    /* 定义离开的结束状态 */
    .ab-leave-to  {
        @include transform(scale(0) rotate(180deg));
        @extend %opacity0;
    }


    @media (max-width: 770px) {

    }
</style>
