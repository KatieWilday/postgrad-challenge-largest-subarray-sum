let array = [1, 3, -5, 15, -34, 90, -1, 10, 3]

function largestSubarraySum(array){
    let currentSum = 0
    let largestSum = 0

    for (let number of array){
        currentSum = Math.max(0, (currentSum + number))
        largestSum = Math.max(largestSum, currentSum)
    }
    return largestSum 
}