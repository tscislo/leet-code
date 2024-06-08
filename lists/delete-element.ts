class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const d = new ListNode(9, null);
const c = new ListNode(1, d);
const b = new ListNode(5, c);
const a = new ListNode(4, b);


function printList(firstNode: ListNode) {
    let current = firstNode;
    do {
        console.log(current.val)
        current = current.next;
        if (!current) {
            break;
        }
    } while (true)
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
    let current = node
    while (true) {
        if (current.next) {
            current.val = current.next.val; // put value from next one to me
        }
        if (!current.next.next) { // because we removed one element in the middle so if the next.next element is null we set current next to null
            current.next = null
        }
        current = current.next;
        if (!current) {
            break;
        }
    }
};

deleteNode(b);
printList(a);