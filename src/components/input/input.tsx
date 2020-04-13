import * as React from 'react';
import { StyledInput } from './styled-input';
import { InputProps } from './input-types';

export function Input({ onChange, ...inputProps }: InputProps) {
    const inputRef = React.createRef<HTMLInputElement>();
    const changeHandler = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        const value = ev.target.value;
        onChange(value);
    }, [])

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return <StyledInput type="text" ref={inputRef} {...inputProps} onChange={changeHandler} />
}