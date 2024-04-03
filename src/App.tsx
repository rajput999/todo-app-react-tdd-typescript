import React from 'react';
import './App.css'; // Import CSS file for styling

type Priority = 'p1' | 'p2' | 'p3';

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      isCompleted: true,
      priority: 'p1',
    },
  ]);

  const [taskName, setTaskName] = React.useState('');

  const onAddTask = () => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        title: taskName,
        isCompleted: false,
      },
    ]);
    setTaskName('');
  };

  const onDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1>Tasks</h1>
      <div className="label-input">
        <label htmlFor="task-input">Add Task: </label>
        <input
          id="task-input"
          className="task-input"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className="add-button" onClick={onAddTask}>
          Add
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className="task-title">{task.title}</span>
            <button
              className="delete-button"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
