var insert = function(intervals, newInterval) {
    let finalIntervals = [];

    for(let i=0; i<intervals.length; i++){
        if(intervals[i][0] > newInterval[1]){
            finalIntervals.push(newInterval)
            return finalIntervals.concat(intervals.slice(i))
        }

        if(intervals[i][1] < newInterval[0]){
            finalIntervals.push(intervals[i])
        }else{
            newInterval =  [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]
        }
    }

    finalIntervals.push(newInterval)
    return newInterval

};