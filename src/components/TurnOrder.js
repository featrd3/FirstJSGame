import { useState } from "react"


const TurnOrder = ({ onClick, turnOrder }) => {

    return (
      <div className = "turnTable" >
        {turnOrder}
        <button onClick={onClick}>Text</button>
      </div>
    )
}



export default TurnOrder