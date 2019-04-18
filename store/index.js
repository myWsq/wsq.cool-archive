export const state = () => ({
    me: null,
    searchBarVisible: false
})

export const mutations = {
    setMe(state, me) {
        state.me = me
    },
    searchBarHide(state){
        state.searchBarVisible = false
    },
    searchBarShow(state){
        state.searchBarVisible = true
    }
}

export const actions = {
    async nuxtServerInit({dispatch}) {
        // await dispatch('getMe')
    },
    async getMe({commit}){
        const {data} = await this.$axios.get(`/yuque/v2/users/${process.env.YUQUE_USER_ID}`)
        commit('setMe',data.data)
    }
}
