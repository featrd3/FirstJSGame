const ActionLoader = (actionName, activeChar, teamLeft, teamRight, turnOrder) => {

    var charBase = [...teamLeft,...teamRight];

    switch (actionName) { 
        case 'attack': attackAct(charBase, activeChar); break;
        case 'block': console.log("block"); break;
    }
   return

}
/*
const selectSingleTarget = () => {

    var charBase = [...teamLeft,...teamRight];
    return (charBase[0])
}
*/
const attackAct = (charBase, activeChar) => {

    var target = charBase[0];

    target.currentHp = target.currentHp - activeChar.attack;
    return (console.log(activeChar.attack))

}
/*
const block = () => {
    targetID= selectTarget()
    targetID.HP = targetID.HP - attacker.Attack
}
*/
export default ActionLoader