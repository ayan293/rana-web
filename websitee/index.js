console.log("Hello")
let a = 1
console.log("a")
for (let i = 0; i < 100; i++) {
    console.log(a + i)
}
let obj = {
    name: "Ayan",
    role: "Programmer",
}
for (const key in obj) {

    const element = obj[key];
    console.log(key, element)
}
for (const a of "AYAN") {
    console.log(a)
}
function sum(a, b, c) {
    // console.log(a+b+c)
    return a + b + c
}

result1 = sum(1, 2, 55)
result2 = sum(18, 5, 6)
result3 = sum(18, 10, 9)
console.log("The sum of these numbers is", result1)
console.log("The sum of these numbers is", result2)
console.log("The sum of these numbers is", result3)
const func2 = (a) => {
    console.log(a)
}
func2(5555);


