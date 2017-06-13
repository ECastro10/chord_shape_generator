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

var rootnote;
var quality;
var shapeDistance = 0;
var shapesDictionary = {};

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

function findShape() {
    //First this function runs resetColors() to clear the current colors off the fretboard
    //Second, this function runs createChord() to get the right spelling and saves it as an array variable.
    //This function basically searches the "strings" and lights up the ones that are in the spellingArray
    resetColors();
    var spellingArray = createChord();
    var currentChoice;

    shapesDictionary["shape1"] = shapeObject();

    while (spellingArray.length > 0) {

        for (var i = 0; i < sixthString.length; i++) {

            if (sixthString[i].innerHTML == spellingArray[0]) {
                currentChoice = sixthString[i];

                if (determineNextNote(currentChoice, shapesDictionary["shape1"], 6) == true){
                    shapesDictionary["shape1"][6] = parseInt(currentChoice.id.slice(2));
                    currentChoice.style.backgroundColor = "red";
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

                if (determineNextNote(currentChoice, shapesDictionary["shape1"], 5) == true) {
                    shapesDictionary["shape1"][5] = parseInt(currentChoice.id.slice(2));
                    currentChoice.style.backgroundColor = "red";
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

                if (determineNextNote(currentChoice, shapesDictionary["shape1"], 4) == true){
                    shapesDictionary["shape1"][4] = parseInt(currentChoice.id.slice(2));
                    currentChoice.style.backgroundColor = "red";
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

                if(determineNextNote(currentChoice, shapesDictionary["shape1"], 3) == true){
                    shapesDictionary["shape1"][3] = parseInt(currentChoice.id.slice(2));
                    currentChoice.style.backgroundColor = "red";
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

                if (determineNextNote(currentChoice, shapesDictionary["shape1"], 2) == true) {
                   shapesDictionary["shape1"][2] = parseInt(currentChoice.id.slice(2));
                    currentChoice.style.backgroundColor = "red";
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

                if (determineNextNote(currentChoice, shapesDictionary["shape1"], 1) == true) {
                    shapesDictionary["shape1"][1] = parseInt(currentChoice.id.slice(2));
                    currentChoice.style.backgroundColor = "red";
                    spellingArray.splice(0, 1);
                    break;

                } else{
                    break;
                }
            }
        }
    }
    resetOptions();
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

function determineNextNote(currentNote, currentShape, stringNumber){
//    This function determines whether the next note is physically possible or not.
    var currentNoteFret = parseInt(currentNote.id.slice(2));

    for (var i = 6; i > 0; i--){

        if ((typeof currentShape[i]) == "string"){
            console.log("iteration # ", i);
            console.log("value = ", currentShape[i]);
            console.log("string number", stringNumber);
            console.log("");
        } else{
            if (Math.abs(currentNoteFret - currentShape[i]) > 3){
                console.log("currently on ", stringNumber + " and possible note, " + currentNoteFret);
                console.log(Math.abs(currentNoteFret - currentShape[i]));
                return false;
            }
        }
    }
    return true;
}
