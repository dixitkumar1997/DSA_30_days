// Ques:-You are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in order to maximize your score:

// Select an element m from nums.
// Remove the selected element m from the array.
// Add a new element with a value of m + 1 to the array.
// Increase your score by m.
// Return the maximum score you can achieve after performing the operation exactly k times.

//  Soln:-


let nums = [1,2,3,4,5];
let k = 3;


function maximizeSum(nums, k) {
    let sum=0;
     for(let i=1;i<=k;i++){
      let max=0;
      let index=0;
      for(let j=0;j<nums.length;j++){
          if(nums[j]>max){
              max=nums[j];
              index=j;
          }
       }
       nums[index]=max+1;
       sum+=max;
     }
    return sum;
 };

 console.log(maximizeSum(nums, k))