import { todoState } from "atoms/todoState";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const todoList = useRecoilValue(todoState);
    return(
        <>
        {todoList.map((todo,index) => (
             <TodoItem key={todo.id} item={todo} index={index}/>
        ))}
        </>
    )
}