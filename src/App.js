import {useState} from 'react'
import Scene from './components/Scene'
import TurnOrder from './components/TurnOrder'

function App() {

  const [turnOrder, setTurnOrder] = useState ([])

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
    id:3,
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
    id:4,
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

  //initial turn order
  const turnInitialiser = () => {

  var charBase = [...teamLCharacters,...teamRCharacters];
    
  charBase.sort((a, b) => (a.speed > b.speed) ? -1 : (b.maxHp > a.maxHp) ? -1 : (a.id > b.id) ? -1 : 1)

  setTurnOrder(charBase.map((charId) => charId.id))
  }

  //control turn order

  const turnHandler = () => {

    var temp = [...turnOrder,turnOrder[0]];
    temp.shift();
    
    setTurnOrder(temp);

  }
//{(turnOrder === '') ? turnInitialiser():''}
  return(
    <div className="border">
      <div className='init'>{(turnOrder.length === 0) ? turnInitialiser():''}</div>

      <TurnOrder onClick = {turnHandler} turnOrder = {turnOrder}/>
      
      <Scene teamLeft = {teamLCharacters} teamRight = {teamRCharacters} turnOrder = {turnOrder}/>

    </div>

)
}

export default App;
