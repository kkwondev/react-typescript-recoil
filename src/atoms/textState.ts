import { atom, selector } from "recoil";

export const textState = atom<string>({
    key:'textState',
    default:'',
})

export const textLeanghState = selector({
    key:'textLeanghState',
    get:({get}) => {
        const text = get(textState)
        return text.length;
    }
})