export const data = (normalDone,importantDone,remaining) => {
  return JSON.stringify([
    { name: 'Normal Done',    value: normalDone },
    { name: 'Important Done', value: importantDone },
    { name: 'Remaining',      value: remaining },
  ])
}





export const COLORS = ['#2d692f', '#ce0808', '#dddddd']
