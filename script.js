var activeOperator = ''; //    / * + - =     ///
var storedNumbers = [1,5] // Stored numbers used for operation //
var newNumber = 0; // The resukt of doing an operation //
inputNumber = 0; // Currently displayed number //


// Sets what the screen displays to the number you're typing or the result of an operation, depending on application //
function setDisplay(){
    document.getElementById('display').innerText = inputNumber;
}

// Will take the 0th and 1st number from the storedNumbers array and apply the given operation to it //
function operate(activeOperator) {
    if(activeOperator == '*') {
        newNumber = (storedNumbers[0] * storedNumbers[1])
        storedNumbers.push(newNumber)
        storedNumbers.shift();
        document.getElementById('display').innerText = storedNumbers[1];
        console.log(storedNumbers);
    
    } else if (activeOperator == '/') {
        newNumber = (storedNumbers[0] / storedNumbers[1])
        storedNumbers.push(newNumber)
        storedNumbers.shift();
        document.getElementById('display').innerText = storedNumbers[1];
        console.log(storedNumbers);
   
    } else if (activeOperator == '-') {
        newNumber = (storedNumbers[0] - storedNumbers[1])
        storedNumbers.push(newNumber)
        storedNumbers.shift();
        document.getElementById('display').innerText = storedNumbers[1];
        console.log(storedNumbers);
    
    } else if (activeOperator == '+') {
        newNumber = (storedNumbers[0] + storedNumbers[1])
        storedNumbers.push(newNumber)
        storedNumbers.shift();
        document.getElementById('display').innerText = storedNumbers[1];
        console.log(storedNumbers);
    } else {}
}

// When entering a number it will add it the screen and concat the next number input to it //
function input(number){
    if (number === '.'){
        console.log(String(inputNumber).slice(-1))
        if(String(inputNumber).includes('.')){
            return
        } else {
            inputNumber = String(inputNumber) + String(number);
            setDisplay();
        }      
    } else {
        inputNumber = Number(String(inputNumber) + String(number));
        setDisplay();
    }
}

// Will remove the last number input from the screen //
function deleteInput(){
    inputNumber = Number(String(inputNumber).slice(0, -1));
    console.log(inputNumber);
    setDisplay();
}

//Removes all number input and clears storedNumbers //
function clearInput(){
    inputNumber = 0;
    setDisplay();
}