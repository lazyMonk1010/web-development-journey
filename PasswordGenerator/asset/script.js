// Custom attributes ko fetch kar lete hai in start
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowercaseCheckbox = document.querySelector("#lowercase");
const numbersCheckbox = document.querySelector("#numbers");
const symbolCheckbox = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckbox = document.querySelectorAll("input[type=checkbox]");
const symbols = '`~!@#$%^&*(_+=-0{[};:]\|"<>,.?/';

// Some initial observing
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();

// Set strength circle color to grey 
setIndicator("#ccc");
// Set password length
function handleSlider() {
    // Password length ko UI p reflect krwata hai yh iska kaam hai
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max-min)) +"% 100"
}

// Setting indicator color set and shadow set 
function setIndicator(color) {
    indicator.style.backgroundColor = color;
    // Shadow
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

// Minimum or max k bich random val set krna hai
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0, 9);
}

function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65, 91));
}

// Us string k konse position m konsa character p konsa symbol pada hai
function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = uppercaseCheckbox.checked;
    let hasLower = lowercaseCheckbox.checked;
    let hasNum = numbersCheckbox.checked;
    let hasSym = symbolCheckbox.checked;

    if (hasLower && hasUpper && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

// Copy the text from the password display will be an asynchronous function
// We have to do error handling using try-catch
async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        // Span k andr copy vala text dal do
        copyMsg.innerText = "copied";
    } catch (e) {
        copyMsg.innerText = "failed";
    }
    // To make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

function shufflePassword(array) {
    // Fisher-Yates method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckbox.forEach((checkbox) => {
        if (checkbox.checked) checkCount++;
    });

    // Special condition if password length is less than num of checked checkbox
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) copyContent();
});

generateBtn.addEventListener('click', () => {
    // None of the checkbox is clicked 
    if (checkCount === 0) return;

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // Let's start the journey to find new password 
    console.log("starting the journey");

    // Remove old password
    password = "";

    // Let's put the stuff mentioned by checkbox
    let funcArr = [];

    if (uppercaseCheckbox.checked) funcArr.push(generateUpperCase);
    if (lowercaseCheckbox.checked) funcArr.push(generateLowerCase);
    if (numbersCheckbox.checked) funcArr.push(generateRandomNumber);
    if (symbolCheckbox.checked) funcArr.push(generateSymbol);

    // Compulsory addition
    for (let i = 0; i < funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("compulsory addition done");

    // Remaining 
    for (let i = 0; i < passwordLength - funcArr.length; i++) {
        let rndIndex = getRndInteger(0, funcArr.length);
        console.log("rndIndex" + rndIndex);
        password += funcArr[rndIndex]();
    }
    console.log("remaining addition done");

    // Shuffle the password 
    password = shufflePassword(Array.from(password));
    console.log("shuffling done");

    // Show in UI 
    passwordDisplay.value = password;
    console.log("ui done");

    // Calculate strength 
    calcStrength();
});
