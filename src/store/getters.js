const getters = {
    loginStatus(state){
        return state.isLogin
    },
    getName(state){
        return state.loginData.username;
    },
    getUId(state) {
        return state.loginData.uId;
    }
}

export default getters;