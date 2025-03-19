const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
let stack = [], string;

readline.on('line', (line) => {
  string = line;
}).on('close', () => {
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let result = 0;
 
  for (const str of string) {
    if (str === '(') {
      stack.push(str);
    } else if (str === '[') {
      stack.push(str);
    } else if (str === ')') { 
      if (stack.length === 0) return 0;
      if (stack[stack.length-1] === '(') stack.pop();
    } else if (str === ']') { 
      if (stack.length === 0) return 0;
      if (stack[stack.length-1] === '[') stack.pop();
    }
  } 

  if (stack.length !== 0) return 0;
 
  for (const str of string) { 
    if (str === '(' || str === '[') { 
      stack.push(str);
    } else if (str === ')') { 
      const top = stack.pop();
      if (isNaN(top)) {  
        stack.push(2);
      } else {
        let items = [top];
        let newItem = stack.pop();
         
        while (newItem !== '(') {
          items.push(newItem);
          newItem = stack.pop();
        }

        let sum = 0;
        for (const item of items) {
          sum += item;
        }
        stack.push(sum*2);
      }
    } else if (str === ']') { 
      const top = stack.pop();
      if (isNaN(top)) {  
        stack.push(3);
      } else { 
        const item = top*3;
        if (isNaN(stack[stack.length-1])) {  
          stack.pop();
          stack.push(item);
        } else {
          let items = [top];
          let newItem = stack.pop();
          
          while (newItem !== '[') {
            items.push(newItem);
            newItem = stack.pop();
          }

          let sum = 0;
          for (const item of items) {
            sum += item;
          }
          stack.push(sum*3);
        }
      }
    }
  }

  for (const num of stack) result += num; 

  return result;
}