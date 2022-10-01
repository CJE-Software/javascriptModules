import Backpack from "./Backpack.js";

//note you can only use a class once its been "declared" importing at the top of the file ensures the class has been declared via the import Backpack from "./Backpack.js"
//JavaScript reads from top to bottom so always IMPORT FIRST!
//creates a new object called "everydayPack" from the class that is imported from the Backpack.js file>
// note that making a change to the original class "Backpack from "./Backpack.js" will update all objects created from the class. this makes your js scalable (= 

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    25,
    25,
    false,
    "October 4, 1990 06:37:00 PST"
);

console.log("Date acquired: ", everydayPack.dateAcquired);
console.log("Days since acquired: ", everydayPack.backpackAge());

//creating a template literaal
const content = `
<main>
    <article>
        <h1>${everydayPack.name}</h1>
        <ul>
            <li>Volume: ${everydayPack.volume}</li>
            <li>Color: ${everydayPack.color}</li>
            <li>Age: ${everydayPack.backpackAge()}</li>
            <li>Number of pockets: ${everydayPack.pocketNum}</li>
            <li>Left strap length: ${everydayPack.strapLength.left}</li>
            <li>Right strap length: ${everydayPack.strapLength.right}</li>
            <li>Lid status: ${everydayPack.lidOpen}</li>
        </ul>
    </article>
</main>
`;

document.body.innerHTML = content;

/*
another way to inject js into html document object:

const content = "<h1>" + everydayPack.name + "</h1>"

we are effectively concatinating the name of the object with the h1 elements in the document object
NOTE this is not the preferred way, you should ideally use template literals
*/






















/**--------------------------------------------------------------Start--------------------------------------------------------
//creating a class called backpack and then importing it to create an object "everdayPack"
//methods are properties in an object that can change

//this is a backpack "object" container>
const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

//to change property value: "backpack.volume = 50;"
// key colon value pair, comma seperated values

console.log("the backpack object: ", backpack);

//you can access object properties via "dot notation" and/or "bracket notation"

//dot notation>
console.log("the pocketNum value is: ", backpack.pocketNum);
//bracket notation>
console.log("the pocketNum value is: ", backpack["pocketNum"]);

//use variable to call object property with bracket notation>
var query = pocketNum;
console.log("the pockNum value is: ", backpack[query]);

//using bracket notation is useful because it can call value that uses unconventional naming specifications/ conventions ie.. var query-1... backpack["query-1"]

// a function sitting inside of an object is a "method"

//backpack.toggleLid(true) <--if type in browser console on user end this will toggle the toggleLid function note this is an instanced change (change occurs in browser) does not effect original file/source
//this will change the original file>
backpack.newStrapLength(25, 25);

//creating object blueprints otherwise known as classes refer to file--> "Backpack.js">
-----------------------------------------------------------------------------------------END---------------------------------------------------------------------------------------------*/



