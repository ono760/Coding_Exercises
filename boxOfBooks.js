var myBox = {
    height: 6,
    length: 10,
    width: 12,
    volume: 720,
    weight: 24,
    material: "cardboard",
    destination1: "Orlando",
    destination2: "Miami",
    "# of stops": 2,
    "# of Books": 0
};

function addBook(box, name, writer) {
    box["# of Books"]++;
    box["book" + box["# of Books"]] = {
        title: name,
        author: writer
    };
};

addBook(myBox, "Great Expectations", "Charles Dickens");
addBook(myBox, "The Remains of...", "Kazuo Ishi");
addBook(myBox, "Peter Pan", "J.M. Barrie");
addBook(myBox, "On the Road", "Jack K.");

console.log(myBox.book1.title); //Great Expectations 
console.log(myBox.book3.author); //J.M. Barrie
