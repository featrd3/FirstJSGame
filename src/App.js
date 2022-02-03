import {useState} from 'react'
import Scene from './components/Scene'
import TurnOrder from './components/TurnOrder'
import Actions from './Actions'
import CharacterLoader from './characterBase/CharacterLoader'


function App() {

  const [turnOrder, setTurnOrder] = useState ([])

  const [teamLCharacters, setTeamLCharacters] = useState([
    {
    id:1,
    ...CharacterLoader('overhealShield')
    },
    { 
    id:2,
    ...CharacterLoader('ch2Left')
    }
  ])
  const [teamRCharacters, setTeamRCharacters] = useState([{
    id:3,
    ...CharacterLoader('ch1Right')
    },
    {
    id:4,
    ...CharacterLoader('ch2Right')
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

  return(
    <div className="border">
      <div className='init'>{(turnOrder.length === 0) ? turnInitialiser():''}</div>

      <TurnOrder onClick = {turnHandler} turnOrder = {turnOrder}/>
      
      <Scene teamLeft = {teamLCharacters} teamRight = {teamRCharacters} turnOrder = {turnOrder}/>

      <Actions teamLeft = {teamLCharacters} teamRight = {teamRCharacters} turnOrder = {turnOrder}/>

    </div>

)
}

export default App;
