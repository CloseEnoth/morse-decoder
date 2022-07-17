const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const NUM_MORSE = {
  '00': '',
  '10': '.',
  '11': '-'
}

function decode(expr) {

  return expr
  .split('**********') // [ [firstWord], [secondWord]]
  .map(item => cut(item,10)) //first word -> [ [10Symbols], [same], [same]... ]
  .map(item => item
    .map(el => cut(el, 2) //10 symbols -> [ [2symbols], [2symbols], [2symbols], [2symbols]]
      .map(el => NUM_MORSE[el]) // 2symbols -> '' or '.' or '-'
      .filter(el => el !== '') // 2symbols clear '' -> '.' or '-'
      .join(''))// return to 10 symbols
    .map(item => MORSE_TABLE[item])// 
    )
  .map(item => item.join(''))
  .join(' ')
}

function cut(arr, num) {
  let res = []

  for (let i = 0, j = num; i < arr.length; i += num, j += num) {
    res.push(arr.slice(i, j))
  }

  return res
}


module.exports = {
    decode
}
