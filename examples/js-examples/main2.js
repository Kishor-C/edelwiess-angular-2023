let items = [10, 30, 20, 50, 40];
// using callback in forEach
items.forEach(function(value, index) {
    console.log(value, index);
});
console.log('----------------------');
// using arrow function 
items.forEach((value, index) => console.log(value, index));
// using callback in map
let anotherItems = items.map(function(value, index) {
    return value * index;
});
console.log(anotherItems);
let fewItems = items.map((value, index) => value * index);
console.log(anotherItems, fewItems);