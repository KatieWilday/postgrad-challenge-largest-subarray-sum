let array = [1, -2, 5, -3, 7, 4, 5, 6, -199, 4]

function largestSubarraySum(array){
    let currentSum = 0
    let largestSum = 0

    for(let number of array){
        currentSum = Math.max(0, (currentSum + number))
        largestSum = Math.max(largestSum, currentSum)
    }
    
    return largestSum
  
}