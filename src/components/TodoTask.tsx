import { ITask } from '../Interfaces';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

export default function TodoTask({ task, completeTask }: Props) {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
}
