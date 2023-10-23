<template>
  <HeaderComponent />
  <UpdateComponent :editValue="editValue" :itemIndex="itemIndex" @update="toggleForm" v-if="isEdit" />
  <FormComponent v-else />
  <DataTable
    :rows="rows"
    :columns="columns"
    @delete="deleteItem"
    @edit="editItem"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import FormComponent from "@/components/FormComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import DataTable from "@/components/DataTable.vue";
import { useTodoStore } from "@/stores/todo";
import UpdateComponent from "@/components/UpdateComponent.vue";

const store = useTodoStore();
const editValue = ref();
const itemIndex = ref();
const columns = computed(() => store.getTodoColumns);
const rows = computed(() => store.getTodoList);
const isEdit = ref(false);

//delete item
const deleteItem = (index) => {
  store.deleteTodo(index);
};

//edit item
const editItem = (index) => {
  const data = store.getTodoItem(index);
  editValue.value = JSON.parse(JSON.stringify(data));
  itemIndex.value = index;
  isEdit.value = Object.keys(JSON.stringify(data)).length > 0 ? true : false;
};

function toggleForm(val){
  isEdit.value = val;
}

</script>
