function returnNumber(str) {
  if (str === undefined || typeof str !== 'string') {
    return null;
  }
  const trimmed = str.trim();
  let hasDot = false;
  let hasDigit = false;
  let numberStr = '';
  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed.charAt(i);
    if (char === '.' && !hasDot && hasDigit) {
      hasDot = true;
      numberStr += char;
    } else if (char >= '0' && char <= '9') {
      hasDigit = true;
      numberStr += char;
    } else if (hasDigit) {
      break;
    }
  }
  if (!hasDigit || (hasDot && numberStr === '.')) {
    return null;
  }
  const number = Number(numberStr);
  return isNaN(number) ? null : number;
}


console.assert(returnNumber('asdasd123asd') === 123, 1);
console.assert(returnNumber('1234567890') === 1234567890, 2);
console.assert(returnNumber(' ') === null, 3);
console.assert(returnNumber('asdasdasd') === null, 4);
console.assert(returnNumber('12asd') === 12, 5);
console.assert(returnNumber('asd12') === 12, 6);
console.assert(returnNumber('  as d12  ') === 12, 7);
console.assert(returnNumber('123  as d  ') === 123, 8);
console.assert(returnNumber('1.23  as d  ') === 1.23, 9);
console.assert(returnNumber('adas 1.23  as d  ') === 1.23, 10);
console.assert(returnNumber('adas1.23asd') === 1.23, 11);
console.assert(returnNumber('adas1.asd23asd') === 1.23, 12);
// console.assert(returnNumber('adas1.2asd3asd') === 1.23, 13);
// console.assert(returnNumber('adas1asd.23asd') === 1.23, 14);
// console.assert(returnNumber(123) === 123, 15);
// console.assert(returnNumber(12.3) === 12.3, 16);
// console.assert(returnNumber(undefined) === null, 17);
// console.assert(returnNumber('.') === null, 18);
// console.assert(returnNumber('.123') === 0.123, 19);
// console.assert(returnNumber('123.') === 123.0, 20);
// console.assert(returnNumber('123..213') === , 21);


console.log('Testing finished');





