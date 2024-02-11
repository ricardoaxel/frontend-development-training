var floodFill = function(image, sr, sc, color) {
    if( image === null || image.length < 1 || image[sr][sc] == color){
        return
    }

    let initialColor = image[sr][sc];

    const fill = (image, row, col)=>{
        console.info(image, row, col)

        // Base case (check if index is out of range or the color of the new index it's changed already)
        if(row<0 || row>=image.length || col<0 || col>=image[0].length || initialColor != image[row][col]){
            return 
        }

        // Change for the new color;
        image[row][col] = color


        //Recursive funcitons for each of the 4 directionally conected to the actual point
        fill(image, row-1, col)
        fill(image, row+1, col)
        fill(image, row, col+1)
        fill(image, row, col-1)

    }

    fill(image, sr, sc)
    return image
    
};

console.info(floodFill([[1,1,1],[1,1,0],[1,0,1]],1, 1, 2))