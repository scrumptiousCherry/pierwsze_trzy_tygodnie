import React from 'react';
import './UserOutput.css'
function UserOutput(props){
    return(
    <div className='divFromTask'>
    <p onMouseEnter = {props.msEnt}>Hello {props.name}!</p>
    <p>That's awesome to see you again! :)</p>
    </div>
    );
}

export default UserOutput;