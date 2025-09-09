import { useState } from 'react';
import ManageCategories from './ManageCategories';
import './styles/category.css'
import { fixFormat } from './utils/fixFormat';


const Category = ({filter, setFilter, setCategory, inputRef, categoryInfoList, setCategoryInfoList, tasksList}) => {
  const [manageCategoryState,setManageCategoryState] = useState(false)
  const getCategoryLength = (category) => {
    return tasksList.filter(c => c.category === category).length
  }
  return (
    <div className='category'>
      <div className='category-left'>
        <div>
          <div className='popup-main'>{manageCategoryState && <ManageCategories categoryInfoList={categoryInfoList} setCategoryInfoList={setCategoryInfoList} manageCategoryState={manageCategoryState} setManageCategoryState={setManageCategoryState}/>}</div>
          <div className='category-left-text' onClick={() => setManageCategoryState(!manageCategoryState)}> 
            <p>Category: </p>
            <p className='category-left-text-manage'>Manage</p>
          </div>
          
          {
            categoryInfoList.map(category =>{
            if (category.name !== 'important'){
              return(
                <div key={category.id} className='hover-effect' onClick={() => {setCategory(category.name);inputRef.current.focus()}}>
                  <button style={{backgroundColor: category.backgroundColor}} >
                  {category.iconURL ? <img className='icon' src={category.iconURL} alt={category.name} /> : null}
                  </button>
                  <div className='hover-effect-child'></div>
                </div>
              )}
            })
          }
          
        </div>
      </div>
      <div>
        <button className='removeCatButton' onClick={() => {setCategory('');inputRef.current.focus()}}><img src="./removeCategory.svg" alt="removeCategory" /></button>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          {categoryInfoList.map(category => {
            if (getCategoryLength(category.name)) {
              return ( <option key={category.id} value={category.name}>{fixFormat(category.name)}</option> )
            }
          })}
        </select>
      </div>
    </div>
  )
}

export default Category