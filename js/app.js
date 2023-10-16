// Assignment 1 | COMP1073 Client-Side JavaScript 
//Mario Spina
// 200187077

// Declare a variable speechSynth to store the speech synthesis object
var speechSynth = window.speechSynthesis;

// Declare a variable spokenText to store the text that will be spoken out loud.
var spokenText = '';

// Arrays containing words for the buttons. Used the exact same words from the original book
var customNouns = ["Cat", "Dog", "Dad", "Mom", "Teacher", " Elephant", " Turkey", "Goat", "Monkey", "Fish", "Cow", "Frog", "Bug", "Worm"];
var customVerbs = ["Sat on", "Ate", "Danced With", "Saw", "Doesn't like", "Kissed"];
var customAdjectives = ["A funny", "A scary", "A goofy", "A slimy", "A barking", "A fat"];
var customPlaces = ["On the Moon", "On the Chair", "In my Spaghetti", "In my soup", "On the Grass", "In my Shoes"];

// HTML ID references for the buttons and output display area
var nounBtn = document.getElementById('noun');       
var verbBtn = document.getElementById('verb');       
var adjBtn = document.getElementById('adjective');   
var noun2Btn = document.getElementById('noun2');     
var placeBtn = document.getElementById('place');     
var speakBtn = document.getElementById('speak');    
var randomBtn = document.getElementById('random');   
var resetBtn = document.getElementById('reset');     
var outputArea = document.getElementById('output');       

// Function to get a random word from one of the given arrays.
function fetchRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to update the spokenText variable with a new word and display it.
function modifyStory(word) {
    spokenText += word + ' ';
    outputArea.innerText = spokenText;
}

// Event listeners for all the buttons
nounBtn.onclick = function() {
    modifyStory(fetchRandomWord(customNouns));
};

verbBtn.onclick = function() {
    modifyStory(fetchRandomWord(customVerbs));
};

adjBtn.onclick = function() {
    modifyStory(fetchRandomWord(customAdjectives));
};

noun2Btn.onclick = function() {
    modifyStory(fetchRandomWord(customNouns));
};

placeBtn.onclick = function() {
    modifyStory(fetchRandomWord(customPlaces));
};

randomBtn.onclick = function() {
    // Generate a random sentence by concatenating random words from different arrays.
    spokenText = fetchRandomWord(customNouns) + ' ' +
                  fetchRandomWord(customVerbs) + ' ' +
                  fetchRandomWord(customAdjectives) + ' ' +
                  fetchRandomWord(customNouns) + ' ' +
                  fetchRandomWord(customPlaces);
    outputArea.innerText = spokenText;
};

// Event listener for the "Reset" button.
resetBtn.onclick = function() {
    // Clears spokenText variable and the output display area.
    spokenText = '';
    outputArea.innerText = '';
};

// Event listener for the "Speak" button.
speakBtn.onclick = function() {
    // Calls the speakAloud function to make the browser speak the content of spokenText.
    speakAloud(spokenText);
};

// Function to speak the provided 'text' using the browser's speech synthesis.
function speakAloud(text) {
    // Creates a new SpeechSynthesisUtterance object with the text to be spoken.
    var utterThis = new SpeechSynthesisUtterance(text);
    // Use the speechSynth object to speak the utterThis content.
    speechSynth.speak(utterThis);
}
