"use client";

import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";
import AddTaskModal from "../components/AddTaskModal";
import { Task } from "../types";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (task: Task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskList tasks={filteredTasks} />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        Yeni Görev Ekle
      </button>
      {isModalOpen && (
        <AddTaskModal
          onClose={() => setIsModalOpen(false)}
          onAddTask={addTask}
        />
      )}
    </div>
  );
}
