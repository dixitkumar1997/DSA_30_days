// Ques:-You are given a 1-indexed integer array nums of length n.

// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

// Return the sum of the squares of all special elements of nums.

//  Soln:-

let  nums = [1,2,3,4];

function sumOfSquares(nums) {
     let n=nums.length;
    let sum=0;
    for(let i=0;i<n;i++){
        if(n%(i+1)==0){
sum+=(nums[i]*nums[i])
        }
    }
    return sum;
};


console.log(sumOfSquares(nums))