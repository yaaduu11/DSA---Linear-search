
////////////!  BINARY SEARCH 
function binarySearch(arr, target) {
    let low = 0; 
    let high = arr.length - 1; 

    while (low <= high) {
        let middle = Math.floor((low + high) / 2); 

        if (arr[middle] === target) {
            return middle; 
        } else if (arr[middle] < target) {
            low = middle + 1; 
        } else {
            high = middle - 1; 
        }
    }

    return -1; 
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let target = 70;

let index = binarySearch(numbers, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found in the array');
}


//////////////!  RECURSIVE BINARY SEARCH
function recursiveBinarySearch(arr1,target1){
    return search(arr1,target1,0,arr1.length-1)
}

function search(arr1,target1,leftIndex, rightIndex) {
    if(leftIndex > rightIndex){
        return -1
    }

    const middleIndex = Math.floor((leftIndex + rightIndex) /2 )

    if(target1 == arr1[middleIndex]){
        return middleIndex
    }

    if(target1 < arr1[middleIndex]) {
        return search(arr1 , target1 , leftIndex , middleIndex - 1)
    }else{
        return search(arr1 , target1 , middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinarySearch([3, 4, 5, 6, 9, 12, 13, 52, 78, 89, 91], 13))


////////!  BINARY DESCENDING ORDER
function recursiveBinarySearch(arr1,target1){
    arr1.sort((a,b)=>b-a)
    return search(arr1,target1,0,arr1.length-1)
}

function search(arr1,target1,leftIndex, rightIndex) {
    if(leftIndex > rightIndex){
        return -1
    }

    const middleIndex = Math.floor((leftIndex + rightIndex) /2 )

    if(target1 == arr1[middleIndex]){
        return middleIndex
    }

    if(target1 > arr1[middleIndex]) {   //////// TODO : change ">"  this sign ////////
        return search(arr1 , target1 , leftIndex , middleIndex - 1)
    }else{
        return search(arr1 , target1 , middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinarySearch([3, 4, 5, 6, 9, 12, 13, 52, 78, 89, 91], 3))