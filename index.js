
// Defining a function that receives a parameter function and calls it
function receivesAFunction(callback) {
    callback(); 
}

// Defining a named function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        return "This is a named function";
    };
}

// Defining an anonymous function that returns a function
const returnsAnAnonymousFunction = function() {
    return function() {
        return "This is an anonymous function";
    };
};
