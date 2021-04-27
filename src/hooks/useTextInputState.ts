import { textState } from "atoms/textState";
import { useRecoilState } from "recoil";

export default function useTextInputState() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    return{
        text,
        onChange,
    }
}