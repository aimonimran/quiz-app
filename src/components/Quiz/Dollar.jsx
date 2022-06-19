import React from 'react';
import dollarData from './dollarData';
import './quiz.css';

const Dollar = ({question}) => {
    return ( 
        <>
            <ul>
                {dollarData.map(value => (
                    <div key={value.id} className={question === value.id ? "dollar__items active" : "dollar__items"}>
                    <li className='dollar-item-id'>{value.id}</li>
                    <li className='dollar-item-value'>{value.dollar}</li>
                </div>
            ))}
            </ul>
        </>
     );
}
 
export default Dollar;