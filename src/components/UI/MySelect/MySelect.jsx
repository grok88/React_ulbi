import React from 'react';

const MySelect = ({options,defaultValue, value, changeSelectValue}) => {

    return <select value={value} onChange={(e) => changeSelectValue(e.target.value)}>
        <option value="" disabled> {defaultValue}</option>
        {
            options.map(item => <option key={item.value} value={item.value}>{item.name}</option>)
        }
    </select>
};

export default MySelect;