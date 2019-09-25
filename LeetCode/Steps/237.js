/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

 /* 用友校招题 */
var deleteNode = function(node) {
    /* ES6 方案 */
    // Object.assign(node, node.next)

    node.val = node.next.val;
    node.next = node.next.next;
};