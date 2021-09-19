import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, current, ...props}) => {
    return (
        <button { ...props} className={`${classes.myBtn} ${props.current ? classes.current : ''}`}>
            {children}
        </button>
    );
};

export default MyButton;