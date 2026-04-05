"use client";

import { useEffect, useState } from "react";
import { request } from "../../lib/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await request("/tasks");
    setTasks(res);
  };

  const addTask = async () => {
    await request("/tasks", "POST", { title });
    setTitle("");
    loadTasks();
  };

  const toggle = async (id: number) => {
    await request(`/tasks/${id}/toggle`, "PATCH");
    loadTasks();
  };

  const remove = async (id: number) => {
    await request(`/tasks/${id}`, "DELETE");
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {tasks.map((t) => (
        <div key={t.id}>
          <span>{t.title}</span>
          <button onClick={() => toggle(t.id)}>Toggle</button>
          <button onClick={() => remove(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}