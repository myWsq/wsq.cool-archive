<template>
  <div>
    <input-todo-item-add-vue></input-todo-item-add-vue>
    <list-todo-vue class="mt-4"></list-todo-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListTodoVue from "@/modules/todo/ListTodo.vue";
import InputTodoItemAddVue from "@/modules/todo/InputTodoItemAdd.vue";
export default Vue.extend({
  components: {
    ListTodoVue,
    InputTodoItemAddVue
  }
});
</script>

<style scoped></style>
