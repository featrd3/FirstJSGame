import ActionLoader from "../characterActions/ActionLoader"

const Action = ({ action, activeChar, teamLeft, teamRight, turnOrder, turnPass}) => {

    return (
        <div className = "actionsTable" onClick={prepareActionLoader}>
                
        {action}
    
        </div>

    )

    function prepareActionLoader() {
    
        ActionLoader(action, activeChar, teamLeft, teamRight, turnOrder);
        

        turnPass()
    
    }
}









export default Action