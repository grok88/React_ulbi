import React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import {pagesArray} from "../../utils/pages";


export const Pagination = ({totalPages, pages, setPages}) => {
    const pagesArr = pagesArray(totalPages)

    return <div style={{margin: '10px 0'}}>
        {
            pagesArr.map(page => {
                return <MyButton key={page} current={page === pages ? true : false}
                                 onClick={() => setPages(page)}>{page}</MyButton>
            })
        }
    </div>
}

