/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (71.15%)
 * Likes:    282
 * Dislikes: 0
 * Total Accepted:    70.6K
 * Total Submissions: 99.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [3,2,1]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  // 递归
  // return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : [];
  // 迭代 核心思路:
  // 使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。
  // 如果遇到的节点为白色，则将其标记为灰色，然后将其左子节点、右子节点、自身依次入栈。
  // 如果遇到的节点为灰色，则将节点的值输出。
  // 为优化空间，节点数据类型为TreeNode即可代表白色，number即可代表灰色
  let res = [];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if(!node) continue;
    if (node instanceof TreeNode) {
      stack.push(node.val, node.right, node.left);
    } else {
      res.push(node);
    }
  }
  return res;
};
// @lc code=end

