import React from 'react';
import PropTypes from 'prop-types';
import GetData from './services/GetTodoListService';

export default class TodoListClass extends React.Component{

    state = {
        listData: null,
        isListLoaded: false
    };

    componentDidMount(){
        if(this.props.isVisible)
        {
            GetData()
                .then((result) => {
                    this.setState({
                        listData: result
                    });
                })
                .finally(()=> {
                    this.setState({
                        isListLoaded: true
                    })
                })
        }
    };

    render(){
        if(!this.props.isVisible){
            return (
                <h1>
                    Data is not visible.
                </h1>
            )
        }

        if(!this.state.isListLoaded)
        {
            return (
                <h1>
                    Loading...
                </h1>
            )
        }

        if(!this.state.listData || !this.state.listData.length >0)
        {
            return (
                <h1>
                    No data to show.
                </h1>
            )
        }

        return(
            <>
                <h1>From the class component: </h1>
                <ul>
                    {
                        this.state.listData.map((todoItem) =>{
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
    }
};

TodoListClass.propTypes = {
    isVisible: PropTypes.bool
};

TodoListClass.defaultProps = {
    isVisible: false
};