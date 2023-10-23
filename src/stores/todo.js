// import { defineStore } from "pinia";

// export const useTodoStore = defineStore("todo", {
//   state: () => ({
//     todos: [],
//   }),

//   actions: {
//     createTodo(todo) {
//       this.todos.push({
//         id: Date.now(),
//         ...todo,
//       });
//     },
//     deleteTodo(index) {
//       this.todos.splice(index, 1);
//     }
//   },

//   getters: {
//     getTodoList: (state) => state.todos,
//     getTodoColumns: () => {
//       return [
//         {
//           key: "fname",
//           label: "First name",
//         },
//         {
//           key: "lname",
//           label: "Last Name",
//         },
//         {
//           key: "country",
//           label: "country",
//         },
//       ];
//     },
//   },
// });

import { ref, computed } from 'vue';
import { defineStore } from "pinia";

export const useTodoStore = defineStore('todoStore', () => {

    // Define a reactive property for todos
    const todos = ref([]);

    // Define actions
    const createTodo = (todo) => {
      todos.value.push({
        id: Date.now(),
        ...todo,
      });
    };

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const updateObject = (index, todo) => {
      todos.value[index.value] = todo.value;
    };

    // Define getters
    const getTodoList = computed(() => todos.value);

    //get list based on index
    const getTodoItem = (index) => todos.value[index];

    const getTodoColumns = computed(() => [
      {
        key: "fname",
        label: "First name",
      },
      {
        key: "lname",
        label: "Last Name",
      },
      {
        key: "country",
        label: "Country",
      },
    ]);

    // Return the properties and methods
    return {
      todos,
      createTodo,
      deleteTodo,
      updateObject,
      getTodoList,
      getTodoItem,
      getTodoColumns,
    };
  },
);

