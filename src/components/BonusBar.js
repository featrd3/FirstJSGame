import React from 'react'
import ProgressBar from './ProgressBar';


const BonusBar = ({ value, color }) => {

    return (
        <div>
        <ProgressBar 
        bgcolor = {color}
        current = {value.toFixed(2)}/> 
        </div>
    )
    
}



export default BonusBar