var floodFill = function(image, sr, sc, newColor) {
  if(image[sr][sc] === newColor || image.length === 0 || image[0].length === 0) return image
  
  let pixelStack = [[sr, sc]]
  let originalColor = image[sr][sc]
  
  let pixelCheck = function(nsr, nsc) {
    return nsr >= 0 && nsr < image.length && nsc >= 0 && nsc < image[0].length && image[nsr][nsc] === originalColor
  }

  while(pixelStack.length > 0) {
    let pixel = pixelStack.pop()
    let nsr = pixel[0]
    let nsc = pixel[1]
    if(pixelCheck(nsr - 1, nsc)) pixelStack.push([nsr - 1, nsc])
    if(pixelCheck(nsr + 1, nsc)) pixelStack.push([nsr + 1, nsc])
    if(pixelCheck(nsr, nsc - 1)) pixelStack.push([nsr, nsc - 1])
    if(pixelCheck(nsr, nsc + 1)) pixelStack.push([nsr, nsc + 1])
    image[pixel[0]][pixel[1]] = newColor
  }
  return image
};



console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))

