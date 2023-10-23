<template>
  <div>
    <h2>User Details</h2>
    <table>
      <TableHeader :columns="columns" />
      <TableBody :rows="rows" :columns="columns" @delete="deleteItem" @edit="editItem"/>
    </table>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import TableHeader from "../components/TableHeader.vue"
import TableBody from "../components/TableBody.vue"

/* eslint-disable */
const emit = defineEmits(['edit', 'delete'])

const props = defineProps({
  rows: Array,
  columns: Array,
});

const deleteItem = (index) => {
  emit("delete", index);
}

const editItem = (index) =>{
  emit("edit", index);
}

</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.edit-btn,
.delete-btn {
  border: none;
  color: white;
  width: 40%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: blue;
}

.delete-btn {
  background-color: red;
}

h2 {
  margin: 2%;
  text-align: center;
}
</style>
