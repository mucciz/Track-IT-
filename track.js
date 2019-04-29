//create the function that'll compare user input and give a verdict
function track () {
    //Initalize variables where JavaScript will 'place' the values it gets from the form inputs.
    var length1 = parseInt (document.getElementById('first').value);
    var length2 = parseInt (document.getElementById('second').value);
    var length3 = parseInt (document.getElementById('third').value);
    //store the variables in array so that we use their positions in the array to access them. Not really neccessary but it works.
    var someArray = [length1,length2,length3];
    //The logic starts here. First up is the if statement to make sure all 0 inputs don't work.
    if (someArray[0]<=0 || someArray[1] <= 0 || someArray[2] <= 0) {
        document.getElementById('show').innerHTML = 'Not a triangle.'
    }
    else if (someArray[0] + someArray[1] <= someArray[2] || someArray[1] + someArray[2] <= someArray[0] || someArray[2] + someArray[0] <= someArray[1]) {
        document.getElementById('show').innerHTML = 'Again, not a triangle.'
    }
    else if (someArray[0] === someArray[1] && someArray[1] === someArray[2]) {
        document.getElementById('show').innerHTML = 'Equilateral triangle.'
    }
    else if (someArray[0] === someArray[1] || someArray[1] === someArray[2] || someArray[0] === someArray[2]) {
        document.getElementById('show').innerHTML = 'Iscosceles triangle.'
    }
    else {
        document.getElementById('show').innerHTML = 'Scalene triangle.'
    }
}
