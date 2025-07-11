<script>
  import TodoItem from './TodoItem.svelte';
  export let todos = [];
  export let toggleTodo;
  export let deleteTodo;
</script>

<ul>
  {#each todos as todo, index}
    <TodoItem
      {todo}
      onToggle={() => toggleTodo(index)}
      onDelete={() => deleteTodo(index)}
    />
  {/each}
</ul>
