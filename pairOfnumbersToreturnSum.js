const array = [2,5,9,10,4,1,3,6]
const sum = 6
function pairOfNumers (array, sum){
    const pair =[]
    for(i=0; i<array.length;i++){
        for(j=i+1;j<array.length;j++){
if(array[i]+array[j]==sum){
    pair.push([array[i], array[j]])
}
        }
    }
    return pair
}

const pairs = pairOfNumers(array,sum)
console.log("pairs",pairs)