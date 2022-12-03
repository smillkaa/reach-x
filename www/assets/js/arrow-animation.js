const hi = document.querySelector("h1");

// Function that splits each letter of text into its own span
function spanText(text) {
    const string = text.innerText; 
    let spaned = ''; // Setting a variable that is an empty string
    for (let i = 0; i < string.length; i++) {
        if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1); // If string is empty, add a letter into it
        else spaned += '<span>' + string.substring(i, i + 1) + '</span>'; // Then add a span element around it
    }
    text.innerHTML = spaned;
}

spanText(hi);

let animations = document.querySelectorAll('.animation');

// For each span (letter) add a 0.1 delay of animation
animations.forEach(animation => {
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
        letter.style.animationDelay = (i * 0.1) + 's';
    })
})
