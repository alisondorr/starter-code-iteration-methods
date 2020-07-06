// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.The following line is here just to show you that the "users" array has already been loaded and is ready to go.

// Append the katas to this element:
const main = document.querySelector('main')

//Example kata
//Functions to print headers and object strings
function printKataHeading(main, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA " + kataNumber)
    main.append(kata1Heading)
}
function printObject(main, object) {
    const stringifiedObject = JSON.stringify(object)
    main.append(stringifiedObject)
}

// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.
//filter() takes the callback function and returns a new array containing all the elements that make the callback return true.
//The built-in array method is called as follows: array.filter(callback). 

printKataHeading(main, 1)
const activeUsers = users.filter(users => users.isActive === true)
main.append(JSON.stringify(activeUsers));
printObject(main, activeUsers)

// Kata 2: Use the .map() method. //map() allows us to apply a callback function to an array and create a new array from the results of that callback.
//The built-in array method is called as follows: array.map(callback). 
// Map over the users array to show only the email addresses of the users.

printKataHeading(main, 2)
const emailUsers = users.map(users => users.email /= null);
main.append(JSON.stringify(emailUsers));

// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".//some() uses the callback function to test each element in an array, and if the callback returns true for any of the elements in the array, then some() returns true and otherwise it returns false. This means that the callback function for some() needs to return true or false (or a truthy or falsey value).The built-in array method is called as follows: array.some(callback).

printKataHeading(main, 3)
const ovationUsers = users.some(users => users.company === "OVATION");
main.append(JSON.stringify(ovationUsers));

// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38. find() takes the callback function and returns the first element in the array that makes the callback return true, and returns undefined if no element makes the callback return true.
//The built-in array method is called as follows: array.find(callback).

printKataHeading(main, 4)
const over38Users = users.find(users => users.age > 38);
main.append(JSON.stringify(over38Users));

// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.

//filter() takes the callback function and returns a new array containing all the elements that make the callback return true.
//The built-in array method is called as follows: array.filter(callback). 

//find() takes the callback function and returns the first element in the array that makes the callback return true, and returns undefined if no element makes the callback return true.The built-in array method is called as follows: array.find(callback).

printKataHeading(main, 5)
const activeOver38Users = (users.filter(users => users.isActive === true) &&
    users.find(users => users.age > 38))

main.append(JSON.stringify(activeOver38Users));

// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.

//filter() takes the callback function and returns a new array containing all the elements that make the callback return true.
//The built-in array method is called as follows: array.filter(callback). 

//map() allows us to apply a callback function to an array and create a new array from the results of that callback.
//The built-in array method is called as follows: array.map(callback). 

printKataHeading(main, 6)
const zencoUsers = users.filter(users => users.company === "ZENCO")

let totalZencoBalance = zencoUsers.balance++

main.append(JSON.stringify(totalZencoBalance));


// Kata 7: Use the .filter() method with .includes()
// Show the age of every user with the "fugiat" tag called out

//filter() takes the callback function and returns a new array containing all the elements that make the callback return true.
//The built-in array method is called as follows: array.filter(callback). 

printKataHeading(main, 7)
const fugiatUsers = users.filter(users => users.tags === "fugiat")

main.append(JSON.stringify(fugiatUsers.age));


