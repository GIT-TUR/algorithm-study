function solution(relation) {
  let result = 0;
  let unique = [];
  let notKey = []; 
  
  for (let column = 0; column < relation[0].length; column++) {
      let dict = {};
      for (let i = 0; i < relation.length; i++) {
          if (dict[relation[i][column]]) {
              notKey.push(column);
              dict = null;
              break;
          } else {
              dict[relation[i][column]] = 1;
          }
      }
      
      if (dict) unique.push([column]);
  } 
   
  let length = 2;
  while (length <= relation.length) {
      const combList = combination(notKey, length);  
       
      for (const comb of combList) {
          let dict = {}; 
          for (let i = 0; i < relation.length; i++) {
              let tuple = "";
              for (const col of comb) {
                  tuple += relation[i][col];
              }
              
              if (dict[tuple]) {
                  dict = null;
                  break;
              } else {
                  dict[tuple] = 1;
              }
          }
          
          if (dict) unique.push(comb); 
      }
      
      length++;
  }
   
  for (let i = unique.length-1; i > 0; i--) {  
      const longList = unique[i];
      for (let j = 0; j < i; j++) {
          const shortList = unique[j]; 
          if (shortList.length === longList.length) continue;
 
          let flag = true;
          for (const item of shortList) { 
             if (longList.indexOf(item) === -1) {  
                 flag = false;
             }
          } 
          
          if (flag) { 
              result++;
              break;
          }
      }
  }
  
  return unique.length-result;
}

function combination(list, number) {
  const result = [];
  
  function recur(newList, index) {
      if (newList.length === number) {
          result.push(newList);
          return;
      }
      
      for (let i = index; i < list.length; i++) {
          recur([...newList, list[i]], i+1);
      }
  }
  
  recur([], 0);
  return result;
}