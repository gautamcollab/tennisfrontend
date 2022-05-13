import React from "react" 

const Player = ({player, speed, approach, recovery}) => {
    // console.log(player)
    return (
         <div className="player-lobby"> 
            <h1>{player}</h1> 
            <ul>Max Speed: {speed} </ul>
            <ul>Approach: {approach}</ul>
            <ul>Knockback Type: {recovery}</ul>
        </div>
    )
}

export default Player;