import { useState } from "react";
import { Task } from "../types";

export default function AddTaskModal({
  onClose,
  onAddTask,
}: {
  onClose: () => void;
  onAddTask: (task: Task) => void;
}) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask({ title: taskTitle });
      setTaskTitle("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Görev Başlığı"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded mr-2"
            onClick={onClose}
          >
            İptal
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAddTask}
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
