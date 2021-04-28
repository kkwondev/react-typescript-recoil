import { Todo } from "atoms/todoState";
import useTodo from "hooks/useTodo";

export interface TodoItemProps {
   item:Todo,
   index:number,
}

export default function TodoItem({item,index}:TodoItemProps) {
    const {deleteItem,editItemText,toggleItemCompletion} = useTodo();
    return(
        <div>
      <input type="text" value={item.text} onChange={(e) => editItemText(e,index,item.id)} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={() =>toggleItemCompletion(item.id,index)}
      />
      <button type="button" onClick={() => deleteItem(index)}>X</button>
    </div>
    )
}