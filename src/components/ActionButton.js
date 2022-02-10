import ActionLoader from "../characterActions/ActionLoader"

const ActionButton = ({ action, teamLeft, teamRight, turnOrder}) => {

return (
    <div className = "actionsTable">
                
    {action}

    </div>
)

}

const triggerActionLoader = (action, teamLeft, teamRight, turnOrder) => {

    return ActionLoader(action, teamLeft, teamRight, turnOrder)

} 



export default ActionButton