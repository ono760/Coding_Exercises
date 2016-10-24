/**
 * When called this function should print the song "bottles of beer"
 * for as many bottles as there are 'bottlesRemaining'*/

function bottlesOfBeer(beerBottles) {

    var lyricOne = " bottles of beer on the wall ";
    var lyricTwo = " bottles of beer, take one down, pass it around ";
    var lyricThree = " bottles of beer";

    if (beerBottles === 0) {
        return;
    };

    console.log(beerBottles + lyricOne + beerBottles + lyricTwo + (beerBottles - 1) + lyricThree);

    bottlesOfBeer(beerBottles - 1);
};

bottlesOfBeer(99);
