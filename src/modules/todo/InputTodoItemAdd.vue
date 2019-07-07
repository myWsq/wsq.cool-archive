<template>
  <div>
    <input
      v-model="input"
      :disabled="!list"
      placeholder="Please input your todo"
      @keyup.enter="onEnterClick"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TodoStore } from "./todo.store";
import { Todo } from "./todo.interfaces";
import { TodoMutations } from "./todo.mutations";
export default Vue.extend({
  data() {
    return {
      input: ""
    };
  },
  computed: {
    list() {
      return TodoStore.state.list;
    }
  },
  methods: {
    onEnterClick() {
      if (this.input) {
        const payload: Todo = {
          text: this.input,
          createdAt: new Date()
        };
        TodoStore.commit(TodoMutations.ADD_ITEM, payload);
        this.input = "";
      }
    }
  }
});
</script>

<style lang="postcss" scoped>
input {
  @apply outline-none text-3xl font-thin w-full border border-gray-100 shadow;
  padding: 0.5em 0.75em;
  &:disabled {
    @apply bg-gray-200 cursor-not-allowed;
  }
}
</style>
