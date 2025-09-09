export const tasks = JSON.parse(localStorage.getItem("savedTasks")) || []

export const tasksDone = JSON.parse(localStorage.getItem('savedDoneTasks')) || []
