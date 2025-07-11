<script>
  export let todo;
  export let onToggle;
  export let onDelete;
  import { Check, Undo2, Trash2 } from 'lucide-svelte';
</script>

<li class="todo-item">
  <span class:completed={todo.completed}>{todo.text}</span>
  <div class="actions">
    <button on:click={onToggle} class="toggle-btn">
      {todo.completed ? 'Undo' : 'Done'}
    </button>
    <button on:click={onDelete} class="delete-btn">Delete</button>
  </div>
</li> 
