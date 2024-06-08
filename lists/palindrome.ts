class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const d = new ListNode(1, null);
const c = new ListNode(2, d);
const b = new ListNode(2, c);
const a = new ListNode(1, b);


function isPalindrome(head: ListNode | null): boolean {
    const all = []
    let current = head
    do {
        all.push(current);
        current = current.next
        if (!current) {
            break;
        }
    } while (true)

    for (let k = 0; k < all.length; k++) {
        if (all[k].val !== all[all.length - k - 1].val) {
            return false
        }
    }

    return true;
};

console.log(isPalindrome(a));