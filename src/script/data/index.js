import generateId from "../modules/generateId/index.js"

const data = {
    toDoList: [
        {
            _id: '0',
            name: 'Tirar o lixo',
            done: false,
        },
        {
            _id: '1',
            name: 'Estudar JS',
            done: false,
        },
    ],

    set: (newData) => {
        data.toDoList = newData
    },

    creat: (task) => {
        const list = data.read()
        const id = generateId(40)

        data.set([...list, { _id: id, ...task}])
    },

    read: () => {
        return [...data.toDoList]
    },

    update: () => {

    },

    delete: (id) => {
        const list = data.read()
        const newToDoList = list.filter((item) => item._id !== id)

        data.set(newToDoList)
    }
}

export default data