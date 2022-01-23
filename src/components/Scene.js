import React from 'react'
import Team from './Team'


const Scene = ({ teamLeft, teamRight }) => {


    return (
      <div className = "scene">
        
        <Team team = {teamLeft}/>
        <Team team = {teamRight}/>
      </div>
    )
}



export default Scene