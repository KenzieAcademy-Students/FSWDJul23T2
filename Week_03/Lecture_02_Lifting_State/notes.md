**Problem** - We can't share state between components. We can pass the values in state from one component to another through props, but we can't modify state in external components.

**Brainstorm** - Yesterday, we learned that there is ultimately no limit to how many times a prop can be passed from parent to child. And last week, we briefly mentioned that *anything* can be passed as a prop. Strings, numbers, booleans, arrays, objects, *functions*, you name it. Coincidentally, the tool we use to modify state is a *function*

**Solution** - While state setters and getters may not be accessible inherently in external components, we can share the ability to modify state if we pass the appropriate getters and setters to other components as props. Then, within these children components that have been passed in a state setter function, calling the setter function will actually update the state in the parent component from which the getter and setter originated. This process is what we call ***lifting state***

## Resources
## Vocab