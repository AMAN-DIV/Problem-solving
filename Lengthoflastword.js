/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let name = s.trim().split("");
    
    let name1 = name.reverse();
    
    
    let count = 0;
    for(let i = 0 ; i < name1.length ; i++){
        if(!(name1[i] == ' ')){
            count++;
        }else{
            break;
        }
       
    } 
    return count;
        
    };