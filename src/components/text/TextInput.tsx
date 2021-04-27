import useTextInputState from 'hooks/useTextInputState';
import React from 'react';

export default function TextInput() {
    const {text, onChange} = useTextInputState();
    return(
        <div>
        <input type="text" value={text} onChange={e => onChange(e)} />
        <br />
        Echo: {text}
    </div>
    );
};