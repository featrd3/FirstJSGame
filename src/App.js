import {useState} from 'react'
import Scene from './components/Scene'

function App() {

  const [teamLCharacters, setTeamLCharacters] = useState([{
    id:1,
    name: 'ch1 Left',
    maxHp: 100,
    currentHp: 100
    },
    { 
    id:2,
    name: 'ch2 Left',
    maxHp: 105,
    currentHp: 100
    }
  ])

  const [teamRCharacters, setTeamRCharacters] = useState([{
    id:1,
    name: 'ch1 Right',
    maxHp: 90,
    currentHp: 10
    },
    {
    id:2,
    name: 'ch2 Right',
    maxHp: 102,
    currentHp: 50
    }
  ])

  return(
    <div className="border">
      <></>
      <Scene teamLeft = {teamLCharacters} teamRight = {teamRCharacters} />

    </div>

)
}

export default App;
