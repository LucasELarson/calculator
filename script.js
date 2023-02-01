var activeOperator = ''; //    / * + - =     ///
var storedNumbers = [] // Stored numbers used for operation //
var newNumber = 0; // The resukt of doing an operation //
inputNumber = 0; // Currently displayed number //
updateCount = 0;
heldNumber = 0;
mathTrail = '';

// Sets what the screen displays to the number you're typing or the result of an operation, depending on application //
function setDisplay(){
    document.getElementById('display').innerText = inputNumber;
}

function setHeldDisplay(){
    document.getElementById('helddisplay').innerText = heldNumber;;
}
// Will take the 0th and 1st number from the storedNumbers array and apply the given operation to it //
function operate(activeOperator) {
    if(activeOperator == '*') {
        newNumber = ((storedNumbers[(storedNumbers.length - 2)]) * (storedNumbers[storedNumbers.length - 1]))
        storedNumbers.push(newNumber)
        // storedNumbers.shift();
        heldNumber = storedNumbers[(storedNumbers.length - 1)];
        setHeldDisplay();
        console.log(storedNumbers);
    
    } else if (activeOperator == '/') {
        newNumber = ((storedNumbers[(storedNumbers.length - 2)]) / (storedNumbers[storedNumbers.length - 1]))
        storedNumbers.push(newNumber)
        // storedNumbers.shift();
        heldNumber = storedNumbers[(storedNumbers.length - 1)];
        setHeldDisplay();
        console.log(storedNumbers);
   
    } else if (activeOperator == '-') {
        newNumber = ((storedNumbers[(storedNumbers.length - 2)]) - (storedNumbers[storedNumbers.length - 1]))
        storedNumbers.push(newNumber)
        // storedNumbers.shift();
        heldNumber = storedNumbers[(storedNumbers.length - 1)];
        setHeldDisplay();
        console.log(storedNumbers);
    
    } else if (activeOperator == '+') {
        newNumber = ((storedNumbers[(storedNumbers.length - 2)]) + (storedNumbers[storedNumbers.length - 1]))
        storedNumbers.push(newNumber)
        // storedNumbers.shift();
        heldNumber = storedNumbers[(storedNumbers.length - 1)];
        setHeldDisplay();
        console.log(storedNumbers);
    } else {}
}

// When entering a number it will add it the screen and concat the next number input to it //
function input(number){
    if (number === '.'){
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
    heldNumber = 0;
    storedNumbers = [];
    setDisplay();
    setHeldDisplay();
}

// Adds numbers to the array which math is being done to //
function updateStoredNumbers(){
    console.log('trying to update array')
    if(String(inputNumber) === String(''))  {
        return
    } else {
        if(storedNumbers.length < 1) {
            storedNumbers.push(inputNumber);
            console.log(storedNumbers)
            inputNumber = String('');
            setDisplay();
        } else {
                storedNumbers.push(inputNumber);
                console.log(storedNumbers);
                operate(activeOperator);
                inputNumber = String('');
                setDisplay();         
        } 
    }
}


//Adds keyboard support for calculator//

var addEvent = document.addEventListener ? function(target,type,action){
    if(target){
        target.addEventListener(type,action,false);
    }
} : function(target,type,action){
    if(target){
        target.attachEvent('on' + type,action,false);
    }
}

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===49){
        input(1);
    } else if (key === 50 ){
        input(2);
    } else if (key === 48 ) {
        input(0);
    } else if (key === 51){
        input(3);
    } else if (key === 52){
        input(4);
    } else if (key === 53){
        input(5);
    } else if (key === 54){
        input(6);
    } else if (key === 55){
        input(7);
    } else if (key === 56){
        input(8);
    } else if (key === 57){
        input(9);
    } else if (key === 190){
        input('.');
    } else if (key === 8){
        deleteInput();
    } else if (key === 13){
        updateStoredNumbers(); 
    } else if (key === 81){
        updateStoredNumbers();
        activeOperator = '*';
    }  else if (key === 87){
        updateStoredNumbers();
        activeOperator = '/';
    } else if (key === 69){
        updateStoredNumbers();
        activeOperator = '+';
    } else if (key === 82){
        updateStoredNumbers();
        activeOperator = '-';
    }
});
