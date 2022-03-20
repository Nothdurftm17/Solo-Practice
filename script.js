// Algo #1 03/19/22

// nums is an array with numbers
// target is a number 
// we want a function that iterates through the array and selects the two numbers thats sum is equal to the target 

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++){
//             if (nums[i] + nums[j] == target) {
//                 return [i,j]
//             }
//         }
//     }
// };

// console.log(twoSum([7,2,0,4,3],5))

// ======================================================================================================

// algo #9

// var isPalindrome = function(x) {
//     if (x<0){
//         return false
//     }
//     const string = x.toString()
//     let left = 0
//     let right = string.length-1 

//     while(left < right) {
//         if (string[left] !== string[right]){
//             return false
//         }
//         left ++
//         right --
//     }
//     return true
// }
// var num = isPalindrome(3221)
// console.log(num);

// =============================================================================

// Algo #13 

// var romanToInt = function(s) {
//     const map = {I : 1, V : 5, X : 10, L: 50, C: 100, D : 500, M: 1000 }
//     let res = 0;
//     s.split('').forEach((num, i) => {
//         if (map[num] < map[s[i + 1]]) res -= map[num];
//         else res += map[num]
//     });
//     return res
// };

// console.log(romanToInt("IX"))

// ==============================================================================

// Algo #14

var longestCommonPrefix = function(strs) {
    var prefix = ""
    if(strs === null || strs.length === 0){
        return prefix
    }
    for (var i = 0; i < strs[0].length; i++){
        var char = strs[0][i]
        for ( var j = 1; j < strs.length; j++){
            if( strs[j][i] !== char)
                return prefix
            }
        prefix = prefix + char
    }
    return prefix
};
console.log(longestCommonPrefix(["flowers", "flow", "flight"]))