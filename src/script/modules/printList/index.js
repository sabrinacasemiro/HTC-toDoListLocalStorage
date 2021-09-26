import Task from '../../components/task/index.js'

const printList = (List, $parent, clear = true) => {
    clear && ($parent.innerHTML = '')

    List.forEach((item)=> {
       const task = Task(item)

       $parent.appendChild(task)
    });
}

export default printList