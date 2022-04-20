import GameClient from "./client/GameClient";

function App( props ) {
  return (
    <div className="App">
      <header className="App__header">
        <h1>A Dead Simple Adventure Game Demo</h1>
      </header>
      <section className="App__game">
        <GameClient gameDefinition={props.gameDefinition}/>
      </section>
    </div>
  );
}

export default App;
