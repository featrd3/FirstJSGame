import React from 'react'
import Team from './Team'
import TurnOrder from './TurnOrder'


const Scene = ({ teamLeft, teamRight }) => {


    return (
      <div className = "scene">
        <TurnOrder />
        <div className = "battleground">
          <Team team = {teamLeft}/>
          <Team team = {teamRight}/>
        </div>
      </div>
    )
}



export default Scene