import { useEffect, useState } from "react";
import GamesContainer from "./Components/GamesContainer";
import Header from "./Components/Header";
import SelectedGame from "./Components/SelectedGame";
import './global.css';
import { api } from "./Services/Api";

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    api.get('/games/index').then((response) => {
      console.log(response.data)
      setGames(response.data)
    })
  }, []);

  return (
    <>
      <Header/>
      <SelectedGame/>
      <GamesContainer games={games}/>
    </>
  );
}

export default App;
