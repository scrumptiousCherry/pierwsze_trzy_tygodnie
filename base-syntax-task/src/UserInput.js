import React from 'react';
// import './UserInput.css'

function UserInput(props)
{
    // const style = {
    //     position: 'absolute',
    //     left: 600,
    //     top: 250,
    //     backgroundColor: 'burlywood'
    //   }
    return(
        <input 
        style = {{position: 'absolute',
        left: 250,
        top: 300,
        backgroundColor: 'burlywood'}}
        className='inputFromTask' 
        onChange = {props.changedInput}/>
    );
}
export default UserInput;