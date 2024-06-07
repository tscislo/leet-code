const nums = [2, 3, 1, 1];

// // Set solution, the easiest one!
// function containsDuplicate(nums: number[]): boolean {
//     return nums.length !== new Set(nums).size;
// };

// Sorted solution
function containsDuplicate(nums: number[]): boolean {
    let hasDuplicates = false;
    nums.sort();

    for (let k = 0; k < nums.length; k++) {
        if (nums[k + 1] === nums[k]) {
            hasDuplicates = true
            break;
        }
    }
    return hasDuplicates;
};


console.log(containsDuplicate(nums))
