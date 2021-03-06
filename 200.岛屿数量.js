/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (49.23%)
 * Likes:    539
 * Dislikes: 0
 * Total Accepted:    98K
 * Total Submissions: 199K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 示例 1:
 * 
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 * 输出: 3
 * 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  const deepSearch = (x, y) => {
    if (grid[x][y] === '1') {
      // 1翻转为0
      grid[x][y] = 0;
    } else {
      return;
    }
    // 向下移动
    if (x < grid.length - 1) {
      deepSearch(x + 1, y);
    }
    // 向右移动
    if (y < grid[x].length - 1) {
      deepSearch(x, y + 1);
    }
    // 向上移动
    if (x > 0 && x < grid.length) {
      deepSearch(x - 1, y);
    }
    // 向左移动
    if (y > 0 && y < grid[x].length) {
      deepSearch(x, y - 1);
    }
  }

  // 坐标遍历
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        deepSearch(i, j);
        count++;
      }
    }
  }
  return count;
};
// @lc code=end

