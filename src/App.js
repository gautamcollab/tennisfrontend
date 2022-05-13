import React, {useState, useEffect} from "react";
import Player from "./components/Player";

export default function App() {
  const [characters, setCharacter] = useState([])
  const [player, setSelectedPlayer] = useState([])
  const [speed, setSpeed] = useState([])
  const [approach, setApproach] = useState([]) 
  const [recovery, setRecovery] = useState([]) 
  

  const [form, setForm] = useState({
    character: "", 
    topspin: 0, 
    slicing: 0, 
    flat: 0, 
    approach: 0, 
    baseline: 0, 
    doubletapflat: 0, 
    doubletapslice: 0, 
    max_speed: 0, 
    acceleration: 0, 
    pivot: 0, 
    horizontal: 0, 
    knockback_type: 0, 
    lunge_recovery: 0, 
    knockback_reduction: 0

  })

 

  useEffect(() => {
    (async () => {
      let req = await fetch('http://localhost:9292/characters')
      let res = await req.json() 
      setCharacter(res)
      console.log(res)
    })()
  }, [])

  const addChar = async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:9292/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    let res = await req.json() 
    setCharacter((prevState) => [...prevState, res])
  }
  
  return (
    <div> 
       <div className="player-container">
     {
       characters.map((e, i) => {
         return(
          <div key={i} className="player-card" onClick={() => {
setSelectedPlayer([e.character, ...player].slice(0,1)); setSpeed([e.max_speed, ...speed].slice(0,1)); setApproach([e.approach, ...approach].slice(0,1)); setRecovery([e.knockback_type, ...recovery].slice(0,1)); console.log(player)
        }}> 
           <h1>{e.character}</h1>
           </div> 
           )
       }) 
     }
        <div className="game-table">
          {player && <Player player={player} speed={speed} approach={approach} recovery={recovery}/> }
        </div> 

        <div className="create-char"> 
          Create a Character
          <form onSubmit={addChar}>
          <input type="integer" placeholder="Name" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="TopSpin" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Slicing" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Flat" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Approach" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Baseline" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="DoubleTap Flat" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Doubletap Slice" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Max Speed" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Acceleration" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Pivot" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Horizontal" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Lunge Recovery" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="integer" placeholder="Knockback Reduction" onChange={(e) => setForm({...form, character: e.target.value})}/>
          <input type="submit" value="Submit" />
          </form>
        </div> 
      </div> 
     </div>
  );
}



