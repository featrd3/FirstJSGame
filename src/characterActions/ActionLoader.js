const ActionLoader = (actionName, teamLeft, teamRight, turnOrder) => {

    switch (actionName) { 
        case 'attack': console.log("attack"); break;
        case 'block': console.log("block"); break;
    }

}

const selectSingleTarget = () => {



}
/*
const attack = () => {
    targetID = 
    targetID.HP = targetID.HP - attacker.Attack
}

const block = () => {
    targetID= selectTarget()
    targetID.HP = targetID.HP - attacker.Attack
}
*/
export default ActionLoader