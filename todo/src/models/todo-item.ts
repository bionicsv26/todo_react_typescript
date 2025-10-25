export interface ToDo {
    id: string,
    text: string,
    isDone: boolean
}

export interface ComponentProps {
    todos: ToDo[]
}