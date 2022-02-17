import Action from "./Action";

const Actions = ({ teamLeft, teamRight, turnOrder, turnPass}) => {

    var charBase = [...teamLeft,...teamRight];
    var activeChar = charBase.filter(i => i.id === turnOrder[0])[0];

    return (
        <div className="actionsBorder">
                
           {activeChar.actions.map((action) => <Action key = {action} action = {action} activeChar={activeChar} teamLeft = {teamLeft} teamRight = {teamRight} turnPass = {turnPass} />)}
            
        </div>
    )
}





export default Actions