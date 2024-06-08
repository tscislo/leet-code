function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.length = m;
    const sorted = [...nums1, ...nums2].sort((a, b) => a-b);
    sorted.forEach((element, idx) => {
        nums1[idx] = element;
    })
};