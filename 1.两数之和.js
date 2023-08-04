/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode.cn/problems/two-sum/description/
 *
 * algorithms
 * Easy (52.93%)
 * Likes:    17433
 * Dislikes: 0
 * Total Accepted:    4.7M
 * Total Submissions: 8.8M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 
 * 你可以按任意顺序返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 只会存在一个有效答案
 * 
 * 
 * 
 * 
 * 进阶：你可以想出一个时间复杂度小于 O(n^2) 的算法吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 暴力破解法 O(n^2)
  var res = []; 
  for(var i = 0; i < nums.length; i++) {
      var index = nums.findIndex((item, index) => index > i && item === target - nums[i]);
      if (index !== -1) res.push(i, index); 
  }
  return res;
};
var twoSum = function(nums, target) {
  // 查找表法 O(n)：以空间换时间，在遍历的同时，记录已经遍历过的数值和对应下标，以省去一层循环
  var hash = [];
  for(var i = 0; i < nums.length; i++) {
      var diff = target - nums[i];
      if(hash[diff] !== undefined) return [hash[diff], i];
      hash[nums[i]] = i;
  }
};
// @lc code=end

