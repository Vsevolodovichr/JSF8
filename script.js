//1
function isFirstCharacterUpperCase(str) {
    return str[0] === str[0].toUpperCase();
  }
//2
function isValidEmail(email) {
    var re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
    //3
    var str = "Hello World";
var match = str.match(/(.+) (.+)/g);
str = match[1] + " " + match[2];
console.log(str);
//4
function isValidCreditCardNumber(number) {
if (number.length !== 16) {
return false;
}
var digits = number.split('');
var oddSum = 0;
for (var i = 0; i < digits.length; i += 2) {
oddSum += parseInt(digits[i], 10);
}
var evenSum = 0;
for (var i = 1; i < digits.length; i += 2) {
evenSum += parseInt(digits[i], 10) * 2;
if (evenSum >= 10) {
evenSum -= 9;
}
}
var sum = oddSum + evenSum;
return sum % 10 === 0;
}  
//5
function isValidEmail(email) {
    if (/[^0-9a-zA-Z-]/.test(email)) {
    return false;
    }
        if (email[0] === "") {
    return false;
    }
    if (/--/.test(email)) {
    return false;
    }
    return true;
    }
    //6
    function isValidLogin(login) {
        if (login.length < 2 || login.length > 10) {
          return false;
        }
        if (/\d/.test(login[0])) {
          return false;
        }
        if (/[^a-zA-Z0-9]/.test(login)) {
          return false;
        }
        return true;
      }
      