import Store from "@/store";
import { DocStoreState } from "./doc.interfaces";

Store.registerModule<DocStoreState>("doc", {
  namespaced: true,
  state: {
    docList: undefined
  },
  mutations: {
    setDocList(state, payload) {
      state.docList = payload;
    }
  }
});
