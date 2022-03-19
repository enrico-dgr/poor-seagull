# Usages

## Game Service

### Listening for changes

Before reading the example: `gameWss.send` is just a 'reducer-like' wrap of the methods imported from the library `space-rock-scissor-paper-game-engine`, to be used passing an argument object `({ type: '', payload: {} })`.  
So, the `type` just tells the reducer to pass the `payload` to a function ( e.g. `create` or `createPlayers` ) instead of another one.

```js
// in your component file
// MyGameUi.js
import React from 'react';
import gameWss from './path/to/services/gameWss';
import { connect } from 'react-redux';

const MyGameUi = ({ game }) => {

    const aCallbackSendingAnEvent = () => {
        // intellisense will tell you the types in obj param,
        // otherwise check lines 3-25 in `services/gameWss`
        // to know the action types ( obj param types )
        gameWss.send({ type: '....', payload: .... })
    }

    return (
        // do something with `game` and `aCallbackSendingAnEvent`
    )
}

const mapStateToProps = state => ({
    game: state.lobby.game
})

export default connect(mapStateToProps)(MyGameUi)

```

### Intellisense for Game Type

```js
// in your component file
// imports like before
import React from 'react';
import gameWss from './path/to/services/gameWss';
import { connect } from 'react-redux';

// where you get the type
import GE from "space-rock-scissor-paper-game-engine";

// import the type from the library
/**
 * @typedef { ReturnType< typeof GE.create > } Game
 */

// use the type
/**
 * @param { { gam: Game } } props
 */
const MyGameUiWithIntellisense = ({ game }) => {

    // now you'll get autocomplete
    game.matches

    return (
        // do something with `game` and `aCallbackSendingAnEvent`
    )
}

const mapStateToProps = state => ({
    game: state.game
})

export default MyGameUi
```
