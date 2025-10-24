import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { toast } from 'react-toastify';
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../feature/todoList";
import { useAppDispatch, useAppSelector } from '../hooks'

export const ToDoListPage = () => {
  const todoList = useAppSelector((state: RootState) => state.todoList.todos)
  const dispatch = useAppDispatch()

  const notifyInfo = (info: string) => {
    toast.info(info)
  }
  const createNewToDo = (text: string) => {
    dispatch(createAction(text))
    notifyInfo(`Добавлена новая задача: ${text}`)
  }

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem))
    notifyInfo(`Статус задачи ${toDoItem.text} изменен на ${!toDoItem.isDone ? 'выполнен' : 'не выполнен'}`)
  }

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem))
    notifyInfo(`Задача ${toDoItem.text} удалена`)
  }

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>

  )
}