/**
 * Created by emanuel on 5/24/17.
 */
var notesArray = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
var stringsArray = ['E', 'A', 'D', 'G', 'B', 'E'];
var major = [0, 4, 7];
var minor = [0, 3, 7];
var diminished = [0, 3, 6];
var augmented = [0, 4, 8];
//
// var fretboardDictionary = {
//
// }



function createChord() {
    var rootNote = $('#root').val();
    var quality = $('#quality').val();
    var arrayForConstruction;
    for (var startingNote = 0; startingNote < notesArray.length; startingNote++) {
        if (notesArray[startingNote] == rootNote) {
            arrayForConstruction = (notesArray.slice(startingNote).concat(notesArray.slice(0, startingNote + 1)));
            // console.log(arrayForConstruction);
            console.log(arrayForConstruction);
            arrayForConstruction = arrayForConstruction.splice(major);
            console.log(arrayForConstruction);
            findShape(arrayForConstruction);
        }
    }
}

// function arrayForString(starting_note){
//     var newArray1;
//     var newArray2;
//     var landingPoint = 0;
//     for (var startingNote = 0; startingNote < notesArray.length; startingNote++){
//         if (notesArray[startingNote] == starting_note){
//             landingPoint = startingNote;
//             newArray1 = (notesArray.slice(startingNote));
//             newArray2 = (notesArray.slice(0, startingNote + 1));
//             break;
//         }
//     }
//     return newArray1.concat(newArray2)
// }
//
// function createSixArrays(arrayOfStrings){
//     arrayOne = arrayForString(arrayOfStrings[0]);
//     arrayTwo = arrayForString(arrayOfStrings[1]);
//     arrayThree = arrayForString(arrayOfStrings[2]);
//     arrayFour = arrayForString(arrayOfStrings[3]);
//     arrayFive = arrayForString(arrayOfStrings[4]);
//     arraySix = arrayForString(arrayOfStrings[5]);
//
//     oneArrayToRuleThemAll = [arrayOne, arrayTwo, arrayThree, arrayFour, arrayFive, arraySix];
//
//     return oneArrayToRuleThemAll
// }
//
// function assignNotesToDiagram(arrayOfStringNotes){
//     for (var stringArray = 0; stringArray < arrayOfStringNotes.length; stringArray++){
//         var firstCounter = String(stringArray + 1) + "_";
//         var currentString = arrayOfStringNotes[stringArray];
//
//         for (var notesPerString = 0; notesPerString <= currentString.length; notesPerString++){
//             var secondCounter = notesPerString;
//             var fullCounter = firstCounter + String(secondCounter);
//             var currentElement = "'#" + fullCounter + "'";
//             // console.log("This is fret number " + String(notesPerString) + " " + currentString[notesPerString]);
//             // console.log(fullCounter);
//
//         }
//
//     }
// }

function updateCurrentChoice() {
    var rootNote = $('#root').val();
    var quality = $('#quality').val();
    $('#current_choice').html(rootNote + " " + quality);
}

function findShape(spellingArray) {
    var tempArray = [];
    var sixthString = [];
    var fifthString = [];
    var fourthString = [];
    var thirdString = [];
    var secondString = [];
    var firstString = [];
    var currentChoice;

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

    while (spellingArray.length > 0) {
        for (var i = 0; i < sixthString.length; i++) {
            if (sixthString[i].innerHTML == spellingArray[0]) {
                currentChoice = sixthString[i];
                currentChoice.style.backgroundColor = "red";
                spellingArray.splice(0, 1);
                break;
            }
        }
        for (var j = 0; j < fifthString.length; j++) {
            if (fifthString[j].innerHTML == spellingArray[0]) {
                currentChoice = fifthString[j];
                currentChoice.style.backgroundColor = "red";
                spellingArray.splice(0, 1);
                break;
            }
        }
        for (var k = 0; k < fourthString.length; k++) {
            if (fourthString[k].innerHTML == spellingArray[0]) {
                currentChoice = fourthString[k];
                currentChoice.style.backgroundColor = "red";
                spellingArray.splice(0, 1);
                break;
            }
        }
        for (var l = 0; l < thirdString.length; l++) {
            if (thirdString[l].innerHTML == spellingArray[0]) {
                currentChoice = thirdString[l];
                currentChoice.style.backgroundColor = "red";
                spellingArray.splice(0, 1);
                break;
            }
        }
        for (var m = 0; m < secondString.length; m++) {
            if (secondString[m].innerHTML == spellingArray[0]) {
                currentChoice = secondString[m];
                currentChoice.style.backgroundColor = "red";
                spellingArray.splice(0, 1);
                break;
            }
        }
        for (var n = 0; n < firstString.length; n++) {
            if (firstString[n].innerHTML == spellingArray[0]) {
                currentChoice = firstString[n];
                currentChoice.style.backgroundColor = "red";
                spellingArray.splice(0, 1);
                break;
            }
        }
    }
}


var cMajor = ['C', 'E', 'G', 'B', 'D', 'F'];
findShape(cMajor);

// assignNotesToDiagram(createSixArrays(stringsArray));