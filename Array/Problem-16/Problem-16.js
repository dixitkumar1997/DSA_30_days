// Given an array nums of integers, return how many of them contain an even number of digits.

//  Soln:-


let nums = [12,345,2,6,7896];

function findNumbers(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        let str=nums[i]+"";
        if(str.length%2===0){
            count+=1
        }
    }
    return count;
};

console.log(findNumbers(nums))