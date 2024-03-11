//  Leetcode -11 Container with most water

/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container. */

/* Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104 */

// Try 1 - Works But Time Limit Exceeded
function maxArea(height: number[]): number {
    var maxarea:number = 0
    const area = (h1: number, h2: number, b:number) => {return ((h1 < h2) ? (h1 * b): (h2 * b))}
    for (let i: number = 0; i < height.length; i++)
    {
        for (let j: number = i + 1; j < height.length; j++)
        {   var calcedarea = area(height[i], height[j], j-i)
            var maxarea = calcedarea>maxarea ? calcedarea : maxarea
        } 
    }
return maxarea
};

let height:number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height));


// Try 2 after looking a solution

function maxArea2(height: number[]): number {
    let nearestBar:number = 0
    let furthestBar:number = height.length - 1
    var maxarea:number = 0

    while (nearestBar<=furthestBar){
        const length:number = Math.min(height[nearestBar],height[furthestBar])
        const breadth:number = furthestBar - nearestBar
        const area:number = length*breadth
        maxarea= Math.max(maxarea, area)

        if (height[nearestBar]<height[furthestBar]) nearestBar++
        else furthestBar--
    }
    return maxarea
};

console.log(maxArea2(height));