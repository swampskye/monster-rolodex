import React from 'react'
import './card.css'
const Card = ({ monster }) => {

    const { id, name, email } = monster


    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <h3>{email}</h3>
        </div>
    )
}

export default Card;
