import React from 'react'
import Team from './Team'



const Scene = ({ teamLeft, teamRight , turnOrder }) => {


    return (
      <div className = "scene">
        <div className = "battleground">
          <Team team = {teamLeft} turnOrder = {turnOrder}/>
          <Team team = {teamRight} turnOrder = {turnOrder}/>
        </div>
      </div>
    )
}



export default Scene