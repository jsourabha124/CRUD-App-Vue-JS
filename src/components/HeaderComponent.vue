<template>
  <div class="header">
    <img :src="companyLogo" alt="logo" height="45" width="100" />
    <div class="header-right">
        <span class="user">Welcome User</span>
    </div>
  </div>
</template>

<script setup>
// import logo from "../../public/logo.png";
import { computed } from 'vue';

const companyLogo = computed(()=>"https://upload.wikimedia.org/wikipedia/commons/8/86/Festo_logo.svg")
</script>

<style>
.header {
  overflow: hidden;
  background-color: #ccc;
  padding: 10px 10px;
}

.header-right {
  float: right;
  padding: 10px 10px;
}

.user{
    color: blue;
}
</style>
