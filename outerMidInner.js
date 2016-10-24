function outer() {
    
    var newGlobal = "outer";

    function mid() {
        var newGlobal = "mid";

        function inner() {
            var newGlobal = "inner";
            console.log(newGlobal);
        }

        inner();
    }

    mid();
}

outer();
