import { useState } from "react"


const Actions = ({ teamLeft, teamRight, turnOrder}) => {

    var charBase = [...teamLeft,...teamRight];
    var activeChar = charBase.filter(i => i.id === turnOrder[0])[0];

    return (
        <div className="actionsBorder">
            <div className = "actionsTable" >


                {activeChar.name}


            </div>
      </div>
    )
}



export default Actions