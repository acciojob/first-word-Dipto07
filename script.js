function firstWord(s) {
  // your code here
	if (!s|| !s.includes(' ')) {
        return s;
    }

    const spaceIndex = s.indexOf(' ');
    
    const firstWord = s.substring(0, spaceIndex);
    
    return firstWord;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
