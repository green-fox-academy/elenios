// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

let test: string = 'whx is mx skx so xellow?'
/*
function xToY(text: string) {
  if (text.indexOf('x') == -1) {
    return text;
  } else {
    return xToY(text.replace('x', 'y'));
  }
}
console.log(xToY(test));
*/

function xToY(string: string): string {
  if (string.length == 0) {
    return string
  } else {
    let firstChar = string[0]
    if (firstChar === 'x') {
    firstChar = 'y';
    }    
    return firstChar + xToY(string.slice(1));
  }

}
console.log(xToY(test));

/*
let testArray = test.split('')
for (let i = 0; i < testArray.length; i++) {
  if (testArray[i] == 'x') {
    testArray[i] = 'y'
  }
}
test = testArray.join('');

console.log(test);
*/