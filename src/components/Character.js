import React from 'react'
import HpBar from './HpBar'


const Character = ({ character }) => {


    return (
      <div className = "character">
          <HpBar currentHP = {character.currentHp} maxHP = {character.maxHp}/>
          <h1>{character.name}</h1>

      </div>
    )
}



export default Character