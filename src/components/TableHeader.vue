<template>
    <thead>
        <tr>
            <th v-for="column in columns" :key="column.key">
            {{ column.label }}
          </th>
        </tr>
    </thead>
</template>

<script setup>
import { defineProps } from 'vue';
/* eslint-disable */

const props = defineProps({
    columns:Array
})
</script>