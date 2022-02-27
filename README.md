# state.js

State management library for JavaScript.

## Init states

Include the `state.js` file in your project.

```javascript
const S_name = State("value");
const StateWithNull = State();
```

## Updating states

```javascript
S_name.set("John");
```

## Listening for changes

```javascript
S_name.addChangeListener((value, oldValue) => {
	console.log(value, oldValue);
});
```

## Debugging

```javascript
S_name.setDebug(true);
// Only for this state
S_name.setDebug(true, false);
```

# Credits

This library is inspired by [React](https://reactjs.org/).
