import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
interface Task {
  id: string;
  title: string;
}

function TodoContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(e.target.value);
  }
  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newTaskTitle.length) return;
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: newTaskTitle },
    ]);
    setNewTaskTitle("");
  }

  function deleteTask(ID: string) {
    setTasks((prev) => [...prev.filter((user) => user.id !== ID)]);
  }
  return (
    <section className="todo-container">
      <div className="input-container">
        <form onSubmit={addTask}>
          <InputField
            value={newTaskTitle}
            type={"text"}
            placeholder={"Add Today Goal..."}
            onChange={inputHandler}
          />
          <Button btnType={"submit"} label={"Add"} />
        </form>
      </div>
      <div className="task-container">
        {tasks.map((taskItem) => (
          <div className="todo-task" key={taskItem.id}>
            <p>{taskItem.title}</p>
            <button onClick={() => deleteTask(taskItem.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TodoContainer;
