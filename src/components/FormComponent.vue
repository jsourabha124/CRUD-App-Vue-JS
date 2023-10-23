<template>
  <div class="container">
    <h2>Form</h2>
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
            v-model="fname"
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
            v-model="lname"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="country">Country</label>
        </div>
        <div class="col-75">
          <select
            id="country"
            name="country"
            v-model="country"
          >
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
          @click="AddUser"
          :disabled="isDisable"
        >
          Add User
        </button>
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref, computed } from "vue";
// import { useTodoStore } from "@/stores/todo.js";
import { useTodoStore } from "../../src/stores/todo";
/* eslint-disable */

const store = useTodoStore();

//new user details object

const fname = computed({
  get: () => newUser.value.fname,
  set: (value) =>  (newUser.value.fname = value),
});

const lname = computed({
  get: () => newUser.value.lname,
  set: (value) =>  (newUser.value.lname = value),
})

const country = computed({
  get: () => newUser.value.country,
  set: (value) =>  (newUser.value.country = value),
})

const newUser = ref({
  fname: "",
  lname: "",
  country: "",
});

//call action from store and add new user details to list
function AddUser() {
  store.createTodo({ ...newUser.value, id: Date.now() });
  newUser.value = { fname: "", lname: "", country: "" };
}

//is Add user button enabled, based on user details field
const isDisable = computed(() =>
  newUser.value.fname == "" ||
  newUser.value.lname == "" ||
  newUser.value.country == ""
    ? true
    : false
);

function updateMessage(event) {
  newUser.fname = event.target.value;
}

// const rows = computed(() => store.getTodoList);
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
  margin: 0% 50%;
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
