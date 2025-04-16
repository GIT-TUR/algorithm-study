/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* temp = new ListNode();
        ListNode* res = temp; 
        int carry = 0, total = 0; 
        while(l1 || l2 || carry){
            total = carry;

            if(l1){
                total += l1 -> val;
                l1 = l1->next;
            }
            if(l2){
                total += l2 -> val;
                l2 = l2->next;
            }

            int num = total % 10;
            carry = total / 10; 
            temp->next = new ListNode(num);
            temp = temp->next; 
        }

        ListNode* result = res -> next;
        delete res;
        return result; 
    }
};