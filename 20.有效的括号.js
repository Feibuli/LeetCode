/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.67%)
 * Likes:    2144
 * Dislikes: 0
 * Total Accepted:    523.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "([)]"
 * 输出：false
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：s = "{[]}"
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const len = s.length;
  if (len % 2 === 1) return false;
  let stack = [];
  let res = true;
  let hash = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);
  s.split('').forEach(ch => {
    if (hash.has(ch)) {
      stack.push(ch);
    } else {
      // 碰到右括号时 如果不能与栈顶的左括号匹配 即无效字符串
      if (hash.get(stack[stack.length - 1]) === ch) {
        stack.pop();
      } else {
        res = false;
      }
    }
  });
  return res && !stack.length;
};
// @lc code=end

