/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sort1 = s.split("").sort();
 let sort2 = t.split("").sort();
 let count = 0;
 
 if(!(s.length == t.length)){
      return false;
 }
 for(let i = 0 ; i < s.length ; i++){
     if(!(sort1[i] == sort2[i])){
        count++;
        
     }
 }
 if(count > 0){
     return false;
 }
 else{
     return true;
 }
 
 };