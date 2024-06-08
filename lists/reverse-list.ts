function reverseList(head: ListNode | null): ListNode | null {
    let current = head;
    let previous = null;
    while (current!==null) {
        const nextTmp = current.next;
        current.next = previous;
        previous = current;
        current = nextTmp;
    }
    return previous
};