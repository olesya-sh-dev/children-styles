import React from "react";

type Props = {
  tasks: TaskType[];
  children?: React.ReactNode;
};
type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};
export const Crosses = ({ tasks, children }: Props) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <span>{task.id}</span>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
            </li>
          );
        })}
      </ul>
      {children}
      <hr />
    </div>
  );
};
