
import React, { useState } from "react";
import { Todo, todoState } from "atoms/todoState";
import { useRecoilState } from "recoil";

export default function useTodo() {
    const [inputValue, setInputValue] = useState<string>('');
    const [todoList,setTodoList] = useRecoilState(todoState);
    
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id:getId(),
                text:inputValue,
                isComplete:false,
            },
        ]);
        setInputValue('');
    }

    const handleTodoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    const editItemText = (e:React.ChangeEvent<HTMLInputElement>, index:number,id:number) => {
        const currentItem = todoList.find((List) => List.id === id);
        const newList = replaceItemAtIndex(todoList, index, {
          ...currentItem as Todo,
          text: e.target.value,
        });
    
        setTodoList(newList);
      };
    
      const toggleItemCompletion = (id:number, index:number) => {
        const currentItem = todoList.find((List) => List.id === id);
        const newList = replaceItemAtIndex(todoList, index, {
          ...currentItem as Todo,
          isComplete: !currentItem?.isComplete,
        });
    
        setTodoList(newList);
      };
    
      const deleteItem = (index:number) => {
        const newList = removeItemAtIndex(todoList, index);
    
        setTodoList(newList);
      };

    return {
        addItem,
        handleTodoChange,
        inputValue,
        editItemText,
        deleteItem,
        toggleItemCompletion,

    }
}


let id = 0;
function getId() {
    id += 1;
    return id;
}

function replaceItemAtIndex(arr:Todo[], index:number, newValue:Todo) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  function removeItemAtIndex(arr:Todo[], index:number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }