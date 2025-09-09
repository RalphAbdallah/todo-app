import React from 'react'

const TaskDoneList = ({tasksDoneList}) => {
  return (
    <div>
      {
        tasksDoneList.map(task => {
          return(
            <div key={task.id} className='taskDoneComponent'>
              <p>{task.task}</p>
              <p>{task.date}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskDoneList