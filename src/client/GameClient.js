import { defaultGameFactory } from 'simple-adventure-game-engine';
import {useEffect, useState} from "react";


function GameClient( props ) {

    const [ game, setGame ] = useState();
    const [ currentState, setCurrentState ] = useState();

    function restart( e ) {
        e?.preventDefault();
        const constructedGame = defaultGameFactory( props.gameDefinition );
        setGame( constructedGame );
        setCurrentState( constructedGame.getState() );
    }

    useEffect( () => {

        if ( props.gameDefinition ) {
            restart();
        }

    }, [] );

    function handleTransition( transition ) {
        game?.apply( transition );
        setCurrentState( game?.getState() );
    }

    function renderGameState( state ) {
        return (
            <div className="GameState" data-win-state={state.getMetadata()?.win}>
                <p className="GameState__description">{state.description}</p>
                <ol className="GameState__transitions">
                    {state.transitions.map( transition => (
                        <li key={transition.id} className="GameState__transition" onClick={() => handleTransition( transition )}>{transition.description}</li>
                    ))}
                </ol>
                {state.transitions.length === 0 && (
                    <button onClick={( e ) => restart( e )} className="GameState__restart">Play again</button>
                )}
            </div>
        )
    }

    if ( currentState ) {
        return renderGameState( currentState );
    }

    return null;

}

export default GameClient;
