import mutations from "./mutations";
import { login, logout } from "../axios/user";
const actions = {
    async to_login({commit}, data){
        let res = await login(data);
        console.log(res)
        if(res.code === 0) {
            commit("saveLogin", {isLogin: true, user: res.user});
        }else{
            commit("saveLogin", {isLogin: false, user: {}})
        }
    },

    async to_logout({commit}) {
        await logout();
        commit("saveLogin", {isLogin: false, user: {}})
    },

    activeType({commit}, type) {
        // console.log(1111)
        commit("saveActiveType", type)
    },

    saveGoodsList({commit}, goodsList) {
        // console.log(goodsList)
        commit("saveGoodsList", goodsList)
    }

}

export default actions;