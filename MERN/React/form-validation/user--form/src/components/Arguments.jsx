import React,{useState} from "react";
const MyComponent = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }
 
    return props.movies.map( (item, index) => {
        return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button>
    });
}
export default MyComponent;