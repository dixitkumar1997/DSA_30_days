// Ques:-You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Soln:-


let nums = [1,2,3,2];


function sumOfUnique(nums) {
    let obj={};
    let sum=0;
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1;
        }
        else{
            obj[nums[i]]+=1;
        }
    }
    for(let key in obj){
        if(obj[key]===1){
            sum+=+key
        }
    }
    return sum
};


console.log(sumOfUnique(nums))