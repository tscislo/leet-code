class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const d = new ListNode(9, null);
const c = new ListNode(1, d); // this
const b = new ListNode(5, c);
const a = new ListNode(4, null);


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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let currentNode = head;
    const nodesPositions = new Map();
    let count = 0;

    // in the first pass we count how many items there are in the list and what are their positions
    while (true) {
        nodesPositions.set(currentNode, count);
        currentNode = currentNode.next;
        count++;
        if (!currentNode) {
            break;
        }
    }

    currentNode = head;
    while (true) {
        // this covers standard removal of element with position from the end given
        if (nodesPositions.get(currentNode) === count - n && currentNode.next) {
            currentNode.val = currentNode.next.val;
            currentNode.next = currentNode.next.next;
            // this covers when the element passed position is the last element on the list
            // we need to select element before it so count - n -1 and check if next.next is null
            // so we can set its next to null
        } else if (nodesPositions.get(currentNode) === count - n - 1 && !currentNode.next?.next) {
            currentNode.next = null
        }
        currentNode = currentNode.next;
        if (!currentNode) {
            break;
        }
    }
    // in case list has only one element and we want to get rid of it we should return empty
    // list which is null head!
    return (count === 1 && n === 1) ? null : head
};


console.log(removeNthFromEnd(a, 1))
// printList(a);