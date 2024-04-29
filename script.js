function firstWord(s) {
  // your code here
	if (!s) {
        return '';
    }

    return s.trim().split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
