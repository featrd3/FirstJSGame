import React from 'react'
import ProgressBar from './ProgressBar';


const HpBar = ({ currentHP, maxHP }) => {

    var currentPercentage = (currentHP/maxHP*100);

    return (
        <ProgressBar 
        bgcolor = {'#008000'}
        current = {currentPercentage.toFixed(2)}
        />
    )
}



export default HpBar