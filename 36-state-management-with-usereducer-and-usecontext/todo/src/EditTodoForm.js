import React from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, updateTodo, toggleIsEditing }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateTodo(id, value);
        reset();
        toggleIsEditing();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
