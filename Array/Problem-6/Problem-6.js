// Ques:-You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

// You then do the following steps:

// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

// Soln:-


let nums = [4,19,8,2,15,3];
let original = 2;
  function findFinalValue(nums, original) {
    let num=original;
    let i=0;
    while(i<nums.length){
        if(nums[i]==num){
            num=num*2;
            i=0;
        }
      else{
        i++;
      }
    }
    return num;
};
console.log(findFinalValue(nums, original))