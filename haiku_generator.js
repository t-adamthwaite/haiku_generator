//Possible subjects for the poem
const subjects = [
    ['mouse', 1],
    ['tiger', 2],
    ['bird', 1],
    ['dog', 1],
    ['girraffe', 2],
    ['shark', 1],
    ['dolphin', 2],
    ['elephant', 3],
    ['ox', 1],
    ['monkey', 2],
    ['sealion', 3],
    ['snake', 1],
    ['starfish', 2],
    ['hamster', 2],
    ['armadillo', 4]
];

//Variables for tracking each line of the poem
let line1 = '';
let line1Syllables = 0;
let line2 = '';
let line2Syllables = 0;
let line3 = '';
let line3Syllables = 0;

//Temporary Var to track each next possible word based on syllables
let nextPossibleWords = [];
const numSyl = Math.floor(Math.random() * 4);

//Choose word from type if type is selected next
function ifSubjects() {
    subjects.forEach(subject => {
        if (subject[1] === numSyl) {
            nextPossibleWords.push(subject[0]);
        }   
    })
}

ifSubjects();

console.log(nextPossibleWords);

/*I should change this to a code phrase generator, having it only spit out a line
with a predetermined number of syllables... that would be easier and more manageale
than an entire haiku*/