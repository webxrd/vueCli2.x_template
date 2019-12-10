<!--登录-->
<template>
    <div id="login" class="login">
        登录
    </div>
</template>

<script>
    import MD5 from '@/tools/md5'
    export default {
        name: 'login',
        data() {
            return {
                bg: require('../../static/imgs/login_background.png'),
                username: '',
                password: ''
            }
        },
        created() {
        },
        methods: {
            submit() {
                this.$api.login(this.username, MD5(this.password)).then((res) => {
                    let {status, msg, token} = res.data;
                    // 存储token
                    this.$tools.setCookie('yxs_token', token);
                    this.$store.commit('Mu_SetToken', token);
                    setTimeout(() => {
                        // console.log(this.$store.state.data, 'this.$store.state.data')
                    }, 500);
                    if (status) {
                        this.$router.push('/home');
                    } else{
                        this.$myAlert.show(1,msg,true, 1000);
                    }
                })
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    @media (max-width: 770px) {

    }
</style>
