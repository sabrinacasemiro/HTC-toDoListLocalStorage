import data from './data/index.js'
import newTask from './components/newTask/index.js'
import printList from './modules/printList/index.js'

const parent = document.querySelector('.list__wrapper')

data.creat({name: 'teste', done: 'true'})
data.delete()

printList(data.toDoList, parent)
newTask()