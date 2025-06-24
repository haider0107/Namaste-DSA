/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    let endNode = head

    let length = 1

    while (endNode.next) {
        length += 1
        endNode = endNode.next
    }

    console.log(length)
    let lastRotation = k % length
    let middleNode = head
    if (lastRotation > 0) {
        for (let i = 1; i < length - lastRotation; i++) {
            middleNode = middleNode.next;
        }

        let temp = middleNode.next
        middleNode.next = null
        endNode.next = head
        head = temp

        return head

    } else {
        return head
    }
};