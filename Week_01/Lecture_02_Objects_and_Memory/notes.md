## Scenario 1: Simple Data in Memory
Alexander and Radko are best friends. Radko realizes he doesn't know Alexander's favorite movie. So Radko asks Alexander what his favorite movie is. Alexander replies with "The Mighty Ducks." Radko remembers this. 

A week later, Alexander watches "Miracle," and after watching the movie, Alexander says "Wow, that's WAY better than The Mighty Ducks. Miracle is now my favorite movie."

Some time later, Alexander and Radko are hanging out, and they turn on Disney Plus, and Radko says "Oh look, they have The Mighty Ducks! That's your favorite movie, right?"

Alexander says "Not anymore, I like Miracle better now."

This analogy represents how **primitive data types** are stored in memory when it comes to JavaScript (and most languages).

## Scenario 2: Complex Data in Memory
Jessi and James recently got married. They decide that in order to start their family, they need to make sure they have the proper vehicle. Jessi currently rides her bike to work, and James drives an old 80's Miata. They decide to go to the dealership and buy a mini van. 

They decide on their mini van, sign the paperwork, and take it home. A week or so later, Jessi is at work. James, who works from home, decides that he wants to spruce up the mini van. So he slaps some giant flame decals on it, and adds a big spoiler to the top. 

Jessi comes home, and stops dead in her tracks in the driveway. She yells out "JAMES, WHAT IN THE WORLD DID YOU DO TO MY VAN?!"

James responds with "I added some cool stuff to my van, why do you ask?"

This analogy represents how complex data types are stored in memory.

# Vocab
- **Memory Stack** - effectively a table of key value pairs stored in memory. The keys are the variables, and the values are the raw values themselves. The memory stack is where strings, numbers, and booleans are stored. The memory stack is also where *pointers* to complex data types are stored. 
- **Memory Heap** - the memory storage location for complex data types in JavaScript. When we assign an object to a variable, the object itself is stored in the memory heap, and the location within the heap that the object is stored is set as the variable's value.
- **Memory Reference** - a memory reference involves a value stored in the memory stack that is simply an address to a specific object in the memory heap. The variable's value is not the object itself, but rather a pointer to the object. In JavaScript, when we save any complex data type to a variable, that variable is now a reference. When modifying one reference variable, you ultimately modify every variable referencing the same thing. 
- **Memory Value** - a memory value is when the value stored in memory is the raw value itself. For example, `let x = "hello"` sees the string `"hello"` itself saved as the value of `x`. Even when multiple variables have the same raw value, if you modify one of them, the others maintain their original value.
- **Destructure Syntax** - a programming syntax in which you can unpack properties from an object into individual variables.
- **Spread Operator**