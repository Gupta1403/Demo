import React from "react";
import Card from '../Card';

const cardList = [
    {
      name : 'Sai',
      age: '25',
      salary : 30000,
      employeed : true
    },
    {
      name : "Satwik",
      age: "22",
      salary : 1000000,
      employeed : true
    },
    {
      name : 'Dummy1',
      age: '24',
      employeed : false
    }
  ];
const CardContainer = () => {
    return (
        <div style={{ display: 'flex', columnGap: '16px' }} className='hello' >
            {cardList.map((cardData) => <Card key ={cardData.title} myData={cardData} title='Title of the card' />)}
        </div>
    )
}

export default CardContainer;
