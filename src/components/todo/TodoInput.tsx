import useTodo from "hooks/useTodo";

export default function TodoInput() {
    const { handleTodoChange, inputValue, addItem } = useTodo();
    return(
        <div>
        <input type="text" value={inputValue} onChange={(e) => handleTodoChange(e)} />
        <button type="button" onClick={() => addItem()}>Add</button>
      </div>
    );
}