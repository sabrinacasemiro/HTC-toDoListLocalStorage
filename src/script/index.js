import data from './data/index.js'
import newTask from './components/newTask/index.js'
import printList from './modules/printList/index.js'

const parent = document.querySelector('.list__wrapper')

window.addEventListener('keydown', (event) => {
    const key = event.key
    console.log('apertou ESC')
    console.log(key)

    if(key === 'Escape'){
        const $container = document.querySelector('.new-task__wrapper')
        
        $container.classList.remove('new-task-open')
    }
    
})

data.delete()

newTask()
printList(data.read(), parent)