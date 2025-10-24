import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { ToDo } from "../../models/todo-item"
import { TodoCompletedList, TodoFailedList, TodoListBlock } from "./ToDoList.styled"

export const ToDoList = (props: { todos: ToDo[], deleteToDo: Function, updateToDo: Function }) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        )
      })
  }

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        )
      })
  }

  return (
    <TodoListBlock>
      <TodoFailedList>
        {checkedList()}
      </TodoFailedList>
      <TodoCompletedList>
        {unCheckedList()}
      </TodoCompletedList>
    </TodoListBlock>
  )
}


// import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
// import './ToDoList.scss'
// import { ToDo } from "../../models/todo-item"

// export const ToDoList = (props: { todos: ToDo[], deleteToDo: Function, updateToDo: Function }) => {
//   const checkedList = () => {
//     return props.todos
//       .filter((item) => !item.isDone)
//       .map((item, idx) => {
//         return (
//           <ToDoListItem
//             toDoItem={item}
//             key={idx}
//             updateToDo={props.updateToDo}
//             deleteToDo={props.deleteToDo}
//           />
//         )
//       })
//   }

//   const unCheckedList = () => {
//     return props.todos
//       .filter((item) => item.isDone)
//       .map((item, idx) => {
//         return (
//           <ToDoListItem
//             toDoItem={item}
//             key={idx}
//             updateToDo={props.updateToDo}
//             deleteToDo={props.deleteToDo}
//           />
//         )
//       })
//   }

//   return (
//     <div className="todo-container">
//       <ul className="todo-list failed">
//         {checkedList()}
//       </ul>
//       <ul className="todo-list completed">
//         {unCheckedList()}
//       </ul>
//     </div>
//   )
// }