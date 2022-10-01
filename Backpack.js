//creating a class:>
//Class declaration: class Name {};
//Class expression const Name = class {};
//note the constructor is a METHOD just like other methods/function within an object
//I used a class declaration:>
//you can also use an object constructor function but this is an outdated method example can be found @developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/.....
//the object constructor function is outdated and no longer used because methods live within the constructor method...hence they cannot be extended to effect new objects 
// best practice for creating a class is to build a full object and then migrate the properties and methods into a class
//the global object Date() can use milliseconds past since January 1, 1970

class Backpack {
    constructor(
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        dateAcquired
    ) {
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
        this.dateAcquired = dateAcquired;
    }
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; //elapsed time in milliseconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }
}

//export the file for use in other files NOTE you must [import Backpack from "./Backpack.js"] to use this class, this is a module framework setup:>
export default Backpack;