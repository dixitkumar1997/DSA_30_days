// Ques:-Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

//  Soln:-


let words1 = ["leetcode","is","amazing","as","is"];
let words2 = ["amazing","leetcode","is"];

function countWords(words1, words2) {
   let obj1={};
   let obj2={};
let count=0;
   for(let i=0;i<words1.length;i++){
       if(!obj1[words1[i]]){
           obj1[words1[i]]=1;
       }
       else{
           obj1[words1[i]]+=1;
       }
   } 
    for(let j=0;j<words2.length;j++){
       if(!obj2[words2[j]]){
           obj2[words2[j]]=1;
       }
       else{
           obj2[words2[j]]+=1;
       }
   }

for(let key1 in obj1){
    for(let key2 in obj2){
        if(key1===key2 && obj1[key1]===1 && obj2[key2]===1){
            count+=1;
        }
    }
}
return count;
};


console.log(countWords(words1, words2))