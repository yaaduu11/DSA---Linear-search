
////////////!   LINEAR SEARCH
function linearSearch(array, target) {
    for(let i=0 ;i<array.length; i++){
        if(array[i]==target){
            return i
        }
    }
    return -1
}

let array = [45, 5, 7, 2, 0, 63, 21, 7, 9, 71, 42, 32, 99, 41]
let target = 71

let index = linearSearch(array,target)

if(index!=-1){
    console.log(`element is found at the index of ${index}`)
}else{
    console.log('element is not found in that array')
}
