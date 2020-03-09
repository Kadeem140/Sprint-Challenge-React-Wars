import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CardInfo from './CardInfo';


export default function CharacterCard(props){
    console.log('Character Card props', props.starWarsData);

    const mapData = props.starWarsData;

    const CharacterCard = styled.div` 
    width: 80%;
    height: 900px;
    color: black;
    background: tan;
    margin: 0 auto;
    font-size: 1.6rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    `;
    return (
    
    <CharacterCard>
        {mapData.map((data , index) => {
            return <CardInfo data={data} index={index}/>

        })}
        

    </CharacterCard>

        
        )
    // <h1>{props.starWarsData}</h1>


}