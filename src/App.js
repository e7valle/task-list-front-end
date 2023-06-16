import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import  { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasksData, setTaskStatus] = useState(TASKS);

  const changeComplete = (id, isComplete) => {
    const newTaskData = tasksData.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task }
        task.isComplete = !isComplete;
        return updatedTask;
      } else {
        return { ...task };
      }
    });
    setTaskStatus(newTaskData);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        {/* Passing in current state  */}
        <div>{<TaskList tasks={tasksData} changeComplete={changeComplete} />}</div>
      </main>
    </div>
  );
};

export default App;
