import { Store } from "vuex";
import { CommonMutations } from "./common.mutations";
import AppStore from "@/store";

export const CommonStore = new Store({
  state: {
    searchBarVisible: false
  },
  mutations: {
    [CommonMutations.SET_SEARCH_BAR_VISIBLE](state, payload: boolean) {
      state.searchBarVisible = payload;
    }
  }
});

function init() {
  // required
  AppStore.registerModule("common", CommonStore);
}

init();
