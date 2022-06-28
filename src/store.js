import { createStore } from 'vuex'
const state = {
    user: null
}

const getters = {
    user: (state) => {
        return state.user;
    }
}

const actions = {
    user(context, user){
        context.commit('user', user)
    }
}

const mutations = {
    user(state,user){
        state.user = user
    }
}

const store = createStore({
    state,
    getters,
    actions,
    mutations
    // getters:{
    //     user: (state) => {
    //         return state.user;
    //     }
    // },
    // actions:{
    //     user(context, user){
    //         context.commit('user', user)
    //     }
    // },
    // mutations:{
    //     user(state,user){
    //         state.user = user
    //     }
    // }
});

export default store;