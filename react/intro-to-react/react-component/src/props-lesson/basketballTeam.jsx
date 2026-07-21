import BasketballPlayer
    from "./BasketballPlayer.jsx";

function BasketballTeam({team_name ="Unnamed",team_star_player="Unnamed", team_manager="Unnamed", players=['Unnamed']}){


    return(
        <div>
            <h2>Team Name:{team_name}</h2>
            <h2>Star Player:{team_star_player}</h2>
            <h2>Manager:{team_manager}</h2>
            {players.map((player, index) => {
                return <BasketballPlayer key={index} player_name={player} />;
            })}
        </div>
    )
}

export default BasketballTeam