import React, { useState } from 'react';
import './styles.css';

const Card = (cardProps) => {
    // console.log(cardProps);
    const cardDetails = cardProps.myData;
    let [shouldShow, setShouldShow] = useState(false);

    // rendered = displayed on UI
    // to change anything in UI, state neeeds to be changed
    // state asynchronous - executes after the rest of the code is invoked
    // when state is set, whole Functional component re-renders

    const showContent = () => {
        setShouldShow(true);
        console.log(shouldShow);
    }
    
    const hideContent = () => {
        setShouldShow(false);
    }
    
    console.log(shouldShow);

    return (
        <div className='card'  key={cardDetails.title}>
            <h6>{cardProps.title}</h6>
            <p>name : {cardDetails.name}</p>
            <p>age : {cardDetails.age}</p>
            {cardDetails.salary ? <p>salary : {cardDetails.salary}</p> : null}
            <p>emloyeed : {cardDetails.employeed ? 'Employeed' : 'Not employed'}</p>

            <p>{JSON.stringify(shouldShow)}</p>
            
            <input type={'date'} />
            <div>Pick up date</div>

            <button onClick={showContent} > Show Content </button>
            <button onClick={hideContent} > Hide Content </button>
            { shouldShow ? <div>extra content</div> : null}
        </div>
    )
}

export default Card;