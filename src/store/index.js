import Vue from 'vue'
import Vuex from 'vuex'
import { sesSetState, sesGetState } from "@/tools/session";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data:{
            token: '',
            baseApi: process.env.BASE_API
        }
    },
    getters: {
        // 获取全部state中全部data值
        Getters_GetData: (state)=>{
            return state.data
        }
    },
    mutations: {
        Mu_SetData: (state,data) => {   // 通过actions直接设置完整的data
            state.data = data;
        },
        Mu_SetToken: (state,token) => {   // 通过actions直接设置Token
            state.data.token = token;
        },
        // 是否登录
        IsLogin: (state,self) => {
            self.$api.isLogin(self.$tools.getCookie('yxs_token')).then((res) => {
                // console.log(res, 'res___res___res___res___APP_APP');
                let {status, msg} = res.data;
                if (status == 0) {
                    self.$myAlert.show(1,msg,true);
                    self.$router.push('/login');
                }
            }).catch((err) => {
                console.log(err ,'APP__APP__APP__err');
            })
        }
    },
    actions: {  //context默认相当于子组件中的this.$store
        Ac_SetData: (context,data) => {	            // 控制mutations设置完整的 data值
            context.commit('Mu_SetData',data)
        }
    },
});
// 缓存 state.data
window.addEventListener("beforeunload",(ev)=>{
    let stateDate = store.state.data;
    sesSetState(stateDate);
});
// 获取并还原 state.data
let stateData = sesGetState();
if (stateData) {
    store.state.data = stateData;
}
export default store
