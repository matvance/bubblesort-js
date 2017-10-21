function generateNumbersArray(amount){
	let resultArray = [];
	for(let i = 0; i < amount; i++){
		resultArray[i] = Math.floor(Math.random() * 100 + 1);
	}
	return resultArray;
}

function sortNumbersArray(numbersArray){
	for(let i = 0; i < numbersArray.length; i++){
		for(let i = 0; i < numbersArray.length; i++){
			if(numbersArray[i] > numbersArray[i + 1]){
				let cache = numbersArray[i];
				numbersArray[i] = numbersArray[i + 1];
				numbersArray[i + 1] = cache;
			}
		}
	}
	return numbersArray;
}

let newArray = generateNumbersArray(4);

console.log("Random array: " + newArray);
console.log("Sorted array: " + sortNumbersArray(newArray));