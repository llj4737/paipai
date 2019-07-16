const mutations = {
   saveLogin(state, loginData) {
       state.loginData = loginData.user;
       state.isLogin = loginData.isLogin;
   },
   logout(state) {
    state.loginData = {};
    state.isLogin = false;
   },

   saveActiveType(state, type) {
    //    console.log(222)
    state.activeType = type;
   },
   saveGoodsList(state, goodsList) {
       state.goodsList = goodsList;
   }
}


export default mutations;