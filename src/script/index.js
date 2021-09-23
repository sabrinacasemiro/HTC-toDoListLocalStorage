import data from './data/index.js'
import printList from './modules/printList/index.js'

const parent = document.querySelector('.list__wrapper')

printList(data.toDoList, parent)