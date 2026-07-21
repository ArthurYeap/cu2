import BasketballTeam
    from "./props-lesson/basketballTeam.jsx";

function ShowBasketballTeam (){
    const newBasketballTeam ={
        team_name:"Brooklyn Nets",
        team_star_player:"MPJ",
        team_manager:"Mia Lopez",
        players:[
                "MPJ",
                "Nic Claxton",
                "Terrance Mann",
                "Noah Clownley",
                "Zaire Williams"
                ]
    }
    return(
        <div>
            <BasketballTeam {...newBasketballTeam}/>
            <BasketballTeam
                team_name="Los Angeles Lakers"
                team_star_player="LeBron James"
                team_manager="Rob Pelinka"
                players={[
                    "Lebron James",
                    "Luka Doncic",
                    "Dalton Knecht",
                    "Bronny James",
                    "Jake LaRavia"
                ]}
            />
            <BasketballTeam
                team_name="LA Clippers"
                team_star_player="Kawhi Leonard"
                team_manager="Lawrence Frank"
                players={[
                    "Darius Garland",
                    "Kawhi Leonard",
                    "Keatlon Wagler",
                    "Brook Lopez",
                    "DJJ"
                ]}
            />
            <BasketballTeam/>
        </div>
    )
}


export default ShowBasketballTeam;
