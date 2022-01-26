import {useState} from 'react'
import Scene from './components/Scene'

function App() {

  const [teamLCharacters, setTeamLCharacters] = useState([
    {
    id:1,
  
    name: "overhealShield",
    model: "red",

    maxHp: 100,
    currentHp: 110,
    hpLimits: [33.33,66.66],

    speed: 3,
    attack: 10,

    bonus: 10,
    bonusColor: "blue"
    },
    { 
    id:2,
    name: 'ch2 Left',
    model: 'orange',

    maxHp: 105,
    currentHp: 100,
    hpLimits: [33.33,66.66],

    speed: 2,
    attack: 10,
    bonus: 0,
    bonusColor: 'white'
    }
  ])

  const [teamRCharacters, setTeamRCharacters] = useState([{
    id:1,
    name: 'ch1 Right',
    model: 'blue',

    maxHp: 90,
    currentHp: 10,
    hpLimits: [33.33,66.66],

    speed: 5,
    attack: 10,
    bonus: 50,
    bonusColor: 'black'
    },
    {
    id:2,
    name: 'ch2 Right',
    model: 'purple',

    maxHp: 102,
    currentHp: 50,
    hpLimits: [33.33,66.66],

    speed: 2,
    attack: 10,
    bonus: 50,
    bonusColor: 'white'
    }
  ])

  return(
    <div className="border">
      
      <Scene teamLeft = {teamLCharacters} teamRight = {teamRCharacters} />

    </div>

)
}

export default App;
