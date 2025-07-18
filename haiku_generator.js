//Possible words for the output
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

const objects = [
    ['mountain', 2],
    ['dessert', 2],
    ['sea', 1],
    ['hill', 1],
    ['city', 1],
    ['neighborhood', 3],
    ['farm', 1],
    ['plain', 1],
    ['forest', 2],
    ['grassland', 2],
    ['prairie', 2],
    ['sky', 1],
    ['museum', 2],
    ['park', 1],
    ['tower', 2],
    ['beach', 1],
    ['dawn', 1]
];

const adverbs = [
    ['casually', 4],
    ['sneakilly', 3],
    ['actually', 4],
    ['blatantly', 3],
    ['easily', 3],
    ['mechanically', 5],
    ['meniachally', 5],
    ['systematically', 6],
    ['really', 2],
    ['actually', 4],
    ['badly', 2],
    ['critically', 4],
    ['predictably', 4],
    ['amazingly', 4],
    ['fatally', 3],
    ['remotely', 3],
    ['optimally', 4]
];

const verbs = [
    ['swims', 1],
    ['creates', 2],
    ['follows', 2],
    ['precipitates', 4],
    ['encounters', 3],
    ['runs', 1],
    ['eats', 1],
    ['absorbs', 2],
    ['watches', 2],
    ['corroborates', 4],
    ['encapsulates', 4],
    ['swears', 1],
    ['remembers', 3],
    ['remains', 2],
    ['feels', 1],
    ['shrinks', 2],
    ['abandons', 3]
];

//Variables for tracking each line of the poem
/*let line1 = '';
let line1Syllables = 0;
let line2 = '';
let line2Syllables = 0;
let line3 = '';
let line3Syllables = 0;*/

//Variables for the final output
let subject;
let object;
let verb;
let adverb;
let article;

//Temporary Var to track each next possible word based on syllables
let nextPossibleWords = [];
const nextWordIndex = Math.floor(Math.random() * nextPossibleWords.length);

//Determine the possible num syllables in each word based on DB
let numSyl;
const determineNumSyls = (type) => {
    if (type === 'verbs') {
        numSyl = Math.ceil(Math.random() * 4);
    } else if (type === 'adverbs') {
        numSyl = Math.ceil((Math.random() * 5) + 1);
    } else if (type === 'objects') {
        numSyl = Math.ceil(Math.random() * 3);
    } else if (type === 'subjects') {
        numSyl = Math.ceil(Math.random() * 4);
    }
}

//Choose word from type if type is selected next
function ifSubjects() {
    determineNumSyls('subjects');
    subjects.forEach(word => {
        if (word[1] === numSyl) {
            nextPossibleWords.push(word[0]);
            subject = nextPossibleWords[nextWordIndex];
        }   
    })
    nextPossibleWords.length = 0;
}

function ifObjects() {
    determineNumSyls('objects');
    objects.forEach(word => {
        if (word[1] === numSyl) {
            nextPossibleWords.push(word[0]);
            object = nextPossibleWords[nextWordIndex];
        }
    })
    nextPossibleWords.length = 0;
}

function ifVerbs() {
    determineNumSyls('verbs');
    verbs.forEach(word => {
        if (word[1] === numSyl) {
            nextPossibleWords.push(word[0]);
            verb = nextPossibleWords[nextWordIndex];
        }
    })
    nextPossibleWords.length = 0;
}

function ifAdverbs() {
    determineNumSyls('adverbs');
    adverbs.forEach(word => {
        if (word[1] === numSyl) {
            nextPossibleWords.push(word[0]);
            adverb = nextPossibleWords[nextWordIndex];
        }
    })
    nextPossibleWords.length = 0;
}

function ifArticles() {
    if (verb === 'swims' || verb === 'runs' || verb === 'swears') {
        article = 'to the';
    } else {
        article = 'the';
    }
}


//trigger the function to determine each word
ifSubjects();
ifObjects();
ifVerbs();
ifAdverbs();
ifArticles();

//link the words together to form the phrase.
let codephrase = `The ${subject} ${adverb} ${verb} ${article} ${object}.`

console.log(codephrase);

/*I should change this to a code phrase generator, having it only spit out a line
with a predetermined number of syllables... that would be easier and more manageale
than an entire haiku*/ //<-- This is resolved, running the code generates a single phrase.