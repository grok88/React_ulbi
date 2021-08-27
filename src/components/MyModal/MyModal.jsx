import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({children, isOpen, setIsVisible}) => {
    return (
        <div className={[classes.myModal, isOpen ? classes.active : ''].join(' ')} onClick={() => setIsVisible(false)}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;