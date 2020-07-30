var findMedianSortedArrays = function(nums1, nums2) {
  let m1 = nums1.length
  let m2 = nums2.length
  let arrLength = 0
  let leftArr = []
  
  while(leftArr.length < ((m1 + m2)/2) + 1) {
    n1 = parseInt(nums1.length/2)
    n2 = parseInt(nums2.length/2)

    if(nums1[n1] < nums2[n2]) {
      arrLength += n1
      leftArr = leftArr.concat(nums1.slice(0, n1 + 1))
      nums1 = nums1.slice(n1 + 1, nums1.length)
    }
    else {
      arrLength += n2
      leftArr = leftArr.concat(nums2.slice(0, n2 + 1))
      nums2 = nums2.slice(n2 + 1, nums2.length)
    }
    if(arrLength > )

    console.log(leftArr)
  }
  
  let mid = parseInt((m1 + m2)/2)

  if((m1 + m2) % 2 === 0) {
    return (leftArr[mid] + leftArr[mid - 1])/2
  }
  else {
    return leftArr[mid]
  }
}

console.log(findMedianSortedArrays([], [2, 6, 7]))