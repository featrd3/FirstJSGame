const CharacterLoader = (charName) => {

    const loadedCharacter = require("./"+charName+".json");

    return (loadedCharacter)
}

export default CharacterLoader