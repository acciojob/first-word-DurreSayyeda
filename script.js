function firstWord(s) {
  // your code here
	 if (s === '' || !s.includes(' ')) {
    // If the input string is empty or does not contain any space, return the entire string
    return s;
  } else {
    // Extract the first word by taking characters up to the first space
    return s.substring(0, s.indexOf(' '));
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
