import Vuex from "vuex";
import Vue from "vue";
import { TodoMutations } from "./todo.mutations";
import {
  TodoStoreState,
  Todo,
  TodoStoreDeleteItemPayload,
  TodoStoreUpdateItemPayload
} from "./todo.interfaces";
import { AppStore } from "@/store";
import { TodoService } from "./todo.service";

Vue.use(Vuex);

export const TodoStore = new Vuex.Store<TodoStoreState>({
  state() {
    return {
      list: undefined
    };
  },
  mutations: {
    [TodoMutations.INIT_LIST](state, payload: Todo[]) {
      state.list = payload;
    },
    [TodoMutations.ADD_ITEM](state, payload: Todo) {
      state.list && state.list.push(payload);
    },
    [TodoMutations.REMOVE_ITEM](state, payload: TodoStoreDeleteItemPayload) {
      state.list && state.list.splice(payload.index, 1);
    },
    [TodoMutations.UPDATE_ITEM](state, payload: TodoStoreUpdateItemPayload) {
      if (state.list) {
        state.list[payload.index] = payload.item;
      }
    }
  }
});

function init() {
  // required
  AppStore.registerModule("todo", TodoStore);

  if (!TodoStore.state.list) {
    TodoStore.commit(TodoMutations.INIT_LIST, TodoService.getList());
  }
}

init();
