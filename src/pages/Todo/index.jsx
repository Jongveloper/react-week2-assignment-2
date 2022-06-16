import TodoSubmit from '../../components/TodoSubmit';
import TodoList from '../../components/TodoList';

export default function Todo({
  todos,
  inputTodo,
  todoHandler,
  createTodo,
  compelteTodo,
  emptyTodo,
  disabled,
}) {
  return (
    <>
      <h1>Todo</h1>
      <TodoSubmit
        inputTodo={inputTodo}
        todoHandler={todoHandler}
        createTodo={createTodo}
        disabled={disabled}
      />
      <TodoList
        compelteTodo={compelteTodo}
        todos={todos}
        emptyTodo={emptyTodo}
      />
    </>
  );
}