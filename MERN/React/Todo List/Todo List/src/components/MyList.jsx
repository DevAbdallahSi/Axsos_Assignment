import React, { useState, useEffect } from 'react';
// import './App.css'; 

function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("Personal");
  const [dueDate, setDueDate] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      category,
      dueDate,
      isEditing: false
    };
    setTasks(prev => [...prev, task]);
    setNewTask("");
    setDueDate("");
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  const toggleEdit = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const updateText = (id, text) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, text, isEditing: false } : task
      )
    );
  };

  return (
    <div className={`app-container ${dark ? "dark" : "light"}`}>
      <h2>📝 To-Do List</h2>

      <button onClick={() => setDark(d => !d)}>
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="input-group">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              {task.isEditing ? (
                <input
                  value={task.text}
                  onChange={(e) => updateText(task.id, e.target.value)}
                  onBlur={() => toggleEdit(task.id)}
                  autoFocus
                />
              ) : (
                <span onDoubleClick={() => toggleEdit(task.id)}>
                  {task.text} ({task.category}) {task.dueDate && `- Due: ${task.dueDate}`}
                </span>
              )}
            </label>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>

      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoApp;
