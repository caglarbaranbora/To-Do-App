import { Task } from "../types";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul className="mt-4">
      {tasks.map((task, index) => (
        <li key={index} className="p-2 bg-gray-800 text-white rounded mb-2">
          {task.title}
        </li>
      ))}
    </ul>
  );
}
