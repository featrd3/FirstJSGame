import React from 'react'
import Character from './Character'

const Team = ({ team, turnOrder }) => {


    return (
      <div className = "team">
        {team.map((character) => <Character key = {character.id} character = {character} turnOrder = {turnOrder}/>)}
      </div>
    )
}



export default Team