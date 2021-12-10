import { useEffect, useState } from "react";
import GamesContainer from "./Components/GamesContainer";
import Header from "./Components/Header";
import SelectedGame from "./Components/SelectedGame";
import { DynimicityProvider } from "./Context/useDynimicityContext";
import './global.css';
import { api } from "./Services/Api";

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    api.get('/games/index').then((response) => {
      setGames(response.data)
    })
  }, []);

  return (
    <>
      <DynimicityProvider>
        <Header/>
        <SelectedGame/>
        <GamesContainer games={games}/>
      </DynimicityProvider>
    </>
  );
}

export default App;
