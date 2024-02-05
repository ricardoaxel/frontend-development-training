var search = function(nums, target) {
    return recursiveSearch(nums,target,0,nums.length-1)
};
//Making the recursive function
var recursiveSearch = function(nums, target, startIndex, endIndex){
    //When the startIndex for some condition it's a a greater index of the endIndex that means that all the options where tried without success 
    if(startIndex > endIndex){
        return -1
    }

    // Getting the middle index for the actual indexes
    let middle = Math.floor((startIndex+endIndex)/2)

    // Getting the number for that index and seeing if its the target
    if(target === nums[middle]){
        return middle
    }

    if(target < nums[middle]){
        return recursiveSearch(nums, target, startIndex, middle-1)
    }else{
        return recursiveSearch(nums, target, middle+1, endIndex)
    }
}



console.log(search([-1,0,3,5,9,12],9))