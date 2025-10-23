import { useState } from "react"
import { Form } from "../components/Form/Form"
// import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { toast } from 'react-toastify';

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const notifyInfo = (info: string) => {
    toast.info(info)

  }
  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false
    }
    setTodos([...todos, newToDo])
    notifyInfo(`Добавлена новая задача: ${newToDo.text}`)
  }

  const updateToDo = (toDoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    setTodos(newTodos)
    notifyInfo(`Статус задачи ${toDoItem.text} изменен на ${toDoItem.isDone ? 'выполнен' : 'не выполнен'}`)
  }

  const deleteToDo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
    setTodos(newTodos)
    notifyInfo(`Задача ${toDoItem.text} удалена`)
  }

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>

  )
}