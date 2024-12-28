import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {
    const toggleComplete = (index) => {
        const updatedTask = { ...tasks[index], completed: !tasks[index].completed};
        updateTask(index, updatedTask);
    };
  return (
    <ul className='task-list'>
        {tasks.map((tasks, index) => (
            <li key={index} className={tasks.completed ? "completed" : ""}>
         <div>
            <span>{tasks.text}</span>
            <small>({tasks.priority}, {tasks.category})</small>
         </div>
         <div>
            <button onClick={() => toggleComplete(index)}>
                {tasks.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
         </div>
         </li>
        ))}
    </ul>
    
  )
}
