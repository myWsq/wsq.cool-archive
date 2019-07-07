<template>
  <div class="bg-gray-100">
    <ul v-if="list && list.length">
      <li
        v-for="(item, i) in list"
        :key="i"
        class="p-4 flex justify-between text-3xl"
      >
        <section>
          <span class="text-gray-700 mr-4">{{ item.text }}</span>
          <span class="text-gray-400">{{ item.createdAt }}</span>
        </section>
        <section>
          <em
            class="cursor-pointer p-4 text-red-600 hover:text-red-400 hover:font-bold"
            @click="onDeleteIconClick(i)"
            >x</em
          >
        </section>
      </li>
    </ul>
    <h1
      v-else-if="list && list.length === 0"
      class="text-center text-gray-500 p-4"
    >
      No Data
    </h1>

    <h1 v-else class="text-center text-gray-500 p-4">Loading...</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TodoStore } from "./todo.store";
import { TodoMutations } from "./todo.mutations";
import { TodoStoreDeleteItemPayload } from "./todo.interfaces";
export default Vue.extend({
  computed: {
    list() {
      return TodoStore.state.list;
    }
  },
  methods: {
    onDeleteIconClick(index: number) {
      const payload: TodoStoreDeleteItemPayload = {
        index
      };
      TodoStore.commit(TodoMutations.REMOVE_ITEM, payload);
    }
  }
});
</script>
