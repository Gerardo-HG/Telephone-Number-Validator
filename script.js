const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

/* VALID NUMBERS
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555

------------

5555555555
555-555-5555
(555)555-5555
*/

// Invalid : 1 555)555-5555

/*
const regexOne = /^(1\s)?(?:(\d{3}[-\s]?)?\d{3}[-\s]?\d{4}|\d{10})$/;
const regexTwo = /^(1\s)?\(?\d{3}\)?\s*\d{3}-\d{4}$/;
const regexThree = /^(1\s)?\(?\d{3}\)?\d{3}-\d{4}$/;
*/

//const allRegex = [regexOne, regexTwo, regexThree];
const regexNoCodeOne = /^(?:\d{3}[-\s]\d{3}[-\s]\d{4}|\d{10})$/;
const regexNoCodeTwo = /^\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
const regexYesCodeOne = /^1\s?(?:\d{3}[-\s]?\d{3}[-\s]?\d{4}|\d{10})$/;
const regexYesCodeTwo = /^1\s?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

//const regexNoCodeTwo = /^\(\d{3}\) ?\d{3}-\d{4}$/;
const allRegex = [
  regexNoCodeOne,
  regexNoCodeTwo,
  regexYesCodeOne,
  regexYesCodeTwo,
];

function clearValues() {
  userInput.value = "";
  result.innerHTML = "";
  result.style.display = "none";
}

const verifyNumber = (phoneNumber) => {
  const verified = allRegex.some((regex) => regex.test(phoneNumber) == true);
  return verified;
};

function showResults() {
  const value = userInput.value.trim();
  if (value == "") {
    alert("Please provide a phone number");
    return;
  } else {
    const verifyResult = verifyNumber(value);

    if (verifyResult) {
      result.style.display = "block";
      result.innerHTML += `<p>Valid US number: ${value}</p>`;
    } else {
      result.style.display = "block";
      result.innerHTML += `<p>Invalid US number: ${value}</p>`;
    }
  }
  userInput.value = "";
}

checkButton.addEventListener("click", showResults);
clearButton.addEventListener("click", () => {
  clearValues();
});

//\
