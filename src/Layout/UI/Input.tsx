import classes from './Input.module.scss';
import React from 'react';

type InputProps = {input: {id: string; type: string; classes?: string}; label: string}

const Input = React.forwardRef<HTMLInputElement , InputProps>((props, ref) => {
    return <div className={props.input.classes ? props.input.classes : classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}/>
    </div>
});

export default Input