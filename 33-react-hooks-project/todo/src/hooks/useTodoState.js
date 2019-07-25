import uuid from "uuid/v4";

import useLocalStorageState from "./useLocalStorageState";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      // filter and remove todo
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      // call setTodos with new todos
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    updateTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    }
  };
};
