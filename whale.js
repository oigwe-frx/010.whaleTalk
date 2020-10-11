let input = 'turpentine and turtles';

const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let i = 0; i<input.length; i++){
  let result = input[i].toLowerCase();
  //console.log(i);
  for (let j = 0; j<vowels.length; j++){
    //console.log(j)

    if(result === vowels[j]){
      if(result === 'e'){
          resultArray.push(result, 'e')
        }
      else if(result === 'u'){
        resultArray.push(result, 'u')          
        }
      else resultArray.push(result)
    }
  }
}

let whaleLowerCase = resultArray.join("")

whaleLowerCase = whaleLowerCase.toUpperCase();
console.log(whaleLowerCase)