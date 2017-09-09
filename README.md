# trail-buddies

## Setup
Some setup needs to occur in order to extract the react-toolbox style modules
to static files for integration in the create-react-app.

In the package.json under `reactToolbox.include` (see example below) list
any of the react-toolbox components that will be required in the app.
```json
"reactToolbox": {
  "include": [
    "LAYOUT",
    "CARD"
  ],
  ...
}
```
Then run:

npm run toolbox

Note also that in order to use the components you must import them
without
bundled css:
```diff
- import { Button } from 'react-toolbox/lib/button'
+ import Button from 'react-toolbox/lib/button/Button'
```

More information can be found at
[react-toolbox-themr](https://github.com/react-toolbox/react-toolbox-themr).

## Dev
To run the development server, simply run:

    npm start
