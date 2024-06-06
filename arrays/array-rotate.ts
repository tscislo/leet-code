/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */

const arr = [1, 2, 3, 4, 5, 6, 7]; // [6,7,1,2,3,4,5]
const step = 2;

function rotate(nums: number[], k: number): void {
    const orgLen = nums.length;
    const unshift = [];
    nums.forEach((curr, idx) => {
        const itr = nums.length - idx - 1;
        if(itr >= nums.length - (k%orgLen)) {
            unshift.push(nums[itr]);
        }
    });
    unshift.reverse();
    nums.unshift(...unshift)
    nums.length = orgLen
}

rotate(arr, step);

