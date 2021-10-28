import Element from "../Element/index.js";
import data from '../../data/index.js'
import printList from "../../modules/printList/index.js";

const $mainWrapper = document.querySelector('.main-wrapper')
const $buttonNewTask = document.querySelector('.button-new-task')

const newTask = () => {
        const _newTaskTitle = Element({
        type: 'h2',
        classList: ['new-task__wrapper--header--title'],
        textContent: 'Nova Tarefa'
    })

    const _newTaskClose = Element({
        type: 'i',
        classList: ['fas', 'fa-times', 'new-task__wrapper--header--close'],
        onClick: () => {
            _newTaskWrapper.classList.remove('new-task-open')
        }
    })

    const _newTaskInput = Element({
        type: 'input',
        classList: ['new-task__wrapper--input'],
        placeholder: 'Nova tarefa',
        onKeyDown: (event) => {
            const $parent = document.querySelector('.list__wrapper')
            const key = event.key

            if(key === 'Enter'){
                if(!_newTaskInput.value) return

                data.creat({name: _newTaskInput.value})
                printList(data.read(), $parent)
                _newTaskInput.value = ''
                _newTaskInput.focus()
            }
        }
    })

    const _newTaskButton = Element({
        type: 'div',
        classList: ['button-all', 'new-task__wrapper--button'],
        textContent: '+',
        onClick: () => {
            const $parent = document.querySelector('.list__wrapper')
            if(!_newTaskInput.value) return

            data.creat({name: _newTaskInput.value})
            printList(data.read(), $parent)
            _newTaskInput.value = ''
            _newTaskInput.focus()
        }
    })

    const _newTaskHeader = Element({
        type: 'div',
        classList: ['new-task__wrapper--header'],
        children: [_newTaskTitle, _newTaskClose,]
    })

    const _newTaskWrapper = Element({
        type: 'section',
        classList: ['new-task__wrapper'],
        children: [_newTaskHeader, _newTaskInput, _newTaskButton],
    })

    $mainWrapper.appendChild(_newTaskWrapper)

    $buttonNewTask.addEventListener('click', function(){
        _newTaskWrapper.classList.add('new-task-open')
    })
}

export default newTask