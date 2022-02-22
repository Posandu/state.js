# state.js
State management lib

## Init states
Include the `state.js` file in your project.

```javascript
const S_name = new State("name");
const StateWithValue = new State("name","john");
```

## Updating states
```javascript
S_name.set("John")
```

## Listening for changes
```javascript
S_name.addChangeListener((value, oldValue) => {
     console.log(value, oldValue)
})
```

## Debugging
```javascript
S_name.setDebug(true)
// Only for this state
S_name.setDebug(true, false)
```
