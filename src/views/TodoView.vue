<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
const todos = ref([])
const name = ref('')
const inputContent = ref('')
const inputCategory = ref(null)

const addTodo = () => {
  if (inputContent.value.trim() === '' || inputCategory.value === null) {
    return
  }
  todos.value.push({
    content: inputContent.value,
    category: inputCategory.value,
    done: false,
    createdAt: new Date().getTime()
  })

  const todoData = {
    content: inputContent.value,
    category: inputCategory.value
  }

  axios
    .post('http://127.0.0.1:3000/todos', { todo: todoData })
    .then(() => {
      alert('Todo新增成功')
    })
    .catch(() => {
      alert('新增Todo時發生錯誤')
    })

  inputContent.value = ''
  inputCategory.value = null
}

const updateTodo = (updatedData) => {
  axios
    .put(`http://127.0.0.1:3000/todos/${updatedData.id}`, updatedData)
    .then(() => {
      alert('Todo更新成功')
    })
    .catch(() => {
      alert('更新Todo時發生錯誤')
    })
}

const setDoneStatus = (isDone, todo) => {
  todo.done = isDone
  updateTodo(todo)
}

const removeTodo = (deleteData) => {
  if (confirm('是否刪除？')) {
    axios
      .delete(`http://127.0.0.1:3000/todos/${deleteData.id}`, deleteData)
      .then(() => {
        alert('Todo已刪除')
        todos.value = todos.value.filter((t) => t != deleteData)
      })
      .catch(() => {
        alert('刪除Todo時發生錯誤')
      })
  }
}

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

onMounted(() => {
  axios.get('http://127.0.0.1:3000/todos/', { Accept: '*/*' }).then((res) => {
    todos.value = res.data.todo_list.sort((a, b) => b.createdAt - a.createdAt)
    console.log(res.data.todo_list)
  })
  name.value = localStorage.getItem('name') || ''
})
</script>

<template>
  <main class="flex flex-col justify-center my-4 bg-gray-100 rounded-md">
    <section class="my-8 px-6 text-center">
      <h1 class="text-lg">
        嗨～<span class="ml-2 min-w-0 text-lg" contenteditable="true" @input="updateName">{{
          name
        }}</span>
        , 有什麼待辦事項呢？
      </h1>
    </section>
    <section class="my-8 px-6 text-center">
      <h2 class="text-lg mb-2">來建立待辦事項吧！！</h2>
      <form @submit.prevent="addTodo">
        <h4 class="text-lg mb-2">有什麼在您的待辦清單中？</h4>
        <input
          type="text"
          placeholder=" 例:準備簡報"
          v-model="inputContent"
          class="ml-2 min-w-0 border-2 border-gray-400 rounded-md"
        />
        <h4 class="text-lg mb-2">請選擇分類</h4>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <label
            class="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md cursor-pointer"
          >
            <input
              type="radio"
              name="radio-7 category"
              class="radio radio-primary"
              value="business"
              v-model="inputCategory"
            />
            <span>工作事項</span>
          </label>
          <label
            class="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md cursor-pointer"
          >
            <input
              type="radio"
              name="radio-3 category"
              value="personal"
              v-model="inputCategory"
              class="radio radio-secondary"
            />
            <span>個人事項</span>
          </label>
        </div>
        <input
          class="bg-pink-500 px-4 py-2 rounded-lg cursor-pointer text-white w-full"
          type="submit"
          value="加入待辦清單"
        />
      </form>
    </section>
    <section class="my-8 px-6">
      <h2 class="text-lg my-2 text-center">我的待辦清單</h2>
      <div class="my-2">
        <div v-for="todo in todos" :key="todo.id" class="todo-item" :class="{ done: todo.done }">
          <label class="mr-2 cursor-pointer">
            <input
              type="checkbox"
              v-model="todo.done"
              @change="setDoneStatus($event.target.checked, todo)"
              class="mx-2 checkbox checkbox-sm checkbox-secondary"
            />
            <input
              type="text"
              :class="todo.category"
              :style="{ 'text-decoration': todo.done ? 'line-through' : 'none' }"
              v-model="todo.content"
              @keyup.enter="updateTodo(todo)"
            />
            <div class="button-container">
              <button
                class="bg-pink-500 mr-2 rounded-lg px-1 py-1 text-white"
                @click="updateTodo(todo)"
              >
                Update
              </button>
              <button
                class="bg-orange-500 rounded-lg px-1 py-1 text-white"
                @click="removeTodo(todo)"
              >
                Delete
              </button>
            </div>
          </label>
        </div>
      </div>
    </section>
  </main>
</template>
