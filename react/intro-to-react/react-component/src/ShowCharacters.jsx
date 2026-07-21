import Character from "./props-lesson/Character.jsx"
function ShowCharacters(){
    return(
        <>
            <Character
            character_name="James Bond"
            character_element="Web"
            character_power_level="68"
            />
            <Character
            character_name="Superman"
            character_element="Yellow Sun"
            character_power_level="64555"
            />
            <Character
            character_name="Lelouch"
            character_element="Unpredictable"
            character_power_level="1"
            />
        </>
    )
}

export default ShowCharacters