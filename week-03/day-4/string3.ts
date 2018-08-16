// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

let test: string = 'I had a dream about endless stars'

function starMaker (text: string) {

 if (text.length == 0) {
  return text;
 } else {
   return text[0] + '*' + starMaker(text.slice(1));
}
}
console.log(starMaker(test));