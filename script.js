// Selectors
const taskInput = document.getElementById('task-input')
const addTaskBtn = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')
const inProgressList = document.getElementById('inprogress-list')
const completedList = document.getElementById('completed-list')

// Keep track of the dragged element
let draggedItem = null

// Add event listeners
addTaskBtn.addEventListener('click', addTask)

function addTask() {
  const taskText = taskInput.value.trim()
  if (taskText) {
    const taskItem = createTaskElement(taskText)
    todoList.appendChild(taskItem)
    taskInput.value = ''
  }
}

// Create a new task element
function createTaskElement(taskText) {
  const taskItem = document.createElement('li')
  taskItem.textContent = taskText
  taskItem.className = 'task-item'
  taskItem.setAttribute('draggable', 'true') // Make it draggable

  // Add basic drag event listeners to the task item
  taskItem.addEventListener('dragstart', () => {
    draggedItem = taskItem // Store the dragged item
  })

  taskItem.addEventListener('dragend', () => {
    draggedItem = null // Clear after drop
  })

  const deleteBtn = document.createElement('button')
  deleteBtn.addEventListener('click',()=> taskItem.remove())
  deleteBtn.textContent = 'delete'
  taskItem.append(deleteBtn)

  return taskItem
}
const lists=[todoList,inProgressList,completedList]
lists.forEach(element => {
  element.addEventListener('dragover', (e) => e.preventDefault())
  element.addEventListener('drop', ()=> {
if (draggedItem) {
  console.log(draggedItem)
  element.appendChild(draggedItem)
  } 
  })
})



  
  
