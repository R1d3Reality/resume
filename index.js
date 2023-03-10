const a = 'asdasd123asd';

function returnNumber(str) {
  const numbers = str.match(/\d+/g).join('');
  console.log(numbers);
}

returnNumber(a);
