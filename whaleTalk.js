let input = 'turpentine and turtles';

const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let i = 0; i<input.length; i++){
  let inputLetter = input[i].toLowerCase();
  //console.log(i);
  for (let j = 0; j<vowels.length; j++){
    //console.log(j)

    if(inputLetter === vowels[j]){
      if(inputLetter === 'e'){
          resultArray.push('e', 'e')
        }
      else if(inputLetter === 'u'){
        resultArray.push('u', 'u')          
        }
      else resultArray.push(inputLetter)
    }
  }
}

let whaleLowerCase = resultArray.join("")

whaleLowerCase = whaleLowerCase.toUpperCase();
console.log(whaleLowerCase)
