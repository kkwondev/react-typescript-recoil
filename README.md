# 상태관리의 중요성
```
- React는 단반향으로 바인딩하는 라이브러리.
- 부모 -> 자식 방향으로만 state 를 props로 전달할수 있음, 자식 -> 부모로 전달하는 방법은 없음.
```

# 자식 -> 부모로 state를 변경할수 있는 방법
```
1. 자식에게 부모의 state 를 변경할수 있는 setState를 props로 전달
2. state management tool (redux,mobx,recoil) 사용
```


### 1번 방식
```
import React, { useState } from "react";
import Children from "./Children.js"

const Parent = () => {
	const [name, setName] = useState('foo');
	return(
    	<div>
        	<Children name={name} setName={setName}/>
        <div />
    );
}

export default Parent;
```
```
import React from "react";

const Children = ({name, setName}) => {
  useEffect(()=>{
  	setName('kkwon');
  },[]);
	return(
    	<div>
        	MY Parent's name is {name}
        </div>
    );
}

export default Children;
```

### Recoil (src/atoms/textState.ts)
```
import { atom, selector } from "recoil";

export const textState = atom<string>({
    key:'textState', // key는 이름을 정해준다. (다른 atom과 구분하기 위해)
    default:'', // 값을 지정해준다 ex) const [text,setText] = useState('여기에 입력 하는것과 똑같다.')
})

export const textLeanghState = selector({ // selector는 파생된 state를 나타낼수 있다. 원래의 state를 가져오는 것이 아닌 get 프로퍼티를 이용해 가공하여 반환한다.
    key:'textLeanghState',
    get:({get}) => {
        const text = get(textState)
        return text.length; // textState를 가공하여 length를 가져온다.
    }
})
```
