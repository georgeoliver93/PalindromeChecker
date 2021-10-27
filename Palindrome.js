// Method 1

function palindrome(str) {                              // L1 - creates function where we can input a 'string'. and then perform following to said string:
    return (                                              // L2 - return() -> will ouput boolean value due to the === operator
      str.replace(/[\W_]/g, "").toLowerCase() ===         // L3 - deletes all non-alpha numeric elements, and lowercase remaining characters
                                                          
        str                                               // L4 - reversed version
        .replace(/[\W_]/g, "")                            // L5 - deketes all non-alpha numeric elements
        .toLowerCase()                                    // L6 - lowercases the remaining characters
        .split("")                                        // L7 - splits the characters into elements within an array BECAUSE STRING ARE IMMUTABLE (cannot be altered)
        .reverse()                                        // L8 - Then we can reverse the elements within the array
        .join("")                                         // L9 - converts it back to a string
    );
  }
  
  // TEST EXAMPLE
  console.log(palindrome("Race Car")) // True
  console.log(palindrome("George")) // False
  
  /* Method 2
  
  function palindrome2(str) {                                                // L1 - Creates function
    
    const nonAlphaNum = /[\W_]/g;                                           // L2 - constant variable which can be refered back to instead of typing out /[\W_]/g
    
    let firstVersion = str.toLowerCase().replace(nonAlphaNum, '');          // L3 - 
    let reversedVersion = firstVersion.split('').reverse().join('');        // L4
    
    return reversedVersion === firstVersion;                                // L5
  }
  
  // Test Examplw
  console.log(palindrome("Race Car"));    // True
  console.log(palindrome("George"));      // False
  
  */
  
  <!-------------------- START WEB API ---------------- >
  // WEB API - JAVASCRIPT TO HTML
  let submitButtonEvent = document.getElementById("submitButton");
  
  submitButtonEvent.addEventListener("click", function() {
       'use strict'
    
    var value = document.getElementById("inputString").value;
    var notification = document.getElementById("notification");
    var displayWord = document.getElementById("displayWord");
    
    if(palindrome(value)) {
      notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a Palindrome!`;
      displayWord.innerHTML = 
        `Forwards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
      
    } else {
      notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is NOT a Palindrome!`;
      displayWord.innerHTML = 
        `Forwards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
    }
    
  });
  <!-------------------- END WEB API ---------------- >