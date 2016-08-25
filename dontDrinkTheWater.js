 //  ___           _ _     ___      _      _     _   _         __      __    _           
 // |   \ ___ _ _ ( ) |_  |   \ _ _(_)_ _ | |__ | |_| |_  ___  \ \    / /_ _| |_ ___ _ _ 
 // | |) / _ \ ' \|/|  _| | |) | '_| | ' \| / / |  _| ' \/ -_)  \ \/\/ / _` |  _/ -_) '_|
 // |___/\___/_||_|  \__| |___/|_| |_|_||_|_\_\  \__|_||_\___|   \_/\_/\__,_|\__\___|_|  


 // Given a two-dimensional array representation of a glass of mixed liquids, 
 // sort the array such that the liquids appear in the glass based on their 
 // density. (Lower density floats to the top) The width of the glass will not 
 // change from top to bottom.

 // ======================
 // |   Density Chart    |
 // ======================
 // | Honey   | H | 1.36 |
 // | Water   | W | 1.00 |
 // | Alcohol | A | 0.87 |
 // | Oil     | O | 0.80 |
 // ----------------------

 // [                            [
 //  ['H', 'H', 'W', 'O'],        ['O','O','O','O']
 //  ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
 //  ['H', 'H', 'O', 'O']         ['H','H','H','H']
 //  ]                           ]
 // The glass representation may be larger or smaller. If a liquid doesn't 
 // fill a row, it floats to the top and to the left.

function separateLiquids(glass) {
 if (glass.length === 0) {
     return glass;
 }

 var temp;
 var flatArray = [];
 var mainArray = [];
 var glassWidth = glass[0].length;

 for (array in glass) {
     for (item in glass[array]) {
         if (glass[array][item] === "O") {
             temp = glass[array][item]
             flatArray.push({ 1: "O" });
         } else if (glass[array][item] === "A") {
             temp = glass[array][item]
             flatArray.push({ 2: "A" });
         } else if (glass[array][item] === "W") {
             temp = glass[array][item]
             flatArray.push({ 3: "W" });
         } else if (glass[array][item] === "H") {
             temp = glass[array][item]
             flatArray.push({ 4: "H" });
         }
     }
 }

 flatObject = flatArray.sort(function(a,b) {
     return Object.getOwnPropertyNames(a) - Object.getOwnPropertyNames(b)
 });

 flatArray = [];
 for (x in flatObject) {
     var key = Object.keys(flatObject[x]).toString()
     flatArray.push(flatObject[x][key]);
 }

 var subArray = [];
 for (var i = 0; i <= flatArray.length; i++) {
     if (subArray.length === glassWidth) {
         mainArray.push(subArray)
         subArray = [];
         subArray.push(flatArray[i])
     } else if (subArray.length < glassWidth) {
         subArray.push(flatArray[i]);
     }
 }
 
 return mainArray;

};

