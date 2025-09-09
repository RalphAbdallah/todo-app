export const categoryInfo = JSON.parse(localStorage.getItem('savedCategories')) || [
  {
    id: 1,
    name: 'important',
    backgroundColor: '#ff0000',
    iconURL: './attention-triangle.svg'
  },
  {
    id : 2,
    name: 'home',
    backgroundColor: '#22bae0',
    iconURL: './home.svg',
  },{
    id : 3,
    name: 'work',
    backgroundColor: '#D35400',
    iconURL: './work.svg',
  },{
    id : 4,
    name: 'shopping',
    backgroundColor: '#008080',
    iconURL: './shopping.svg',
  }
]