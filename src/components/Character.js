import React from 'react'
import HpBar from './HpBar'
import CharacterModel from './CharacterModel'
import BonusBar from './BonusBar'


const Character = ({ character }) => {


    return (
      <div className = {`${character.isActive ? 'active':''}`}>
      <div className = "character">
        

          <div className = "status">
          <HpBar currentHP = {character.currentHp} maxHP = {character.maxHp} hpLimits={character.hpLimits}/>
          <BonusBar value = {character.bonus} color = {character.bonusColor}/>
          <h1>{character.name}</h1>
          </div>

          <CharacterModel character={character}/>
          
      </div>
      </div>
    )
}



export default Character