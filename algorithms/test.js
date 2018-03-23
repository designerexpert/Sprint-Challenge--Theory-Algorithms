const eggBreaks = (floor) => {
    return floor >= 47;
}
// Given i have an eggBreaks function that figures if egg break
// or does not break when thrown from a given floor.
// returns true if it broke, or false if it did not.
const whereEggBreaks = (f) => {
    let egg = 0;
    if (eggBreaks(0)) // Egg breaks at first floor stop here
    {
        return 0;
    }
    let currentFloor = Math.floor(f / 2);
    if (!eggBreaks(currentFloor)) {
        // increase the current floor by half its size
        // every time it does not break;
        while (!eggBreaks(currentFloor)) {
            egg++
            console.log("it didn't break at:", currentFloor);
            currentFloor = currentFloor + Math.floor((f - currentFloor) / 2);
        }
        while (eggBreaks(currentFloor - 1)) {
            currentFloor = currentFloor - 1;
            egg++;
        }
    } else {
        while (eggBreaks(currentFloor - 1)) {
            currentFloor = currentFloor - 1;
            egg++;
        }
        while (!eggBreaks(currentFloor)) {
            egg++
            console.log("it didn't break at:", currentFloor);
            currentFloor = currentFloor + Math.floor((f - currentFloor) / 2);
        }
    }
    // if an egg broke at some point we would reach this step
    return `used ${egg} eggs to find it breaks at floor: ${currentFloor}`;
}

console.log(whereEggBreaks(100));
