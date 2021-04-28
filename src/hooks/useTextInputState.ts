import { textLeanghState, textState } from "atoms/textState";
import { useRecoilState, useRecoilValue } from "recoil";

export default function useTextInputState() {
    const [text, setText] = useRecoilState(textState);
    const textLength = useRecoilValue(textLeanghState);

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    return{
        text,
        onChange,
        textLength
    }
}