import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";

import { DispatchContext } from "./contexts/todo.context";

function EditTodoForm({ id, task, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "UPDATE", id: id, task: value });
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
