
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let stor = s.split(" ");
    console.log(stor)
    let rev = stor.reverse();
    
    
    result = rev.filter(Boolean).join(' ');
    
    return result;
    };