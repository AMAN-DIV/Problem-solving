/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

   
    let reversed = clean.split('').reverse().join('');
    return clean === reversed;
};
