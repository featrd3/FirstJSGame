import ActionLoader from "../characterActions/ActionLoader"

const Action = ({ action, teamLeft, teamRight, turnOrder, onClick}) => {

    return (
        <div className = "actionsTable" onClick={prepareActionLoader}>
                
        {action}
    
        </div>

    )

    function prepareActionLoader() {
    
        ActionLoader(action, teamLeft, teamRight, turnOrder)
    
    }
}









export default Action