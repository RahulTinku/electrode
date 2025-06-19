import { React, ReactSubApp } from "@xarc/react";

interface TodoData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }
  return response.json();
});

const TodoComponent = () => {
  const todoTask: TodoData = React.use(todoPromise) as TodoData;

  return (
    <div>
      <h1>Today's todoTask</h1>
      <p>Todays Task: {todoTask.title}</p>
    </div>
  );
};

//export default TodoComponent;
export const subapp: ReactSubApp = {
  Component: TodoComponent,
};
