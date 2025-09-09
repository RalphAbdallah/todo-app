import { useState } from "react"
import './styles/index.css'
import { useRef } from "react"
import './styles/ManageCategories.css'
import { fixFormat, initialsOnly } from "./utils/fixFormat"
import AddCategory from "./AddCategory"

const ManageCategories = ({categoryInfoList, setCategoryInfoList, manageCategoryState, setManageCategoryState}) => {
  const [isAddClicked, setIsAddClicked] = useState(false)
  const [editOn, setEditOn] = useState(false)
  const inputRef = useRef(null)
  const deleteCategory = (cat) => {
    setCategoryInfoList(categoryInfoList.filter(category => category.name !== cat))
  }

  return (
    <div className="popup">
      <div className="component-main">
        <div className="component-top">
          <div className="exitButton" onClick={() => {setManageCategoryState(false)}}><img src="/backArrow.svg" alt="" /></div>
          <div className="component-middle">
            <div className="component-middle-left">
              { !editOn ?
                (categoryInfoList.map(category =>{
                  if (category.name !== 'important'){
                    return (
                      <div className="card" key={category.id}>
                        <div className="cardTop" style={{backgroundColor: category.backgroundColor}}>
                          {category.iconURL ? <img className="iconSize" src={category.iconURL} alt="" /> : null}
                        </div>
                        <p>{initialsOnly(fixFormat(category.name))}</p>
                      </div>
                    )
                    }
                  }))
                :
                (categoryInfoList.map(category =>{
                  if (category.name !== 'important'){
                    return (
                      <div className="card" key={category.id}>
                        <div className="removeDiv" onClick={() => {deleteCategory(category.name)}}><img style={{width: '15px'}} src="dash.svg"/></div>
                        <div className="cardTop" style={{backgroundColor: category.backgroundColor}}>
                          {category.iconURL ? <img className="iconSize" src={category.iconURL} alt="" /> : null}
                        </div>
                        <p>{initialsOnly(fixFormat(category.name))}</p>
                      </div>
                    )
                    }
                }))
              }
            </div>
            <div className="component-middle-right" onClick={() => setEditOn(!editOn)}>edit</div>
          </div>
        </div>
        <div className="component-bottom" style={{margin: '10px'}}>
          {isAddClicked ? <AddCategory categoryInfoList={categoryInfoList} setCategoryInfoList={setCategoryInfoList} setManageCategoryState={setManageCategoryState}/> : 
          <div className="addDiv">
            <button className="addCategoryButton" onClick={() => {setIsAddClicked(true)}} >Add</button>
          </div>}
          
        </div>
      </div>
    </div>
  )
}

export default ManageCategories