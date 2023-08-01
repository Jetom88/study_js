//filter 함수는 true를 반환하면 요소를 유지하고, false를 반환하면 버림
//arr.filter(callback(element[, index[, array]])[, thisArg])

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// function callback(el) {
//   return el.length > 6;
// }

// const newWords = words.filter(callback);

//익명 함수
// const newWords = words.filter(function (el) {
//   return el.length > 6;
// });

// console.log(newWords);

//화살표 함수
// const newWords = words.filter((el) => el.length > 6);
// console.log(newWords);

function myfilter(origin, callback) {
  const result = [];
  for (let i = 0; i < origin.length; i++) {
    let current = origin[i];
    if (callback(current)) {
      result.push(current);
    }
  }

  return result;
}

const newWords = myfilter(words, (el) => el.length > 6);
console.log(newWords);
