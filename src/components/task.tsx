import React from "react";
//interface
import { TaskInterface } from "../interfaces/task.interface";

interface props {
  task: TaskInterface;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

const Task: React.FC<props> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title inline">
        <h1 className="inline px-3">{title}</h1>
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;
