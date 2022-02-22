# state.js
State management lib

## Init states
Include the `state.js` file in your project.

```javascript
const State = new State("name");
const StateWithValue = new State("name","john");
```

## Updating states
```javascript
State.set("John")
```

## Listening for changes
```javascript
State.addChangeListener((value, oldValue) => {
     console.log(value, oldValue)
})
```

## Debugging
```javascript
State.setDebug(true)
// Only for this state
State.setDebug(true, false)
```
