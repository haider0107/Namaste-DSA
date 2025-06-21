/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // let curr = new ListNode()

    // let sortedList = curr

    // while (list1 && list2) {
    //     let newNode = new ListNode()

    //     if (list1.val < list2.val) {
    //         newNode.val = list1.val
    //         list1 = list1.next
    //     } else {
    //         newNode.val = list2.val
    //         list2 = list2.next
    //     }

    //     curr.next = newNode
    //     curr = curr.next
    // }

    // while (list1) {
    //     let newNode = new ListNode()
    //     newNode.val = list1.val
    //     list1 = list1.next

    //     curr.next = newNode
    //     curr = curr.next
    // }

    // while (list2) {
    //     let newNode = new ListNode()
    //     newNode.val = list2.val
    //     list2 = list2.next

    //     curr.next = newNode
    //     curr = curr.next
    // }

    // return sortedList.next

    let start = new ListNode();
    let curr = start

    // if(!list1) return list2
    // if(!list2) return list1

    // if (list1.val < list2.val) {
    //     curr.next = list1
    //     list1 = list1.next
    //     curr = curr.next
    // } else {
    //     curr.next = list2
    //     list2 = list2.next
    //     curr = curr.next
    // }

    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
            curr = curr.next
        } else {
            curr.next = list2
            list2 = list2.next
            curr = curr.next
        }
    }

    curr.next = list1 || list2

    return start.next
};