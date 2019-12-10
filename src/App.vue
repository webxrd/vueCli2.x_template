<!--App.vue根视口-->
<template>
    <div id="app">
        <transition name="ab">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
        },
        created() {
            // 先查是否登录
            this.$store.commit('IsLogin', this);
        },
        mounted() {
            let self = this;
            // 页面关闭时，销毁token
            window.addEventListener('beforeunload', function () {
                self.$tools.delCookie('yxs_token');
            })
        },
        beforeDestroy() {
            // 页面关闭时，销毁token
            this.$tools.delCookie('yxs_token');
        }
    }
</script>

<style lang="scss">
    @import "../static/css/common.scss";
    /*公共样式*/
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        min-height: 100vh;
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
</style>
