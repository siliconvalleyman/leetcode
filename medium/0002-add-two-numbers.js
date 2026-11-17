/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        // Treat a missing digit as zero when one list runs out.
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

        // Append the ones digit and carry the tens digit forward.
        tail.next = new ListNode(sum % 10);
        tail = tail.next;
        carry = Math.floor(sum / 10);

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    return dummy.next;
};