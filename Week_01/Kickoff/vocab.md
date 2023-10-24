# Vocab
- **Full Stack Web Development** - the process of building web applications entirely from the ground up. A full stack web application consists of a client-side (front-end) application, a server-side (back-end) application, and a datase.
- **Front end application** - the user-facing client-side application that runs in a browser. Generally, it involves defining the overall layout, styling, and interactivity of the application. However, in terms of specific data rendered, it focuses on the requesting and rendering of the data, because said data is not stored within the application itself.
- **Back end application** - the request processing server-side application that runs on a centralized computer (a.k.a. a server). The back-end application is responsible for processing incoming HTTP requests from client-side applications. It then attempts to retrieve the specific resource(s) associated with the incoming HTTP request from the database before returning it in an HTTP response.
- **Database** - the centralized location of all of the evolving data within an application. The database is responsible for receiving queries and returning specific resources. Information stored in a database may include, but is not limited to, user data, media locations, commonly used values, authentication data, and any other dynamic content.
- **React** - client-side JavaScript library used to build front end web applications. React relies on *declarative* code.
## Generic Topics
- **Imperative code** - code that describes each individual step needed to accomplish some task.
- **Declarative code** - code that uses pre-defined sets of instructions to accomplish some task. 

## Wednesday Topics
- **Higher order functions** - a function that accepts another function as an argument, and runs that argument function as part of its own instructions.
- **Arrow functions** - an alternative to defining functions that is less verbose, and well suited to defining callback functions (i.e. the types of functions we'll be providing as aruments to our higher order functions)

## Thursday Topics
- **Memory Values** - a raw value stored in memory. In JavaScript, this covers primitive datatypes (strings, numbers, booleans). With memory values, you can perform comparator operations (===) and determine whether two values are identical.
- **Memory References** - pointers to a second memory location that stores the values within a complex datatype (objects, arrays, functions)
- **Object Equality** - objects are equal if and only if their variables are referencing the same object. However, two objects with identical property values will not be equal.
- **Destructuring Syntax** - a syntax in which you use typical object syntax (i.e. curly brackets and property names) to pull individual property values out of an existing object and store them into their own variables.
- **Spread Operators** - a method used along with destructuring syntax to bunch multiple properties into a singular new object.