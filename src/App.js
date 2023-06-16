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
  const [taskStatus, setTaskStatus] = useState(TASKS);

  const changeComplete = (id, isComplete) => {
    const newTask = taskStatus.map(task) => {
      if (task.id === id) {
        const updatedTask = { ...TASKS }
        if () {
          something 
        } else if () {
          something 
        }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKS} />}</div>
      </main>
    </div>
  );
};

export default App;
