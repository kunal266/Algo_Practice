class Solution:
    def swapPairs(self, head):
        if head is None or head.next is None:
            return head
        head = ListNode(0,head) 
        k = head
        a = head.next
        b = head.next.next
        while b:
            k.next = b
            a.next,b.next = b.next,a
            a,b = b,a
            if b.next is None:
                break
            a = a.next.next
            b = b.next.next
            k = k.next.next
        return head.next