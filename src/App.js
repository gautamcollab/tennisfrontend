import React, {useState, useEffect} from "react";
import Player from "./components/Player";

export default function App() {
  const [characters, setCharacter] = useState([])
  const [player, setSelectedPlayer] = useState([])
  useEffect(() => {
    (async () => {
      let req = await fetch('http://localhost:9292/characters')
      let res = await req.json() 
      setCharacter(res)
    })()
  }, [])
  
  return (
    <div> 
      <h1>Welcome to Mario Tennis</h1>
      <div className="game-table">
      { player && <Player player={player} /> }
      </div> 
       <div className="player-container">
     {
       characters.map((e, i) => {
         return(
          <div key={i} className="player-card" onClick={() => {
setSelectedPlayer([e.character, ...player].slice(0,2))
        }}> 
           <h1>{e.character}</h1>
           </div> 
           )
       }) 
     }
     </div> 
    // </div>
  );
}

// const Message = ({text}) => (<p>{text}</p>)

// const App = () => {
//   const [messageText, setMessageText] = useState(null);
  
//   return(
//     <div className="box">
//       {messageText && <Message text={messageText} /> }
//       <button onClick={() => setMessageText("Hi")}>Click Me</button>
//     </div>
//   );
// }


// export default App; 