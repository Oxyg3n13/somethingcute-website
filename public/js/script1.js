const answers_no = {
    english: [
        "No",
        "Come on.",
        "I know you want it.",
        "You can't be fr.",
        "Are you sure about this?",
        "I can give you a second to think about it.",
        "Why would you even say no, seriously.",
        "I am begging u to stop.",
        "Ok, Let's just start over.."
    ],
    serbian: [
        "Ne",
        "Hajde..",
        "Znam da hoćeš.",
        "Ne možeš biti ozbiljan.",
	"Jesi li siguran u to?",
        "Mogu ti dati sekund da razmislim o tome.",
	"Zašto bi čak i rekao ne, ozbiljno?",
	"Preklinjem te da prestaneš.",
        "Ok, počnimo iznova.."
    ]
};

answers_yes = {
    "english": "Yes",
    "serbian": "Da"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "serbian") {
        questionHeading.textContent = "Da li biste dobili moj poklon?";
    } else {
        questionHeading.textContent = "Would you receive my gift?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "serbian") {
        successMessage.textContent = "Dobro je! Volim te! (i tried at least.)";
    } else {
        successMessage.textContent = "Good! Love you!";
    }
}