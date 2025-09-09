import { useState, useRef } from 'react'

import './styles/App.css'
import { tasks, tasksDone } from './data/tasks.js'
import { fixFormat } from './utils/fixFormat.js'
import Category from './Category.jsx'
import SavedTasks from './SavedTasks.jsx'
import TaskDoneList from './TaskDoneList.jsx'
import { categoryInfo } from './data/categoriesInfo.js';
import Stats from './Stats.jsx'

const App = () => {
  const [inputTask,setInputTask] = useState('')
  const [tasksList,setTasksList] = useState(tasks)
  const [tasksDoneList,setTasksDoneList] = useState(tasksDone)
  const [emptyTaskMessage, setEmptyTaskMessage] = useState('')
  const [category,setCategory] = useState('')
  const [filter, setFilter] = useState('')
  const inputRef = useRef(null)
  const [categoryInfoList, setCategoryInfoList] = useState(categoryInfo)



  localStorage.setItem('savedTasks',JSON.stringify(tasksList))
  localStorage.setItem('savedDoneTasks',JSON.stringify(tasksDoneList))
  localStorage.setItem('savedCategories',JSON.stringify(categoryInfoList))

  const addTask = () => {
    if (!inputTask) {
      setEmptyTaskMessage("Can't add empty task");
      setTimeout(() => setEmptyTaskMessage(''), 2000); 
      return;
    }
    else{
      if (!category){
        setTasksList([
          ...tasksList,
          { id: Date.now(), task: fixFormat(inputTask), category: null}
        ]);
        setInputTask('');
      }else{
        setTasksList([
          ...tasksList,
          { id: Date.now(), task: fixFormat(inputTask), category: category}
        ]);
        setInputTask('');
      }
    }
  }
  const addImportantTask = () => {
    if (!inputTask) {
      setEmptyTaskMessage("Can't add empty task");
      setTimeout(() => setEmptyTaskMessage(''), 2000); 
      return;
    } else {
      setTasksList([
        { id: Date.now(), task: fixFormat(inputTask), category: 'important'},
        ...tasksList
      ]);
      setInputTask('');
    }
  }
   
  const getCategoryColor = (name) => {
    const result = categoryInfoList.find(category => category.name === name)
    return result ? result.backgroundColor : ''
  }

  return (
    <div className='container'>
      <p className='title'>ToDo App</p>
        <div className='addTask'>
          <p>Add task</p>
          <div className={`addTask-action`} style={{backgroundColor: getCategoryColor(category)}}>
            
            <input ref={inputRef} type="text" placeholder='Enter a task..' onChange={(e) => {
              setInputTask(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter'){
                addTask()
              }
            }}
            value={inputTask}/>
            
            <div className='addTask-action-two'>
              <button className='importantButton' onClick={() => {addImportantTask()}}><img src="todo-app/attention-triangle.svg" alt="" /></button>
              <button className='addButton' onClick={() => {addTask()}}>{<img className='add-icon' src='todo-app/addThick.svg'/>}</button>
            </div>
            
          </div>
          <div className='emptyTaskMessage'>
            {emptyTaskMessage}
          </div>
          <Category filter={filter} setFilter={setFilter} setCategory={setCategory} inputRef={inputRef} categoryInfo={categoryInfo} categoryInfoList={categoryInfoList} setCategoryInfoList={setCategoryInfoList} tasksList={tasksList}/>  
        </div>
      <SavedTasks tasksList={tasksList} setTasksList={setTasksList} filter={filter} tasksDoneList={tasksDoneList} setTasksDoneList={setTasksDoneList} getCategoryColor={getCategoryColor}/>
      {tasksDoneList.length !== 0 && 
      <div className='tasksDone'>
        <div className='tasksDoneTitleComponent'>
          <p className='invisibleText'>abcdawdafwaawawfawga</p>
          <p className='tasksDoneTitle'>Tasks Done</p>
          <p className='tasksDoneClear' onClick={() => {setTasksDoneList([])}}>Clear</p>
        </div>
        {<TaskDoneList tasksDoneList={tasksDoneList}/>}
      </div>
      }
      <Stats tasksDoneList={tasksDoneList} tasksList={tasksList} categoryInfoList={categoryInfoList}/>
    </div>
  )
}


export default App