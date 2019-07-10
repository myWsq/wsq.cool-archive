import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const AppMutations = {
  ON_SCROLL_UP: "on scroll up [App]",
  ON_SCROLL_DOWN: "on scroll down [App]"
};

export const AppStore = new Vuex.Store({
  state: {
    isScrollUp: false
  },
  mutations: {
    [AppMutations.ON_SCROLL_UP](state) {
      state.isScrollUp = true;
    },
    [AppMutations.ON_SCROLL_DOWN](state) {
      state.isScrollUp = false;
    }
  },
  actions: {}
});

export default AppStore;
