import Player from './components/Player.jsx';
import Timer from "./components/Timer.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          <Timer title={"Easy"} target={1}/>
          <Timer title={"Not easy"} target={5}/>
          <Timer title={"Tough"} target={15}/>

      </div>
    </>
  );
}

export default App;
