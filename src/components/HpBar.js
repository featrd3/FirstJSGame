import React from 'react'
import ProgressBar from './ProgressBar';


const HpBar = ({ currentHP, maxHP, hpLimits }) => {

    var currentPercentage = (currentHP/maxHP*100);
    if (currentPercentage>100){
        currentPercentage=100;
    }



    return (
        <div>
        <ProgressBar 
        bgcolor = {
            currentPercentage<hpLimits[0]?'red':
            currentPercentage<hpLimits[1]?'yellow':'green'

        }
        current = {currentPercentage.toFixed(2)}/> 
        
        </div>
    )
    
}



export default HpBar