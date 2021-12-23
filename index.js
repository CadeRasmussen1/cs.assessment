function hasUniqueChars(str) {
    let obj = {};
    for (let x = 0;x < str.length; x++){
      let  y = str[x];
      if (obj[y]) return false;
      obj[y] = true
    }
    return true
}
console.log(hasUniqueChars('wow'));
console.log(hasUniqueChars('cade'));
console.log(hasUniqueChars('soccorball'))
//time O(n)
//space O(n)

function addToZero(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr.length; k++){
            if (i !== k){
                if (arr[i] + arr[k] === 0){
                    return true
                }else return false
            }
        }
    }
}

console.log(addToZero([1,2]))
//time O(n^2)
//space O(n)

function findLongestWord(arr){
    let word = ""
    for (let i = 0; i < arr.length; i++){
        if (word.length < arr[i].length){
            word = arr[i]
        }
    }
    return word.length
}
console.log(findLongestWord(['boop', 'bloomburg', 'heljkhfjkflo']));

//time O(n)