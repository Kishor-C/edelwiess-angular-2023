function add(x, ...y) {
    // add values of x & y and print its total sum
    let res = x;
    for(let v of y) {
        res = res + v;
    }
    console.log(res);
}
add(20, 30); 
add(70);
add(40, 50, 20);
add(10,20,30,4,5,5,6,7);