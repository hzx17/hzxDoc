/***
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 示例 1：
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
*/
function longestSub (arr) {
  if(!nums.length) return 0
  // 首先创建一个集合，去除重复值
  const longest_Set = new Set(arr)
  // 定义一个变量，用于保存最大值
  let longestLength = 1
  // 遍历集合
  for (let num of longest_Set) {
    if(!longest_Set.has(num - 1)) {
      let currentTempLength = 1
      let currentNum = num
      while (longest_Set.has(currentNum + 1)) {
        currentTempLength++
        currentNum++
      }
      longestLength = Math.max(longestLength, currentTempLength)
    }
  }
  return longestLength
}

// 测试
const arr1 = [1,2,1,4,3,5,6,2,3,9]
console.log(longestSub(arr1))