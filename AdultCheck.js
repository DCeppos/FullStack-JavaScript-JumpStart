//Part 1: create a variable called `myName` and set it to the value of your name

var myName = "Daniel Ceppos";

//Part 2: create a new variable called "age" and set it to the length of your name.

var age = myName.length;

//Part 3: create an IF/ELSE statement that returns the name variable and the string " is an adult" if your age variable is 18 or over OR name + " is not an adult" if your age variable is below 18 years old

if (age > 18){
    console.log(myName + " is an adult");

}

else {
    console.log(myName + " is not an adult");
    
}
