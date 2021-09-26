import Element from "../Element/index.js";

const $mainWrapper = document.querySelector('.main-wrapper')
const $buttonNewTask = document.querySelector('.button-new-task')

const newTask = () => {
    const _newTaskWrapper = Element({
        type: 'section',
        classList: ['new-task__wrapper']
    })

    const _newTaskHeader = Element({
        type: 'div',
        classList: ['new-task__wrapper--header']
    })

    const _newTaskTitle = Element({
        type: 'h2',
        classList: ['new-task__wrapper--header--title'],
        textContent: 'Nova Tarefa'
    })

    const _newTaskClose = Element({
        type: 'i',
        classList: ['fas', 'fa-times', 'new-task__wrapper--header--close']
    })

    const _newTaskInput = Element({
        type: 'input',
        classList: ['new-task__wrapper--input'],
        placeholder: 'Nova tarefa'
    })

    const _newTaskButton = Element({
        type: 'div',
        classList: ['button-all', 'new-task__wrapper--button'],
        textContent: '+'
    })

    $mainWrapper.appendChild(_newTaskWrapper)
    _newTaskWrapper.appendChild(_newTaskHeader)
    _newTaskHeader.appendChild(_newTaskTitle)
    _newTaskHeader.appendChild(_newTaskClose)
    _newTaskWrapper.appendChild(_newTaskInput)
    _newTaskWrapper.appendChild(_newTaskButton)

    $buttonNewTask.addEventListener('click', function(){
        _newTaskWrapper.classList.add('new-task-open')
    })

    _newTaskClose.addEventListener('click', function(){
        _newTaskWrapper.classList.remove('new-task-open')
    })
}

export default newTask