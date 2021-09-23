import Task from '../../components/task/index.js'

const printList = (List, parent) => {
    List.forEach((item)=> {
       const task = Task(item)

       parent.appendChild(task)
    });
}

export default printList