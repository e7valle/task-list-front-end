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
  const [tasksData, setTaskData] = useState(TASKS);

  const updateTaskData = (taskId) => {
    console.log('UpdateTaskData is being called');
    const newTasks = tasksData.map(task => {
      if (task.id === taskId) {
        return {...task, isComplete: !task.isComplete};
      } else {
        return {...task};
      }
    });
    setTaskData(newTasks);
  };
  
  // const changeTaskData = (id, isComplete) => {
  //   const newTask = tasksData.map((task) => {
  //     if (task.id === id) {
  //       const updatedTask = { ...task };
  //       task.isComplete = !isComplete;
  //       return updatedTask;
  //     } else {
  //       return { ...task };
      
  //     }
  //   });
  //   setTaskStatus(newTask);
  // };


  // Copied from the live code in class 
  const deleteTask = (id) => {
    const newTaskData = tasksData.filter(
      (task) => task.id !== id 
    );
    setTaskData(newTaskData);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        {/* Passing in current state  */}
        <div>{<TaskList 
          tasks={tasksData} 
          updateTaskData={updateTaskData} 
          deleteTask={deleteTask}
        />}</div>
      </main>
    </div>
  );
};

export default App;
