// Ques:-Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.

// x mod y denotes the remainder when x is divided by y.

// Soln:-

let nums = [0,1,2];

function smallestEqual(nums) {
    let arr=[];
    for(let i=0;i<nums.length;i++){
        if(i%10===nums[i]){
            arr.push(i)
        }
    }
    if(arr.length>0){
    let min=Infinity;
    for(let j=0;j<arr.length;j++){
        if(arr[j]<min){
            min=arr[j];
        }
    }
    return min;
    }
    else{
        return -1;
    }
};
console.log(smallestEqual(nums))