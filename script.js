//your JS code here. If required.

function mapLetters(str){
	let charCount = {};

	for(let i=0;i<str.length;i++) {
		if(!charCount[str[i]]) {
			charCount[str[i]] = [i];
		}
		else {
			charCount[str[i]].push(i);
		}
	}
	return charCount;
}

