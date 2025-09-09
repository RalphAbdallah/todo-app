import { categoryInfo } from './data/categoriesInfo'
import './styles/savedTasks.css'

const SavedTasks = ({tasksList, setTasksList, filter, tasksDoneList, setTasksDoneList, getCategoryColor}) => {
  const deleteItem = (id) => {
    setTasksList(tasksList.filter(t => {return t.id !== id}))
  }
  const addToTaskDone = (id, task, category) => {
    setTasksDoneList([
      ...tasksDoneList, {id, task, date: new Date().toLocaleString(), category: category}
    ]);
    deleteItem(id);
  };
  const isTaskCatPresent = (cat) => {
    let isPresent = false
    tasksList.map(task => {
      if (task.category === cat){
        isPresent = true
      }
    })
    return isPresent
  }
  
  return (
    <div className='savedTasks'>
      {tasksList.length === 0 &&
        <div className='noTasks'>No tasks</div>
      }
      {!filter 
        ?
        tasksList.map(task => {
          if (task.category) {
            return(
              <div key={task.id} className={`savedContainer`} style={{backgroundColor: getCategoryColor(task.category)}}>
                <p className='task'>{task.task}</p>
                <button className='button checkButton' onClick={() => {
                  addToTaskDone(task.id, task.task, task.category)
                }}><img className='check-icon' src="/check.svg" alt="" /></button>
                <button className='button deleteButton' onClick={() => {
                  deleteItem(task.id)
                }}><img className='delete-icon' src="./delete.svg" alt="" /></button>
              </div> 
            )
          }else{
            return(
              <div key={task.id} className={`savedContainer`}>
                <p className='task'>{task.task}</p>
                <button className='button checkButton' onClick={() => {
                  addToTaskDone(task.id, task.task, task.category)
                }}><img className='check-icon' src="/check.svg" alt="" /></button>
                <button className='button deleteButton' onClick={() => {
                  deleteItem(task.id)
                }}><img className='delete-icon' src="./delete.svg" alt="" /></button>
              </div> 
            )
          }
        })
      :
      (isTaskCatPresent(filter) 
        ?
        tasksList.map(task => {
          if (task.category === filter) {
            return(
              <div key={task.id} className={`savedContainer`} style={{backgroundColor: getCategoryColor(task.category)}}>
                <p className='task'>{task.task}</p>
                <button className='button checkButton' onClick={() => {
                  addToTaskDone(task.id, task.task, task.important)
                }}><img className='check-icon' src="/check.svg" alt="" /></button>
                <button className='button deleteButton' onClick={() => {
                  deleteItem(task.id)
                }}><img className='delete-icon' src="./delete.svg" alt="" /></button>
              </div> 
            )
          }
        })
        :
        <div className='notFound'>Category not found</div>
      ) 
      }
    </div>
  )
}

export default SavedTasks