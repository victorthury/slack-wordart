const specialChar = {
    '@': 'at',
    '#': 'hash',
    '!': 'exclamation',
    '?': 'question',
    'á': 'a',
    'ã': 'a',
    'â': 'a',
    'à': 'a',
    'é': 'e',
    'ê': 'e',
    'í': 'i',
    'ó': 'o',
    'õ': 'o',
    'ô': 'o',
    'ú': 'o',
    'ç': 'c',
}

function getText() {
    const text = document.getElementById('floatingInput').value;
    return text 
}

function getMessageApp() {
    const app = document.querySelector('input[name="messageApp"]:checked').value;
    return app;
}

function specialCharToCommonChar(char) {
    return specialChar[char];
} 


function slackWordArt(text) {
    let slackWordArt = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char in specialChar) {
            char = specialChar[char];
        }
        const charArt = char === ' ' ? '    ' : `:alphabet-white-${char}:`;
        slackWordArt += charArt;
    }

    return slackWordArt;
}

function discordWordArt(text) {
    let discordWordArt = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char in specialChar) {
            char = ' ';
        }
        const charArt = char === ' ' ? '    ' : `:regional_indicator_${char}: `;
        discordWordArt += charArt;
    }

    return discordWordArt;
}

function copyToClipBoard(e) {
    e.preventDefault();
    const messageApp = getMessageApp();
    const text =  getText().toLowerCase();
    const wordArt = messageApp === 'slack' ? slackWordArt(text) : discordWordArt(text);
    console.log(wordArt)
    navigator.clipboard.writeText(wordArt);
    // alert('Word art added to clipboard!')
}

document.getElementById('copyToClipboard').addEventListener(
    'click', copyToClipBoard, false
);
