function scopeExample(param, value) {
    for (var i = 10; i < 12; i++) {
        console.log(i);
    }

    console.log("outside", i); //uses var i=12 since it was incremented in for loop.  For loops don't get their own scope!
}

scopeExample();
