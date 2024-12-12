//Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

//object
//boolean
//number
//string
//undefined

function typeOf (data1){
    let input=typeof (data1)
    console.log(input)
    return input
    
}

typeOf(Array=[2,4,8,9]) 
typeOf(5>4)
typeOf(333)
typeOf('bojan')
typeOf()

console.log("")


//Write a JavaScript function that will return:

//Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
//Note: Call the function in console to see answer
//Bonus: Make the same function work for converting dog to human years as well


function dogYearsCaltulator (input){
    let dogYears = input*7
    console.log(dogYears)
    return dogYears;
    }
    function humanYearsCalculator (dogYearsCaltulator){
        let humanYears= dogYearsCaltulator/7
        console.log(humanYears)
        return humanYears;
    }

dogYearsCaltulator(4)
humanYearsCalculator(28)

console.log("")
//Write a javascript function for an ATM:
//The ATM should give cash
//Should return "Not enough money" if you request more money
//Should return the ammount withdrawn and money left on the account if you have enough
//Note: Hardcode your account money in the program
//Bonus: Make it work with prompt()!

    
function atm(){
    let Account = {
        name: 'Bojans Account',
        balance: 2600
    }
    let withdrawn = Account.balance - prompt('Enter the ammount you want to withdrawn ')
    alert( `Your new balance is ${withdrawn}`)
     if (withdrawn<0){
        alert('Not enough money')
     }
}
atm()