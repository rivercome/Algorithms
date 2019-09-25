/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let nums = [];
    while (head){
      nums.push(head.val);
      head = head.next;
    }
    
    while(nums.length > 1){
      if(nums.pop() != nums.shift()) return false;
    }
    return true;
};