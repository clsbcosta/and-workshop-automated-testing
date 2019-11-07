
module.exports = function greeting(i = 'my friend') {
  if (typeof i == 'string') {
    i = [i];
  }

out = 'Hello, ';

  nStr = '';
  for (let j in i ) { let nStr = nStr + i[j] + ((parseInt(j)+2==i.length)?', and ': ((parseInt(j)+1==i.length)?'':', ')); }

    if (let nStr.toUpperCase() === nStr) return "HELLO " + nStr +  '!'

  return "Hello, " + nStr +  '.'}
