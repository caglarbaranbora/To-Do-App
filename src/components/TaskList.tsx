import { useState, useEffect } from "react";

export default function TaskList({ value }: { value: string[] }) {
  const [task, setTask] = useState<string[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("value");
    if (savedTasks) {
      setTask(JSON.parse(savedTasks));
    } else {
      setTask(value);
    }
  }, [value]);

  const handleDelete = (index: number) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
    localStorage.setItem("value", JSON.stringify(newTasks));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    console.log(`Checkbox at index ${index} is now: ${e.target.checked}`);
    // Burada, checkbox işaretlendiğinde yapılacak başka bir işlem eklenebilir
  };

  return (
    <ul className="mt-4">
      {value.map((value, index) => (
        <li
          key={index}
          className="flex bg-gray-500 rounded border-black text-xl text-green-500 p-2 gap-4 m-2"
        >
          <input
            type="checkbox"
            onChange={(e) => handleCheckboxChange(e, index)}
          />
          <span>{value}</span>
          <button
            onClick={() => handleDelete(index)}
            className="ml-auto text-red-500 hover:text-red-700"
          >
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
}
