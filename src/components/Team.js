import React from 'react'
import Character from './Character'

const Team = ({ team }) => {


    return (
      <div className = "team">
        {team.map((character) => <Character key = {character.id} character = {character}/>)}
      </div>
    )
}



export default Team