import React, { useState } from 'react'
import './styles/AddCategory.css'
const AddCategory = ({categoryInfoList, setCategoryInfoList, setManageCategoryState, inputRef}) => {
  const [img, setImg] = useState(null)
  const [name, setName] = useState('')
  const [color, setColor] = useState('#FFFFFF')
  const handleAddImg = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImg(URL.createObjectURL(file))
    }
  }
  const addToCategoryList = () =>{
    setCategoryInfoList([...categoryInfoList,{
      id: Date.now(),
      name: name,
      backgroundColor: color,
      iconURL: img
    }])
    setManageCategoryState(false)
  }

  return (
    <div className='addCategory-component'>
      <div className='categoryInfo'>
        <div style={{justifyContent: 'space-between'}}>
          <input type="text"  ref={inputRef} placeholder='Category name..' className='nameInput' value={name} onChange={(e) => {setName(e.target.value)}}/>
          <input type="color" value={color} onChange={(e) => {setColor(e.target.value)}} />
        </div>
      </div>
      <div className='inputFile'>
        <input type="file" id='inputImage' accept='image/*' onChange={handleAddImg}/>
        <label htmlFor="inputImage" className='fileLabel'> Upload Image</label>
        {img && <img className='previewImage' src={img} alt="" />}
      </div>
      <div className='submitDiv'>
        <button className='submitButton' onClick={() => addToCategoryList()}>Submit</button>
      </div>
      
    </div>
  )
}

export default AddCategory