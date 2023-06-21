import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import  { useState, useEffect } from 'react';
import axios from 'axios';


// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {
  const [tasksData, setTaskData] = useState([]);
  const API = "https://task-list-api-c17.onrender.com/tasks";

  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        console.log(result.data);
        setTaskData(result.data);
      })
      .catch((err)=> {
        console.log(err);
      });
  }, []);



  const updateTaskData = (taskId, task) => {

    let mark = 'mark_incomplete';
    if (task.isComplete){
      mark = 'mark_incomplete';
    } else {
      mark = 'mark_complete';
    }

    axios
      .patch(`${API}/${taskId}/${mark}`)
      .then((result) => {
        console.log(result.data);
        axios
          .get(API)
          .then((result) => {
            setTaskData(result.data);
            })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    };
    // console.log('UpdateTaskData is being called');
  //   const newTasks = tasksData.map(task => {
  //     if (task.id === taskId) {
  //       // console.log(task.isComplete);
  //       return {...task, isComplete: !task.isComplete};
  //     } else {
  //       return {...task};
  //     }
  //   });
  //   setTaskData(newTasks);
  // };

  
  const deleteTask = (id) => {
    axios
      .delete(`${API}/${id}`)
      .then((result) => {
        console.log(result.data);
        const newTaskData = tasksData.filter(
          (task) => task.id !== id 
        );
        setTaskData(newTaskData);
      })
      .catch((err) => {
        console.log(err);
      });
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
  // const deleteTask = (id) => {
  //   const newTaskData = tasksData.filter(
  //     (task) => task.id !== id 
  //   );
  //   setTaskData(newTaskData);
  // };


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
