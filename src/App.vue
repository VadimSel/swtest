<script setup lang="ts">
import MyHello from './components/MyHello.vue'
</script>

<template>
  <MyHello title="Кросовки Puma" :price="9500" :isAdded="true" />
  <!-- <MyHello is-added />
  <MyHello /> -->
</template>

<style scoped></style>
