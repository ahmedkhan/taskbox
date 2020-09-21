import React from "react";
//interface
import { TaskInterface } from "../interfaces/task.interface";

interface props {
  task: TaskInterface;
  onArchiveTask: boolean;
  onPinTask: boolean;
}

const Task: React.FC<props> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div>
      <div className="list-item">
        <input type="text" value={title} readOnly={true} />
      </div>
    </div>
  );
};

export default Task;
