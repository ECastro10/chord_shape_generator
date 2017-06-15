/**
 * Created by emanuel on 5/24/17.
 */
//For createChord()
var notesArray = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
var stringsArray = ['E', 'A', 'D', 'G', 'B', 'E'];

//For createChord() and findShapes()
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

var rootnote;
var quality;
var shapesDictionary = {};
var currentSpellingCombos;

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
            // console.log(arrayForConstruction);
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
        // console.log(chordFormula);
        for (var note = 0; note < chordFormula.length; note++) {
            spelledArray.push(arrayForConstruction[chordFormula[note]]);
        }
        // console.log(spelledArray);
    return spelledArray;
}

function updateCurrentChoice() {
    //This function updates the display of what is currently selected as a chord

    rootNote = $('#root').val();
    quality = $('#quality').val();
    $('#current_choice').html(rootNote + " " + quality);
}

function findShapes() {
    //First this function runs resetColors() to clear the current colors off the fretboard. Also reveals
    //next and previous buttons at appropriate times.
    //Second, this function runs createChord() to get the right spelling and saves it as an array variable.
    //It then runs the permute function to create all possible spelling variations.
    //This function basically searches the "strings" and lights up the ones that are in the spellingArray
    resetColors();
    $('#next').toggleClass("reveal");
    var spellingArray = createChord();
    var currentChoice;
    var currentSpellingArray;
    currentSpellingCombos = permute(spellingArray);

    for (var comboNum = 0; comboNum < currentSpellingCombos.length; comboNum++) {
        shapesDictionary["shape" + String(comboNum)] = shapeObject();
    }

    //This comment tells you the length of the keys in an object
    console.log(Object.keys(shapesDictionary).length);

    for (var spelling = 0; spelling < currentSpellingCombos.length; spelling++) {

        currentSpellingArray = "shape" + String(spelling);

        while (currentSpellingCombos[spelling].length > 0) {

            for (var i = 0; i < sixthString.length; i++) {

                if (sixthString[i].innerHTML == spellingArray[0]) {
                    currentChoice = sixthString[i];

                    if (determineNextNote(currentChoice, shapesDictionary[currentSpellingArray]) == true){
                        shapesDictionary[currentSpellingArray][6] = parseInt(currentChoice.id.slice(2));
                        // currentChoice.style.backgroundColor = "red";
                        spellingArray.splice(0, 1);
                        break;

                    } else{
                        break;
                    }
                }
        }
            for (var j = 0; j < fifthString.length; j++) {

                if (fifthString[j].innerHTML == spellingArray[0]) {
                    currentChoice = fifthString[j];

                    if (determineNextNote(currentChoice, shapesDictionary[currentSpellingArray]) == true) {
                        shapesDictionary[currentSpellingArray][5] = parseInt(currentChoice.id.slice(2));
                        // currentChoice.style.backgroundColor = "red";
                        spellingArray.splice(0, 1);
                        break;

                    } else{
                        break;
                    }
                }
            }
            for (var k = 0; k < fourthString.length; k++) {
                if (fourthString[k].innerHTML == spellingArray[0]) {
                    currentChoice = fourthString[k];

                    if (determineNextNote(currentChoice, shapesDictionary[currentSpellingArray]) == true){
                        shapesDictionary[currentSpellingArray][4] = parseInt(currentChoice.id.slice(2));
                        // currentChoice.style.backgroundColor = "red";
                        spellingArray.splice(0, 1);
                        break;

                    } else{
                        break;
                    }
                }
            }
            for (var l = 0; l < thirdString.length; l++) {
                if (thirdString[l].innerHTML == spellingArray[0]) {
                    currentChoice = thirdString[l];

                    if(determineNextNote(currentChoice, shapesDictionary[currentSpellingArray]) == true){
                        shapesDictionary[currentSpellingArray][3] = parseInt(currentChoice.id.slice(2));
                        // currentChoice.style.backgroundColor = "red";
                        spellingArray.splice(0, 1);
                        break;

                    } else{
                        break;
                    }
                }
            }
            for (var m = 0; m < secondString.length; m++) {
                if (secondString[m].innerHTML == spellingArray[0]) {
                    currentChoice = secondString[m];

                    if (determineNextNote(currentChoice, shapesDictionary[currentSpellingArray]) == true) {
                       shapesDictionary[currentSpellingArray][2] = parseInt(currentChoice.id.slice(2));
                        // currentChoice.style.backgroundColor = "red";
                        spellingArray.splice(0, 1);
                        break;

                    } else{
                        break;
                    }
                }
            }
            for (var n = 0; n < firstString.length; n++) {
                if (firstString[n].innerHTML == spellingArray[0]) {
                    currentChoice = firstString[n];

                    if (determineNextNote(currentChoice, shapesDictionary[currentSpellingArray]) == true) {
                        shapesDictionary[currentSpellingArray][1] = parseInt(currentChoice.id.slice(2));
                        // currentChoice.style.backgroundColor = "red";
                        spellingArray.splice(0, 1);
                        break;

                    } else{
                        break;
                    }
                }
            }
        }
    }
    resetOptions();
    console.log(shapesDictionary);
}

function resetColors(){
    $('.square').css("background-color", "white");
    $('.open_strings').css("background-color", "gray");
}

function resetOptions(){
    document.getElementById('root').selectedIndex = 0;
    document.getElementById('quality').selectedIndex = 0;
}

function shapeObject(){
    //This function returns a blank template that is meant to be used as a value for a key in the shapesDictionary
    return {6:"", 5:"", 4:"", 3:"", 2:"", 1:""};
}

//Playing with a way to create shape objects to include in the shapesDictionary
// for (var i = 0; i < 5; i++){
//     shapesDictionary["shape" + String(i)] = shapeObject();
// }

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
