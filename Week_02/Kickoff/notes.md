# Lecture Notes 10/31

## What is React?
React is a JavaScript library that can be used to create dynamic web pages. The difference between vanilla JavaScript and React is that React uses a much more declarative approach. While you can use some declarative code within vanilla JavaScript, React's capabilities lie in its use of a modified JavaScript syntax
called JSX. The features of React allow us to create full featured *single paged applications*, or SPA's for short.

Essentially, what React allows us to do is create a function that returns the HTML that should be rendered. With React and JSX we can write the HTML we want within the function responsible for rendering it. The functions that return the HTML to be rendered are called *components*.

## What is a Component?
A React component is a JSX function that returns the HTML that needs to be rendered. A single React application will almost certainly be made up of multiple components, where each component is responsible for rendering a portion of the webpage, and managing *state* needed to dynamically render said portion of the page. By writing declarative components, rather than having to target specific elements to define the contents within or any attributes, React allows our components to return a chunk of HTML written as HTML.

Because we are using functional components, we are going to see that a component is quite literally a function. Just as JavaScript functions can accept values to use within the function, React components are able to receive values through something called *props*. 

## Vocab
- **JSX** - A modified JavaScript syntax that combines JavaScript and HTML. It is (as far as I'm aware) only used by React. 
- **Single Page Application** - A Single Page Application (SPA) is a full web application that is rendered within a single HTML page. This does not mean that every piece of information must be rendered at the same time. SPA's utilize dynamic rendering in a way that the application simulates a tradition web application's ability to navigate between various pages that show different information, and have different features.
- **Component** - At the most simple level, a function that returns HTML. The benefit of using a component based library is that we can contain any logic needed for a given portion of a webpage to within the same function that actually returns that portion of the webpage. Just like functions, React components are designed to be reusable.
- **Props** - The singular object passed in to every single component in a React application. It is a single object, so if you wish to pass multiple values into a component, you must do so as multiple properties of the singular *props* object. 
- **Parent and Child Components** - In React, we are creating a cascading tree of components. A *parent* component is a component responsible for rendering one or more *child* components. A *child* component is simply a component rendered by another component. 
- **Vite** - a bootstrapping library responsible for building the basic skeleton of a React application.
- **Render** - A component is *rendered* when the function is executed, and its returned HTML is placed into the DOM where the component is placed. Syntactically, we render components by calling the function inline with the HMTL through a modified JSX syntax. 
- **State** - The object where changing values are stored within a React application's components. React's name comes from the fact that the application will re-render in *react*ion to updates to component state.


