<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <nav class="top-0 flex items-center h-16 bg-white shadow-md">
    <RouterLink class="text-xl text-red-400 px-2" to="/">Home</RouterLink>
    <RouterLink class="text-xl text-red-400 px-2" to="/todo">Todo</RouterLink>
    <RouterLink class="text-xl text-red-400 px-2" to="/sign_up">註冊</RouterLink>
    <RouterLink class="text-xl text-red-400 px-2" to="/sign_in">登入</RouterLink>
  </nav>
  <div class="container mx-auto px-10 md:px-0">
    <RouterView />
  </div>
</template>

<style scoped></style>
