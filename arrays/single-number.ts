const nums = [4,1,2,1,2];

// with sort
// function singleNumber(nums: number[]): number {
//     nums.sort();
//     let singleNumber = null;
//     for (let i = 0; i < nums.length; i++) {
//         if (
//             (nums[i] !== nums[i - 1] && typeof nums[i - 1] !== undefined)
//             && (nums[i] !== nums[i + 1] && typeof nums[i + 1] !== undefined)
//         ) {
//             singleNumber = nums[i];
//         }
//     }
//
//     return singleNumber
// };

function singleNumber(nums: number[]): number {
    const occurances = {};
    for (let i = 0; i < nums.length; i++) {
        if (occurances[nums[i]]) {
            occurances[nums[i]]++;
        } else {
            occurances[nums[i]] = 1;
        }
    }

    for (let num of nums) {
        if (occurances[num] == 1) {
            return num;
        }
    }

    return 0;
};

console.log(singleNumber(nums));
