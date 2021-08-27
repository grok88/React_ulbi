import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

const PostFilter = ({filter, setFilter}) => {
    const options = [{value: 'title', name: 'title'}, {value: 'body', name: 'body'}];

    return <div>
        <MyInput placeholder='Search' value={filter.search}
                 onChange={e => setFilter({...filter, search: e.target.value})}/>
        <MySelect defaultValue={'Сортировка'} options={options} value={filter.sort}
                  changeSelectValue={value => setFilter({...filter, sort: value})}/>
    </div>
};

export default PostFilter;