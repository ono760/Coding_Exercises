var newObj = JSON.stringify({
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
});

console.log("stringified");
console.log(newObj);
console.log("");

var parsedObj = JSON.parse(newObj);
console.log("parsed");
console.log(parsedObj)
console.log("");

console.log("one name from employees: ")
console.log(parsedObj.employees[1].firstName);
console.log("");


var companiesObj = JSON.stringify({
    "Companies": [{ "company": "Github", "age": 7, "categories": "Services,Internet,Software" },
        { "company": "Airbnb", "age": 6, "categories": "Hotels,Travel" },
        { "company": "Square", "age": 7, "categories": "FinTech,Hardware + Software,Finance" },
        { "company": "Dropbox", "age": 11, "categories": "Cloud Data Services,Storage,Web Hosting" }
    ]
})

console.log(companiesObj);
console.log("");

var parsedCompanies = JSON.parse(companiesObj);
console.log("parsed companies: ")
console.log(parsedCompanies);
console.log("")
console.log("One company: ")
console.log(parsedCompanies.Companies[3])
console.log("")
console.log("All companies names: ")
for (var i = 0; i < parsedCompanies.Companies.length; i++) {
	console.log(parsedCompanies.Companies[i].company)
};