# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def helper_method(self,root :Optional[TreeNode] ,largest_vals: List[int],level: int):
        if (root==None):
            return
        if (level == len(largest_vals)):
            largest_vals.append(root.val)
        else:
            largest_vals[level] = max(largest_vals[level],root.val)
        print(largest_vals,level)
        self.helper_method(root.left,largest_vals,level+1)     
        self.helper_method(root.right,largest_vals,level+1)

    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        largest_val = []
        self.helper_method(root,largest_val,0);
        return largest_val
  
            