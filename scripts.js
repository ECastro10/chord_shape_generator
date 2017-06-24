/**
 * Created by emanuel on 5/24/17.
 */
//For createChord()
var notesArray = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
var stringsArray = ['E', 'A', 'D', 'G', 'B', 'E'];

//For createChord() and findShape()
var major = [0, 4, 7];
var minor = [0, 3, 7];
var diminished = [0, 3, 6];
var augmented = [0, 4, 8];
var sus2 = [0, 2, 7];
var sus4 = [0, 5, 7];
var major7 = [0, 4, 7, 11];
var minor7 = [0, 3, 7, 10];
var minor7b5 = [0, 3, 6, 10];
var dom7 = [0, 4, 7, 10];

var rootNote;
var quality;
var shapesDictionary = {};
var currentSpellingCombos;
var shapeCounter = 0;
var permutationsDone = false;
var spellingArray;

var tempArray = [];
var sixthString = [];
var fifthString = [];
var fourthString = [];
var thirdString = [];
var secondString = [];
var firstString = [];

tempArray.push(document.getElementsByClassName('six'));
sixthString = tempArray[0];
tempArray = [];

tempArray.push(document.getElementsByClassName('five'));
fifthString = tempArray[0];
tempArray = [];

tempArray.push(document.getElementsByClassName('four'));
fourthString = tempArray[0];
tempArray = [];

tempArray.push(document.getElementsByClassName('three'));
thirdString = tempArray[0];
tempArray = [];

tempArray.push(document.getElementsByClassName('two'));
secondString = tempArray[0];
tempArray = [];

tempArray.push(document.getElementsByClassName('one'));
firstString = tempArray[0];
tempArray = [];


resetColors();
resetOptions();

function createChord() {
    //This function takes the user selection and actually creates the spelling of a chord "Gasp! Magical..."
    //It takes the root note, creates a chromatic scale, and then applies the formula.
    //It then returns the spelling
    var arrayForConstruction;
    var spelledArray = [];
    var chordFormula;
    for (var startingNote = 0; startingNote < notesArray.length; startingNote++) {
        if (notesArray[startingNote] == rootNote) {
            arrayForConstruction = (notesArray.slice(startingNote).concat(notesArray.slice(0, startingNote + 1)));
        }
    }
    switch (quality) {
        case "major":
            chordFormula = major;
            break;
        case "minor":
            chordFormula = minor;
            break;
        case "augmented":
            chordFormula = augmented;
            break;
        case "diminished":
            chordFormula = diminished;
            break;
        case "sus2":
            chordFormula = sus2;
            break;
        case "sus4":
            chordFormula = sus4;
            break;
        case "major7":
            chordFormula = major7;
            break;
        case "minor7":
            chordFormula = minor7;
            break;
        case "minor7b5":
            chordFormula = minor7b5;
            break;
        case "dom7":
            chordFormula = dom7;
            break;
        default:
            console.log("Defaulting B****!");
            break;
        }
        for (var note = 0; note < chordFormula.length; note++) {
            spelledArray.push(arrayForConstruction[chordFormula[note]]);
        }
    return spelledArray;
}

function updateCurrentChoice() {
    //This function updates the display of what is currently selected as a chord

    rootNote = $('#root').val();
    quality = $('#quality').val();
    $('#current_choice').html(rootNote + " " + quality);
    permutationsDone = false;
}

function findShape() {
    //This functions job is to regularly update the current shape name, if that current shape
    //does not exist as a key in shapesDictionary, create that object inside of the shapesDictionary
    //and give it some temporary values for shapeRegulator() to evaluate.

    var currentChoice;
    var currentShape = "shape" + String(shapeCounter);

    if (typeof (shapesDictionary[currentShape]) == "undefined"){
        shapesDictionary[currentShape] = shapeObject();
    }

    //This console.log tells you the length of the keys in an object
    // console.log(Object.keys(shapesDictionary).length);

    while (currentSpellingCombos[0].length > 0) {

        if (typeof shapesDictionary[currentShape][6] == "string"){

            for (var i = 0; i < sixthString.length; i++) {

                if (sixthString[i].innerHTML == currentSpellingCombos[0][0]) {
                    currentChoice = sixthString[i];

                    if (determineNextNote(currentChoice, shapesDictionary[currentShape]) == true) {
                        shapesDictionary[currentShape][6] = parseInt(currentChoice.id.slice(2));
                        currentSpellingCombos[0].splice(0, 1);
                        break;

                    } else {
                        break;
                    }
                }
            }
        }

        if (typeof shapesDictionary[currentShape][5] == "string") {

            for (var j = 0; j < fifthString.length; j++) {

                if (fifthString[j].innerHTML == currentSpellingCombos[0][0]) {
                    currentChoice = fifthString[j];

                    if (determineNextNote(currentChoice, shapesDictionary[currentShape]) == true) {
                        shapesDictionary[currentShape][5] = parseInt(currentChoice.id.slice(2));
                        currentSpellingCombos[0].splice(0, 1);
                        break;

                    } else {
                        break;
                    }
                }
            }
        }

        if (typeof shapesDictionary[currentShape][4] == "string") {

            for (var k = 0; k < fourthString.length; k++) {

                if (fourthString[k].innerHTML == currentSpellingCombos[0][0]) {
                    currentChoice = fourthString[k];

                    if (determineNextNote(currentChoice, shapesDictionary[currentShape]) == true) {
                        shapesDictionary[currentShape][4] = parseInt(currentChoice.id.slice(2));
                        currentSpellingCombos[0].splice(0, 1);
                        break;

                    } else {
                        break;
                    }
                }
            }
        }

        if (typeof shapesDictionary[currentShape][3] == "string") {

            for (var l = 0; l < thirdString.length; l++) {

                if (thirdString[l].innerHTML == currentSpellingCombos[0][0]) {
                    currentChoice = thirdString[l];

                    if (determineNextNote(currentChoice, shapesDictionary[currentShape]) == true) {
                        shapesDictionary[currentShape][3] = parseInt(currentChoice.id.slice(2));
                        currentSpellingCombos[0].splice(0, 1);
                        break;

                    } else {
                        break;
                    }
                }
            }
        }

        if (typeof shapesDictionary[currentShape][2] == "string") {

            for (var m = 0; m < secondString.length; m++) {

                if (secondString[m].innerHTML == currentSpellingCombos[0][0]) {
                    currentChoice = secondString[m];

                    if (determineNextNote(currentChoice, shapesDictionary[currentShape]) == true) {
                        shapesDictionary[currentShape][2] = parseInt(currentChoice.id.slice(2));
                        currentSpellingCombos[0].splice(0, 1);
                        break;

                    } else {
                        break;
                    }
                }
            }
        }

        if (typeof shapesDictionary[currentShape][1] == "string") {

            for (var n = 0; n < firstString.length; n++) {

                if (firstString[n].innerHTML == currentSpellingCombos[0][0]) {
                    currentChoice = firstString[n];

                    if (determineNextNote(currentChoice, shapesDictionary[currentShape]) == true) {
                        shapesDictionary[currentShape][1] = parseInt(currentChoice.id.slice(2));
                        currentSpellingCombos[0].splice(0, 1);
                        break;

                    } else {
                        break;
                    }
                }
            }
        }
    }
    currentSpellingCombos.splice(0,1);
    return currentShape;
}

function shapeRegulator(){
    //First this function runs resetColors() to clear the current colors off the fretboard.
    //Second, this function runs resetOptions() to simply do it now rather than later.
    //It then runs the permute function to create all possible spelling variations.
    //This function also contains the logic for what the current shape's fate will be. It helps prevent duplicate shapes
    resetColors();
    spellingArray = createChord();
    resetOptions();
    var shapeToEvaluate;

    if (permutationsDone == false) {
        currentSpellingCombos = permute(spellingArray);
        permutationsDone = true;

    }

    console.log(shapesDictionary);
    console.log("shape Counter ", shapeCounter);

    if (currentSpellingCombos.length == 0){
        lightItUp("shape" + String(shapeCounter));
    } else{
        shapeToEvaluate = findShape();

        while (preventDuplicateShape(shapeToEvaluate) == false) {
            console.log(preventDuplicateShape(shapeToEvaluate));
            delete shapesDictionary[shapeToEvaluate];
            shapeToEvaluate = findShape();
        }
        lightItUp(shapeToEvaluate);
        }
}

function lightItUp(chordShapeKey){
    // This function is used to "light up" the correct notes in the chord shape.
    //Straightforward, for loop numbers 1 through 6, those are the strings and the keys.
    //Take the key and if it has a numerical value pair, concatenate with a "_" and cast it as a string
    //to find this element on the DOM. Then change the background-color to red.
    for (var string = 1; string < 7; string++) {

            if (typeof shapesDictionary[chordShapeKey][string] == "string"){

            } else{
                var idToLightUp = "#" + String(string) + "_" + String(shapesDictionary[chordShapeKey][string]);
                $(idToLightUp).css("background-color", "red");
            }
        }
}

function resetColors(){
    //This function resets all the "lit" up squares to their original values.
    $('.square').css("background-color", "white");
    $('.open_strings').css("background-color", "gray");
}

function resetOptions(){
    //Resets the options such as root name and chord quality
    document.getElementById('root').selectedIndex = 0;
    document.getElementById('quality').selectedIndex = 0;
}

function shapeObject(){
    //This function returns a blank template that is meant to be used as a value for a key in the shapesDictionary
    return {6:"", 5:"", 4:"", 3:"", 2:"", 1:""};
}

function preventDuplicateShape(currentShapeKey){
    //This function is used to prevent a duplicate shape.
    var shapeString = "shape";

    for (var shape = 0; shape < Object.keys(shapesDictionary).length; shape++) {

        if (shape == shapeCounter){

        } else {

            // console.log("*******");
            // console.log("shape being evaluated");
            // console.log(shapesDictionary[currentShapeKey]);
            // console.log(shapesDictionary[shapeString + String(shape)]);
            // console.log(shapesDictionary[shapeString + String(shape)] == shapesDictionary[currentShapeKey]);
            // console.log("*******");


            if (shapesDictionary[shapeString + String(shape)] == shapesDictionary[currentShapeKey]) {
                return false;
            }
        }
    }
    return true;
}

function determineNextNote(currentNote, currentShape){
//    This function determines whether the next note is physically possible or not.
    var currentNoteFret = parseInt(currentNote.id.slice(2));

    for (var i = 6; i > 0; i--){

        if ((typeof currentShape[i]) == "string"){

        } else{

            if (Math.abs(currentNoteFret - currentShape[i]) > 3){

                return false;
            }
        }
    }
    return true;
}


//The following function permute is not my own.
//le_m posted this code snippet on stack overflow on the "permutations-in-javascript" thread.
function permute(permutation) {
  var length = permutation.length,
      result = new Array([0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600][length]),
      c = new Array(length).fill(0),
      i = 1,
      j = 1;

  result[0] = permutation.slice();
  while (i < length) {
    if (c[i] < i) {
      var k = (i % 2) ? c[i] : 0,
          p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result[j] = permutation.slice();
      ++j;
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

$('#previous').click(function(){
    shapeCounter--;
    if (shapeCounter == 0) {
        $('#previous').fadeOut(10);
    } else if (shapeCounter < Object.keys(shapesDictionary).length){
        $('#next').fadeIn(10);
    }
    shapeRegulator();
});

$('#next').click(function(){
    shapeCounter++;
    if (currentSpellingCombos.length == 1 && shapeCounter == Object.keys(shapesDictionary).length) {
        $('#next').fadeOut(10);
    } else if (currentSpellingCombos.length == 0 && shapeCounter == Object.keys(shapesDictionary).length -1) {
        $('#next').fadeOut(10);
    } else if (shapeCounter == 1) {
        $('#previous').fadeIn(10);
    }
    shapeRegulator();
});

$('#generate_button').click(function(){
    shapeCounter = 0;
    $('#next').fadeIn(10);
});
