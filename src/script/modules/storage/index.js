const storage = {
    get: (key) => {
        const data = localStorage.getItem(key)
        const itsObject = data?.includes('{') || data?.includes('[')

        return itsObject ? JSON.parse(data) : data
    },
    set: (key, data) => {
        const dataType = typeof data

        localStorage.setItem(key, dataType === 'object' ? JSON.stringify(data) : data)
    },
    remove: (key) => localStorage.removeItem(key)
}

export default storage