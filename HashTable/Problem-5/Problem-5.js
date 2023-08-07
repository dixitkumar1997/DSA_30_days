// Ques:-Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Soln:-

 let nums1 = [1,2,2,1];
 let nums2 = [2,2];

 function intersection(nums1, nums2) {
    let obj1={};
    let obj2={};
let arr=[];
    for(let i=0;i<nums1.length;i++){
        if(!obj1[nums1[i]]){
            obj1[nums1[i]]=1;
        }
        else{
            obj1[nums1[i]]+=1
        }
    }
    for(let j=0;j<nums2.length;j++){
        if(!obj2[nums2[j]]){
            obj2[nums2[j]]=1;
        }
        else{
            obj2[nums2[j]]+=1
        }
    }
for(let key1 in obj1){
    for(let key2 in obj2){
        if(key1===key2){
            arr.push(key1)
            break;
        }
    }
}
return arr

};

console.log(intersection(nums1, nums2))