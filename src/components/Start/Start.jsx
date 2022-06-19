import React, { useRef } from 'react';
import './start.css';

const Start = ({ setUsername }) => {
    const inputRef = useRef();

    const handleClick = () => {
        return inputRef.current.value && setUsername(inputRef.current.value);
    };

    return (
        <div className="start">
            <h1 className='start-header'>Start The Quiz!</h1>
            <input 
                className='start-input' 
                type="text" 
                placeholder='Enter Your Name' 
                ref={inputRef}
            />
            <button onClick={handleClick} className='btn-start'>Start</button>
        </div>
    );
}

export default Start;