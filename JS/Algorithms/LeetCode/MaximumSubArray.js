var maxSubArray = function(nums) {
    
    let actualArray = [nums[0]]
    let maxNum = nums[0]

    for(let i=1; i < nums.length; i++){
        let actualArraySum = actualArray.reduce((a, b) => a + b, 0)
        if(actualArraySum < nums[i]){
            actualArray = [nums[i]]
            maxNum = nums[i]
        }else{
            //If the sum it's still being greater than the actual max number we add the number to the actualArray
            if(actualArraySum + nums[i] > maxNum){
                actualArray.push(nums[i])
                maxNum = actualArraySum + nums[i]
            }else{
                i++
                if(nums[i]){
                    actualArray = [nums[i]]
                }
            }
        }
    }

    return maxNum
};


console.log(maxSubArray([-2,1,-3,,4,-1,2,1,-5,4]))