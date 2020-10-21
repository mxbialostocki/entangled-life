## Entangled Life
A Technical test in React, Redux-Toolkit, Typescript, and Material-UI - please see notes for details.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## NOTES
I had completed a similar exercise in a course previously, so I wanted to experiment a little, which always leads down some unforseen paths (full of learning opportunities). So I used Reduxjs/toolkit, which incorporates thunk middleware into it's structure inherently.

### Beginning
I prefer not to use create-react-app because I like to set up my own servers and app structure, however for the purposes of a two hour exercise that focuses on Front-End only, I hoped that this would be appropriate. I felt that their typescript template would allow me to work more easily out-the-gate with redux-toolkit, since that is written in Typescript as well.

### Testing
It took me a wee bit to get the redux store wrapping the components I was testing properly. I tried to limit myself to be time-sensitive, and got a few unit tests going - but I've also left a couple commented out in ShoppingCart.test.js to give you an indication of where I wanted to go next.

### State Management on reload
I did not complete this requirement, but I hope that you will take a look at the secondary branch "persistence". I was trying to use redux-persist to persist and then "rehydrate" the store, but that was a first for me and I was unable to get it fully working. I believe I could have got this up and running with more time, or a gentle nudge from someone with senior experience. It's one of those areas which I feel like I can see everything that needs to happen, but am missing a piece of terminology, or a detail that I haven't encountered before.

I managed to get the PersistGate set up, and I managed to get the "products" serving to the browser - but the main problem (possibly the final problem?) I encountered was that the Persist module seemed to mutate the products array into an object, and I ran out of time to experiment further with splitting Object.keys, entries etc. I would hope to find a solution that forced the type of the products to retain their original structure.

### Material-UI
An ideal situation would be to approach this from a design perspective, if I wasn't working from a redline document. The Material-UI here is minimal, but I hope indicates that I am familiar with the usage.

## Summation
I haven't actively used redux in over a year so I hope that what I managed to get through in this timeframe is acceptable. I'm definitley keen on toolkit though - it's a smoother configuration process.

If I have misunderstood the test, I would be happy to submit a follow up focussing on an area required - for example if you wanted an older classic redux structure. There is a lot more I would have loved to experiment with if I had more time, and I'd be grateful to talk with you further about this.