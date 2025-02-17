/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let result = '';
  let operator = [];
  let string = [];
  let number = '';

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '[') { // 여는 괄호
          operator.push(Number(number));
          number = '';
          string.push('');
      } else if (s[i] === ']') { // 닫는 괄호
          const k = operator.pop();
          const newString = string.pop().repeat(k);
          if (string.length > 0) string[string.length-1] += newString;
          else string.push(newString);
      } else if (isNaN(s[i]) && operator.length > 0) { // 여는 괄호 안의 문자라면
          string[string.length-1] += s[i];
      } else if (isNaN(s[i])) { // 괄호 밖의 문자
          string.push(s[i]);
      } else if (!isNaN(s[i])) { // 숫자 
          number += s[i];
      }
  }

  return string.join('');
};