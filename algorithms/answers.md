# Exercise I
*   a) O(n)
*   b) O(log n)
*   c) O(log n)
*   d) O(n log n)
*   e) O(n!)
*   f) O(n)
*   g) O(n)

# Exercise II
*   a)
```Javascript
maxSubtraction(a, i = 0; j = a.length)
{
    let maxSub = 0;
    while(j >= i)
    {
        let sub = a[j]-a[i];
        if (sub > maxSub){
            maxSub = sub;
            j--;
            i++;
        }
        
    }
    return maxSub;
}
```
*   b) 
```Javascript
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
```