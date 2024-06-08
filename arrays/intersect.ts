const nums1 = [3, 3, 1, 2, 1, 8]
const nums2 = [3, 3, 1, 1, 1, 1, 2, 8]

function intersect(nums1: number[], nums2: number[]): number[] {
    const counts1 = {};
    const counts2 = {};
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        if (counts1[nums1[i]]) {
            counts1[nums1[i]]++;
        } else {
            counts1[nums1[i]] = 1;
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (counts2[nums2[i]]) {
            counts2[nums2[i]]++;
        } else {
            counts2[nums2[i]] = 1;
        }
    }


    Object.keys(counts1).forEach((key) => {
        if (counts1[key] && counts2[key]) {
            if (counts1[key] === counts2[key]) {
                result = [
                    ...result,
                    ...(new Array(counts1[key])).fill(key)
                ]
            } else if (counts1[key] > counts2[key]) {
                const count = counts1[key] - counts2[key]; //1
                result = [
                    ...result,
                    ...(Array(counts1[key] - count).fill(key))
                ]
            } else if (counts1[key] < counts2[key]) {
                const count = counts2[key] - counts1[key];
                result = [
                    ...result,
                    ...(Array(counts2[key] - count).fill(key))
                ]
            }

        }
    })


    return result;
};

console.log(intersect(nums1, nums2));