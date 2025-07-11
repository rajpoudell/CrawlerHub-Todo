<script>
  export let newTodo;
  export let onInput;
  export let onAdd;
</script>

<div class="todo-input-wrapper">
  <input
    type="text"
    bind:value={newTodo}
    on:input={onInput}
    on:keydown={(e) => e.key === 'Enter' && onAdd()}
    placeholder="Add a task..."
    class="todo-input"
  />
  <button on:click={onAdd} class="add-btn" aria-label="Add Task">+</button>
</div>
