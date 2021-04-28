import { atom } from "recoil";

export interface Todo {
    id: number,
    text:string,
    isComplete:boolean,
}

export const todoState = atom<Todo[]>({
    key:'todoState',
    default:[],
})