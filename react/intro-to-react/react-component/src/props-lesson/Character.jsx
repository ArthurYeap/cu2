function Character (props) {
    return(
        <>
            <div className ="card border-1 border-white text-center shadow-sm !m-[1rem] !w-[18rem]">
                <div className="card-body">
                    <h2 className="card-title mb-2">{props.character_name}</h2>
                    <h3 className="card-subtitle mb-3 text-muted text-uppercase">{props.character_element}</h3>
                    <p className="card-rext fs-5 font-bold text-blue mb-0">{props.character_power_level}</p>
                </div>
            </div>
        </>
    )
}
export default Character