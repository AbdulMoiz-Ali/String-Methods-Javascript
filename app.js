document.write("<br>");
document.write("<h3>Question no 01</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques1() ">Click Me</button>');
document.write("<br>");
document.write("<br>");
function ques1() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "! Welcome.");
    console.log("Hello, " + fullName + "! Welcome.");
}

// question no 2

document.write("<h3>Question no 02</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques2();">Click Me</button>');
function ques2() {
    var favoriteModel = prompt("What is your favorite mobile phone model?");
    var inputLength = favoriteModel.length;
    alert("The length of your favorite mobile phone model input is: " + inputLength);
    console.log("The length of your favorite mobile phone model input is: " + inputLength);
}
document.write("<br>");
document.write("<br>");

//question no 3

document.write("<h3>Question no 03</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques3()">Click Me</button>');
function ques3() {
    var word = "Pakistani";
    var indexOfN = word.indexOf("n");
    alert("The index of letter 'n' in the word 'Pakistani' is: " + indexOfN);
    console.log("The index of letter 'n' in the word 'Pakistani' is: " + indexOfN);
}
document.write("<br>");
document.write("<br>");

//question no 4

document.write("<h3>Question no 04</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques4()">Click Me</button>');
function ques4() {
    var word = "Hello World";
    var lastIndexOfL = word.lastIndexOf("l");
    alert("The last index of letter 'l' in the word 'Hello World' is: " + lastIndexOfL);
    console.log("The last index of letter 'l' in the word 'Hello World' is: " + lastIndexOfL);
};
document.write("<br>");
document.write("<br>");
//question no 5
document.write("<h3>Question no 05</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques5()">Click Me</button>');
function ques5() {
    var word = "Pakistani";
    var characterAtIndex3 = word.charAt(3);
    console.log("The character at the 3rd index in the word 'Pakistani' is: " + characterAtIndex3);
    alert("The character at the 3rd index in the word 'Pakistani' is: " + characterAtIndex3);
}

// document.write('<div id="pere"></div>')
document.write("<br>");
document.write("<br>");

//question no 6

document.write("<h3>Question no 06</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques6()"">Click Me</button>');
function ques6() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    var fullName = firstName.concat(" ", lastName);
    alert("Hello, " + fullName + "! Welcome.");
}
// document.write('<div id="result"></div>')
document.write("<br>");
document.write("<br>");


//question no 7

document.write("<h3>Question no 07</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques7()">Click Me</button>');
function ques7() {
    var word = "Hyderabad";
    var replacedWord = word.replace("Hyder", "Islam");
    alert("The replaced word is: " + replacedWord);
    console.log("The replaced word is: " + replacedWord);
}
document.write("<br>");
document.write("<br>");


//question no 8

document.write("<h3>Question no 08</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques8()">Click Me</button>');
function ques8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var replacedMessage = message.split("and").join("&");
    console.log("The modified message is: " + replacedMessage);
    alert("The modified message is: " + replacedMessage);
}
document.write("<br>");
document.write("<br>");

//question no 9

document.write("<h3>Question no 09</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques9()">Click Me</button>');
function ques9() {
    var str = "472";
    var num = parseInt(str);
    console.log("Value: " + num + "\r" + "Type: " + typeof (num));
    alert("Value: " + num + "\r" + "Type: " + typeof (num));
}
document.write("<br>");
document.write("<br>");

//question no 10

document.write("<h3>Question no 10</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques10()">Click Me</button>');
function ques10() {
    var userInput = prompt("Enter your input:");
    var capitalizedInput = userInput.toUpperCase();
    alert("Use Input: " + userInput + '\r' + 'Upper Case :' + capitalizedInput);
    console.log("Use Input: " + userInput + '\r' + 'Upper Case :' + capitalizedInput);
}
document.write("<br>");
document.write("<br>");

//question no 11

document.write("<h3>Question no 11</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques11()">Click Me</button>');
function ques11() {
    var userInput = prompt("Enter your input:");
    var words = userInput.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    var titleCaseInput = words.join(" ");
    alert("Input in title case: " + titleCaseInput);
    console.log("Input in title case: " + titleCaseInput);
}
document.write("<br>");
document.write("<br>");

//question no 12

document.write("<h3>Question no 12</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques12()">Click Me</button>');
function ques12() {
    var num = prompt('For Example\r' + 35.36 + '\r Pu know');
    var numAsString = num.toString();
    var stringWithoutDot = numAsString.replace(".", "");
    alert("Modified string without dot: " + stringWithoutDot);
    console.log("Modified string without dot: " + stringWithoutDot);
}
document.write("<br>");
document.write("<br>");

//question no 13

document.write("<h3>Question no 13</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques13()">Click Me</button>');
function ques13() {
    var username = prompt("Enter your username:");
    var specialSymbols = ['@', '.', ',', '!'];
    function isSpecialSymbol(char) {
        var charCode = char.charCodeAt(0);
        return specialSymbols.includes(char);
    }
    function containsSpecialSymbols(username) {
        for (var i = 0; i < username.length; i++) {
            if (isSpecialSymbol(username[i])) {
                return true;
            }
        }
        return false;
    }
    if (containsSpecialSymbols(username)) {
        // Prompt the user to enter a valid usernam
        alert("Please enter a valid username without special symbols [@ . , !]");
    } else {
        // Username is valid, display it
        alert("Your username is: " + username);
    }
}
document.write("<br>");
document.write("<br>");

//question no 14

document.write("<h3>Question no 14</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques14()">Click Me</button>');
function ques14() {
    var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userInput = prompt("Enter an item to search:").toLowerCase();
    var found = false;

    for (var i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === userInput) {
            found = true;
            break;
        }
    }
    if (found) {
        alert("Yes, the item '" + userInput + "' is found in the list.");
    } else {
        alert("No, the item '" + userInput + "' is not found in the list.");
    }

}
document.write("<br>");
document.write("<br>");

//question no 15

document.write("<h3>Question no 15</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques15()">Click Me</button>');
function ques15() {
    function isLetter(char) {
        var charCode = char.charCodeAt(0);
        return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
    }

    function isDigit(char) {
        var charCode = char.charCodeAt(0);
        return charCode >= 48 && charCode <= 57;
    }

    // Prompt the user to enter a password
    var password = prompt("Enter your password:");

    // Check if the password meets the requirements
    if (
        password.length < 6 ||             // Check length
        isDigit(password[0]) ||            // Check if it starts with a number
        !/[a-zA-Z]/.test(password) ||     // Check if it contains alphabets
        !/\d/.test(password)               // Check if it contains numbers
    ) {
        // If the password doesn't meet the requirements, prompt the user to enter a valid password
        alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
    } else {
        // If the password meets the requirements, inform the user that it's valid
        alert("Your password is valid.");
    }

}
document.write("<br>");
document.write("<br>");

//question no 16

document.write("<h3>Question no 16</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques16()">Click Me</button>');
function ques16() {
    var university = "University of Karachi";
    var universityArray = university.split(" ");

    alert("Elements of the array:<br>");
    for (var i = 0; i < universityArray.length; i++) {
        alert((i + 1) + ". " + universityArray[i] + "<br>");
    }

}
document.write("<br>");
document.write("<br>");

//question no 17

document.write("<h3>Question no 17</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques17()">Click Me</button>');
function ques17() {
    var userInput = prompt("Enter a string:");

    if (userInput !== null && userInput !== "") {
        var lastCharacter = userInput.charAt(userInput.length - 1);
        alert("The last character of your input is: " + lastCharacter);
    } else {
        alert("No input provided. Please enter a string.");
    }

}
document.write("<br>");
document.write("<br>");

//question no 18

document.write("<h3>Question no 18</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques18()">Click Me</button>');
function ques18() {
    var sentence = "The quick brown fox jumps over the lazy dog";
    var lowercaseSentence = sentence.toLowerCase();
    var wordToSearch = "the";
    var words = lowercaseSentence.split(" ");
    var count = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i] === wordToSearch) {
            count++;
        }
    }

    alert("The word '" + wordToSearch + "' occurs " + count + " times in the given string.");
    console.log("The word '" + wordToSearch + "' occurs " + count + " times in the given string.");

}
document.write("<br>");
document.write("<br>");

document.write('<div style="color: blue;background-color: black;"><br><h1>Best OF luck<span style="font-size:50px;">👋</span></h1><br></div>')//&#128075