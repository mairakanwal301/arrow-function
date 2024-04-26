/*let tea = (milk:number , sugar:number , tealeaves: number) => (
    milk + sugar +tealeaves
)

let dudhpatti:number = tea(1,3,4)
console.log(dudhpatti) */
//default parameter
var friend = function (name, age) {
    if (age === void 0) { age = 20; }
    console.log("My friend name is ".concat(name, " her age is ").concat(age, "\nand she is very pretty MASHALLAH. "));
};
friend("maira", 15);
friend("ZARAH", 2);
friend("Sana");
// rest in arrow function
var friend1 = function (name, age) {
    if (age === void 0) { age = 20; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return console.log("hello" + "My friend name is ".concat(name, " her age is ").concat(age, "\nand she is very pretty MASHALLAH.") + rest);
};
friend1("maira", 15, "clifton");
friend1("ZARAH", 2, "DHA");
friend1("Sana");
// return in arrow function
var friend2 = function (name, age) {
    if (age === void 0) { age = 20; }
    return "My friend name is ".concat(name, " her age is ").concat(age, "\nand she is very pretty MASHALLAH. ");
};
console.log(friend2("maira", 15));
console.log(friend2("ZARAH", 2));
console.log(friend2("Sana"));
var calculator = function (num1, num2) {
    var result = num1 - num2;
    return result;
};
console.log(calculator(3, 6));
