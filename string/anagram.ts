// sorted solution
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false;
    }

    const sSplitted = s.split('').sort();
    const tSplitted = t.split('').sort();

    return sSplitted.join() === tSplitted.join();

};



// // slow solution without sorting
// function isAnagram(s: string, t: string): boolean {
//     const sSplitted = s.split('');
//     const tSplitted = t.split('');
//
//     const sUsages = sSplitted.reduce((prev, curr) => {
//         return {
//             ...prev,
//             [curr]: sSplitted.filter((letter) => letter===curr).length
//         }
//     }, {});
//
//     const tUsages = tSplitted.reduce((prev, curr) => {
//         return {
//             ...prev,
//             [curr]: tSplitted.filter((letter) => letter===curr).length
//         }
//     }, {});
//
//
//     const longer = (Object.keys(sUsages).length > Object.keys(tUsages).length ) ? sUsages : tUsages;
//     const shorter = longer === sUsages ? tUsages : sUsages;
//
//     let flag = true;
//
//
//     Object.keys(longer).forEach((key, idx) => {
//         if(longer[key]!==shorter[key]) {
//             flag = false;
//         }
//     })
//
//     return flag;
// };
