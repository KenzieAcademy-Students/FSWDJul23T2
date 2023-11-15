## Resources
- [Lifecycle Visualizer](https://camo.githubusercontent.com/caef5c65f5d34c9409d814a3e81fe0dc039de61c98eb5087369ecf90f4789937/68747470733a2f2f692e6962622e636f2f514e566b6d48432f72656163742d66756e6374696f6e616c2d6c6966656379636c652e706e67)

## Vocab
- **effect** - an effect (aka a side effect) is defined as an operation that occurs using code external to your function
- **useEffect** - a React hook designed to be used when you must perform some side effect at a specific point in the component's lifecycle. However, useEffect can also be used to define any reactive operations; that is, any operations that must happen in reaction to a specific change during a component's lifecycle.

## Ways to Apply a useEffect

### With an empty dependency array (run on mount only)
If you utilize a useEffect and pass it an empty array for its dependency list, then your effect function will ONLY run on the component's mounting (i.e. when it first renders). More specifically, it will run immediately after the component is mounted.

Example:
```js
//         v This is the effect function
useEffect(() => {
  console.log("This only runs when the component first mounts");
}, [])
//  ^ This is the empty dependency list
```

### With no dependency array (run every time the component re-renders)
If you utilize a useEffect and only provide a single argument (the function), then that function will run every time the component is updated. This can result from either props changing, or any state value updating. Regardless of the expected time to run the function, it will always run as soon as the component's re-render finishes.

```js
//         v This is the effect function
useEffect(() => {
  console.log("This runs any time the component updates");
})
// notice there is no dependency list
```

### With a populated dependency array (run only when the dependency(ies) update)
If you utilize a useEffect, and provide an array with elements to as the second argument, then the function (the first argument) will run any time that one of the provided elements is detected as having changed. In essence, we can use this iteration of useEffect to perform operations only when a specific value updates.

```js
useEffect(() => {
  console.log("This runs any time stateValue triggers an update");
}, [stateValue])
```

### With a cleanup method with a populated dependency array or no dependency array
There are situations where we must be able to clean up some operation we've started. For example, attaching event listeners to the window can cause duplicate event listeners to be attached every single time the event occurs. Thus, we must use a cleanup method to remove the event listener when it's been used.

The cleanup method is defined by having the effect function return another function; that returned function *is* the cleanup method. The cleanup method runs before the next effect occurs during an update.

Example:
```js
useEffect(() => {
  console.log("This effect runs on every update");

  return () => {
    console.log("This is the cleanup method, and it runs before the next effect");
  }
})
```

### With a cleanup method and an empty dependency array
When a useEffect with an empty dependency array has a function that returns a cleanup method, the function itself runs on mount, and the cleanup method only runs on unmount. 

Example:
```js
useEffect(() => {
  console.log("This only runs on mounting");

  return () => {
    console.log("This only runs on unmounting");
  }
}, [])
```