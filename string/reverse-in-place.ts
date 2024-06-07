/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const copy = [...s]
    for(let i = 0; i<s.length; i++) {
        s[i] = copy[s.length-i-1];
    }
};
