// print in the console
console.log("We are learning new features of JS");
// let & const keywords: these two are block scoped variables
for(let i = 0; i < 2; i++) {
    console.log("i = "+i);
}
// console.log("Using i outside the loop: "+i);
let employee = {id: 100, name: "Raj", phone: 9929339};
// old approach
console.log("Name = "+employee.name+", ID = "+employee.id+", Phone = "+employee.phone);
// new approach : template strings uses backtick ` don't use single quote ' 
console.log(`Name = ${employee.name}, ID = ${employee.id}, Phone = ${employee.phone}`);
