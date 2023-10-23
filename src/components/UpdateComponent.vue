<template>
  <div>
    <div class="container">
      <h2>Update Form</h2>
      <div>
        <div class="row">
          <div class="col-25">
            <label for="namef">First Name</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="namef"
              name="firstname"
              placeholder="Your name.."
              v-model="itemList.fname"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="namel">Last Name</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="namel"
              name="lastname"
              placeholder="Your last name.."
              v-model="itemList.lname"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="country">Country</label>
          </div>
          <div class="col-75">
            <select id="country" name="country" v-model="itemList.country">
              <option value="india">India</option>
              <option value="germany">Germany</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <br />
        <div class="row">
          <button
            class="add-btn"
            :style="{ backgroundColor: isDisable ? '#2c212147' : '#6d4c71' }"
            @click="updateUser"
          >
            Update User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
import { useTodoStore } from "@/stores/todo";
/* eslint-disable */

//store object
const store = useTodoStore();

const emit = defineEmits(["update"]);

const props = defineProps({
  editValue: Object, // Declare the prop type as Object
  itemIndex: Number,
});

function updateUser() {
  store.updateObject(itemIndexRef, itemList)
  emit("update", false);
}

const itemIndexRef = ref(props.itemIndex);
const itemList = ref(props.editValue);
</script>

<style scoped>
* {
  box-sizing: border-box;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 15%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  display: table;
  clear: both;
}

h2 {
  text-decoration: underline;
  margin: 0% 40%;
}

.add-btn {
  float: right;
  border: none;
  color: white;
  padding: 5px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 8%;
}
</style>
