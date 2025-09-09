import TaskPieChart from './PieChart'
import './styles/stats.css'
import { fixFormat } from './utils/fixFormat.js';

const Stats = ({tasksDoneList, tasksList,categoryInfoList}) => {
  const normalDone = tasksDoneList.filter(t => t.category === null);
  const labelDone = tasksDoneList.filter(t =>  t.category !== null);
  const remaining    = tasksList.length; 

  const filterCategories = () => {
    let neededCategories = []
    labelDone.forEach(c => {
      if (!neededCategories.includes(c.category)){
        neededCategories.push(c.category)
      }
    })
    return neededCategories
  }
  const categoriesNeededNames = filterCategories()

  const findCatLength = (cat) => {
    return tasksDoneList.filter(t => t.category === cat).length
  }
  const rawNeededColors = () => {
    let colors = []
    categoriesNeededNames.map(c => {
      categoryInfoList.find(category => {
        if (c === category.name){
          colors.push(category.backgroundColor)
        }
      })
    })
    return colors
  }

  const rawData = () => {
    let data = []
    filterCategories().map(category => {
      data.push({name: category, value: findCatLength(category)})
    })
    return data
  }

  const FinalCategoriesNeededNames = ['Normal'].concat(categoriesNeededNames)
  const FinalColorsNeeded = ['#FFFFFF'].concat(rawNeededColors())
  
  const neededColors = () => {
    let colors = ['#FFFFFF'].concat(rawNeededColors())
    colors.push('#dddddd')
    return colors
  }

  const data = () => {
    let data = [ { name: "normal", value: normalDone.length } ].concat(rawData())
    data.push({ name: "remaining", value: remaining })
    return data
  }

  const COLORS = neededColors()
  const Data = data()

  return (
    <div className='stats'>
      {
        <>
          <div className='chart'>
            <TaskPieChart COLORS={COLORS} Data={Data}/>
          </div>
          {(tasksList.length > 0 || tasksDoneList.length > 0) && <>
            <div>
              {FinalCategoriesNeededNames.map((cat,i) => 
                <div key={i} className='legendComponent'>
                  <span className='colorLegend' style={{backgroundColor: FinalColorsNeeded[i % FinalColorsNeeded.length]}}>aall</span>
                  <p>{fixFormat(cat)}</p>
                </div>
              )}
            </div>
              <p className='statsText'><span className='statsDone'>{tasksDoneList.length}</span>/{tasksList.length + tasksDoneList.length}</p>
            {!remaining && 
              <div className='felicitation'>GOOD JOB🎉</div>
            }
          </>}
        </>
      }
    </div>
  )
}

export default Stats