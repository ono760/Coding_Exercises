 var parkRides = [
     ["Birch Bumpers", 40],
     ["Pines Plunge", 55],
     ["Cedar Coaster", 20],
     ["Ferris Wheel of Firs", 90]
 ];

 var fastPassQuee = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

 function buildTicket(parkRides, fastRides, pick) {
     if (fastRides[0] === pick) {
         var pass = fastRides.shift();
         return function() {
             console.log("Quick! You've got aFast Pass to" + pass + "!");
         };
     } else {
         for (var i = 0; i < parkRides.length; i++) {
             if (parkRides[i][0] == pick) {
                 console.log("A ticket is printing for " + pick + "!\n" + "Your wait time is about " + parkRides[i][1] + " minutes.");
             }
         }; 

     }; 

 }; 

buildTicket(parkRides, fastPassQuee, "Pines Plunge");
