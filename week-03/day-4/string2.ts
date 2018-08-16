// Given a string, compute recursively a new string where all the 'x' chars have been removed.

let test: string = 'I haxd a drxeaxm abxouxt ax rexcuxrxsixve woxrxlxd'

function xToBlank (text: string) {
 if (text.indexOf('x') == -1) {
  return text;
 } else {
   return xToBlank(text.replace('x', ''));
}
}
console.log(xToBlank(test));