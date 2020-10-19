import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import GetData from './services/GetTodoListService';

export default function TodoList(props){

    const [listData, setListData] = useState(null);
    const [isListLoaded, setIsListLoaded] = useState(false);


    useEffect(() => {
        if(props.isVisible)
        {
            GetData()
            .then((result) => {
                setListData(result);
            })
            .finally(()=> {setIsListLoaded(true);})
        }
    },[props.isVisible]);

    if(!props.isVisible){
        return (
            <h1>
                Data is not visible.
            </h1>
        )
    }

    if(!isListLoaded)
    {
        return (
            <h1>
                Loading...
            </h1>
        )
    }

    if(!listData || !listData.length >0)
    {
        return (
            <h1>
                No data to show.
            </h1>
        )
    }

    return(
        <>
            <h1>From the function component: </h1>
            <ul>
                {
                    listData.map((todoItem) =>{
                        return(
                            <li key={todoItem.id}>
                                {todoItem.title}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
};

TodoList.propTypes = {
    isVisible: PropTypes.bool
};

TodoList.defaultProps = {
    isVisible: false
};