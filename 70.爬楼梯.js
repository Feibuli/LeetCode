/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (51.39%)
 * Likes:    1457
 * Dislikes: 0
 * Total Accepted:    362K
 * Total Submissions: 704.4K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  // f(x) = f(x−1) + f(x−2) 
  // 采用累和思想 爬到第x级台阶的方案数是爬到第x−1级台阶的方案数和爬到第x−2级台阶的方案数的和
  // 生成的数组实则为斐波那契数列 0,1,1,2,3,5,8,13,21
  // 原题转化为求第x个斐波那契数
  let prev = 0, cur = 1, temp = 0;
  for (let i = 0; i < n; i++) {
    temp = prev;
    prev = cur;
    cur += temp;
  }
  return cur;
};
// @lc code=end

