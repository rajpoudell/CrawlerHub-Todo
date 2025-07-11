<script>
  // import { onMount } from 'svelte';
  import BG from './lib/BG.svelte';
  import TodoInput from './lib/TodoInput.svelte';
  import TodoList from './lib/TodoList.svelte';

  let newTodo = '';
  let todos = [];

//   onMount(() => {
//   const stored = localStorage.getItem('todos');
//   if (stored) {
//     todos = JSON.parse(stored);
//   }
// });

  function addTodo() {
    if (newTodo.trim()) {
      todos = [...todos, { text: newTodo, completed: false }];
      newTodo = '';
    }
  }

  function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    todos = [...todos];
  }

  function deleteTodo(index) {
    todos = todos.filter((_, i) => i !== index);
  }
</script>
 <BG />
<main class="app">
 
  <h1 class="title">📝 My To-Do List</h1>

  <TodoInput
    {newTodo}
    onInput={(e) => newTodo = e.target.value}
    onAdd={addTodo}
  />

  <TodoList
    {todos}
    {toggleTodo}
    {deleteTodo}
  />
</main>

