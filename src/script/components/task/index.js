import Element  from "../Element/index.js"

const Task = (task) => {
    const _task = Element({
        type: 'li',
        classList: ['list__wrapper--task']
    })
    
    const _checkbox = Element({
        type: 'div',
        classList: ['list__wrapper--task--checkbox']
    })

    const _checked = Element({
        tipe: 'i',
        classList: ['fas', 'fa-check', 'list__wrapper--task--checkbox--checked']
    })

    const _nameTask = Element({
        type: 'p',
        classList: ['list__wrapper--task--text'],
        textContent: task.name
    })

    const _trash = Element({
        type: 'i',
        classList: ['far', 'fa-trash-alt', 'list__wrapper--task--trash']
    })

    _task.appendChild(_checkbox)
    _checkbox.appendChild(_checked)
    _task.appendChild(_nameTask)
    _task.appendChild(_trash)

    return _task
}

export default Task