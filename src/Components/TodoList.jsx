import { useState, useEffect } from "react"

const TodoList = () => {
    const [toDos, setToDos] = useState('')

    useEffect(() => {
        getToDos()

        async function getToDos() {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await res.json()
            setToDos(data)
        }
    }, [])

    return (
        <div>
            {toDos && toDos.map(toDo => {
                const { id, userId, title, completed } = toDo
                return (
                    <div key={id}>
                        <h3>{title}</h3>
                        Assigned to {userId}
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList

