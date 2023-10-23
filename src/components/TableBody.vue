<template>
    <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="row.id"
          class="border-b dark:border-gray-700"
        >
          <td v-for="column in columns" :key="column.key">
            {{ row[column.key] }}
          </td>
          <td> 
            <button @click="editData(index)" data-type="edit" class="edit-btn">Edit</button>
            <button @click="removeData(index)" data-type="delete" class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
/* eslint-disable */

const props = defineProps({
    columns:Array,
    rows:Array
})

const emit = defineEmits(['delete'])

function removeData(index) {
  emit("delete", index);
}

function editData(index){
  emit("edit", index);
}
</script>