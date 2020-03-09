import React from 'react'
import styled from 'styled-components';



export default function CardInfo(props){
    console.log('CardInfo', props.data)

    const Character = styled.div`
     height: 50%;
     width: 20%;
     border: 3px purple;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
 `;

    return (

        <Character>
            <h2>{props.data.name}</h2>

            <ul>
                <li>Gender: {props.data.gender}</li>
                <li>Height: {props.data.height}</li>
                <li>Mass: {props.data.mass}</li>
                <li>BirthYear: {props.data.birth_year}</li>
        
            </ul>
        </Character>
    )
}


