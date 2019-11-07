
module.exports = function greeting(i = 'my friend') {
  if (typeof i == 'string') {
    i = [i];
  }

let out = 'Hello, ';

  let nStr = '';
  for (let j in i ) { let nStr = nStr + i[j] + ((parseInt(j)+2==i.length)?', and ': ((parseInt(j)+1==i.length)?'':', ')); }

    if (nStr.toUpperCase() === nStr) return "HELLO " + nStr +  '!'

  return "Hello, " + nStr +  '.'}
