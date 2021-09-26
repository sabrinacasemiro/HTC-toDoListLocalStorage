import Element  from "../Element/index.js"
import data from "../../data/index.js"
import printList from "../../modules/printList/index.js"

const Task = (props) => {
    const _checked = Element({
        tipe: 'i',
        classList: ['fas', 'fa-check', 'list__wrapper--task--checkbox--checked', 'remove']
    })

    const _checkbox = Element({
        type: 'div',
        classList: ['list__wrapper--task--checkbox'],
        children: [_checked]
    })

    const _nameTask = Element({
        type: 'p',
        classList: ['list__wrapper--task--text'],
        textContent: props.name
    })

    const _inputHide = Element({
        type: 'input',
        classList: ['list__wrapper--task--input', 'remove']
    })

    const _edit = Element({
        type: 'i',
        classList: ['fas', 'fa-pencil-alt', 'list__wrapper--task--edit', 'list__wrapper--task--icon'],
        onClick: (event) => {
            _nameTask.classList.add('remove')
            _inputHide.classList.remove('remove')
            _inputHide.value = props.name
            _inputHide.focus()
        }
    })

    const _trash = Element({
        type: 'i',
        classList: ['far', 'fa-trash-alt', 'list__wrapper--task--trash', 'list__wrapper--task--icon'],
        onClick: (event) => {
            const $parent = document.querySelector('.list__wrapper')
            data.delete(props._id)
            printList(data.read(), $parent)
        }
    })

    const _task = Element({
        type: 'li',
        classList: ['list__wrapper--task'],
        children: [_checkbox, _nameTask, _inputHide, _edit, _trash]
    })

    return _task
}

export default Task