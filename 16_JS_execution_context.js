//please open the notebooks page 26 for more info besides this
/*For those who don't know, the browser doesn't natively understand the high-level JavaScript code that we write in our applications. It needs to be converted into a format that the browser and our computers can understand – machine code.

While reading through HTML, if the browser encounters JavaScript code to run via a <script> tag or an attribute that contains JavaScript code like onClick, it sends it to its JavaScript engine.

The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.

There are two kinds of Execution Context in JavaScript:

1)Global Execution Context (GEC)
2)Function Execution Context (FEC)

Let's take a detailed look at both.

1)Global Execution Context (GEC)
Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).

The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.

For every JavaScript file, there can only be one GEC.

2)Function Execution Context (FEC)
Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.

Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

How are Execution Contexts Created?
Now that we are aware of what Execution Contexts are, and the different types available, let's look at how the are created.

The creation of an Execution Context (GEC or FEC) happens in two phases:

A)Creation Phase
B)Execution Phase */