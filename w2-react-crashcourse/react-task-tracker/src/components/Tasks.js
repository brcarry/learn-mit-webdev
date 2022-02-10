
import { useState } from "react"

const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'aaa',
                day: '123123',
                reminder: true,
            },
            {
                id: 2,
                text: 'bbb',
                day: '123123',
                reminder: true,
            },
            {
                id: 3,
                text: 'ccc',
                day: '123123',
                reminder: true,
            },
        ]
    )

  return (
    <>
      {tasks.map((task) => (
          <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks