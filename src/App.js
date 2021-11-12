import GamesContainer from "./Components/GamesContainer";
import Header from "./Components/Header";
import SelectedGame from "./Components/SelectedGame";
import './global.css';

function App() {
  return (
    <>
      <Header/>
      <SelectedGame/>
      <GamesContainer/>
    </>
  );
}

export default App;
