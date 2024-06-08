function isPalindrome(s: string): boolean {
    const str = s.toLowerCase().match(/[a-z|0-9]/gi)?.join('') ?? ''
    for (let k = 0; k < s.length; k++) {
        if (str.charAt(k) !== str.charAt(str.length - k - 1)) {
            return false
        }
    }
    return true;
};