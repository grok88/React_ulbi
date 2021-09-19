import React, {useEffect, useRef, useState} from 'react';

const CHECKBOX_STATE = {
    checked: 'checked',
    indeterminate: 'indeterminate',
    empty: 'empty'
}

export const Input = () => {
    const [checked, setChecked] = useState(CHECKBOX_STATE.empty);

    const handleChange = () => {
        let updateChecked;

        if (checked === CHECKBOX_STATE.checked) {
            updateChecked = CHECKBOX_STATE.empty;
        } else if (checked === CHECKBOX_STATE.empty) {
            updateChecked = CHECKBOX_STATE.indeterminate;
        } else if (checked === CHECKBOX_STATE.indeterminate) {
            updateChecked = CHECKBOX_STATE.checked;
        }

        setChecked(updateChecked)
    }

    return <div style={{marginTop: 10}}>
        <Checkbox
            value={checked}
            onChange={handleChange}
            label='Custom checkbox'
        />
        <div>Checkbox value : {checked.toString()}</div>
    </div>
}

const Checkbox = ({value, onChange, label}) => {
    const checkboxRef = useRef();

    useEffect(() => {
        if (value === CHECKBOX_STATE.checked) {
            checkboxRef.current.checked = true;
            checkboxRef.current.indeterminate = false;
        } else if (value === CHECKBOX_STATE.empty) {
            checkboxRef.current.checked = false;
            checkboxRef.current.indeterminate = false;
        } else if (value === CHECKBOX_STATE.indeterminate) {
            checkboxRef.current.checked = false;
            checkboxRef.current.indeterminate = true;
        }
    }, [value])

    return <label>
        <input ref={checkboxRef} type="checkbox" value={value === CHECKBOX_STATE.checked} onChange={onChange}/>
        <span style={{paddingLeft: 10}}>{label}</span>
    </label>
}
