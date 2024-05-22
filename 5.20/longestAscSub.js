/**
 * 寻找最长递增子序列
 */
function longestAscSub (nums) {
  // 动态规划
  const len = nums.length
  if (len <= 1) return len
  // 创建一个dp数组
  const dp = new Array(len).fill(1)
  // 遍历循环
  for(let i =1; i< len; i++) {
    for (let j= 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

console.log(longestAscSub([1,26,1,4,7]))