//call() allows you to explicitly set this and map the following params onto a function's params. 
//Converting an array-like object (like the keyword arguments) into an array
//Call maps parameters passed after the first one

function defaultContext() {
    console.log(this)
}

var cat = {
    name: "Felix",
    furColor: "Black"
};

defaultContext.call(cat)

