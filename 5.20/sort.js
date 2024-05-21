// 简单实现
function  sortArray(nums) {
  // 如果数组大小小于1，直接返回该数组
  if(nums.length <= 1) return nums
  // 寻找基数，一般来讲可以首尾中选中间值，这里直接用数组最中间的值
  let pivotIndex = Math.floor(nums.length / 2)

  let pivot = nums.splice(pivotIndex, 1)[0]
  // 定义左右数组，这样会占用空间
  let left = []
  let right = []
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] < pivot) left.push(nums[i])
      else right.push(nums[i])
  }
  // 递归重新组合
  return sortArray(left).concat([pivot], sortArray(right))
}

// 添加到原型方法上
function ArrayList(arr) {
  this.items = arr
  // 快速排序
  ArrayList.prototype.quickSort = function () {
    this.quick(0, this.items.length -1)
    return this.items
  }
  // 将交换两个位置的方法抽取
  ArrayList.prototype.swap = function (m, n) {
    // 交换两个位置数据代码
    let temp = this.items[m]
    this.items[m] = this.items[n]
    this.items[n] = temp
  }
  ArrayList.prototype.quick = function (left, right) {
    if (left >= right) return
    let i = left
    let j = right
    while (i < j) {
      // 基数选择数组第一个
      while (i < j && this.items[left] <= this.items[j]) {
        --j
      }
      while (i < j && this.items[left] >= this.items[i]) {
        ++i
      }
      this.swap(i,j)
    }
    this.swap(left, i)
    this.quick(left, i-1)
    this.quick(i+1, right)
  }
  return this.items
}

const arr = new ArrayList([3, 44, 38, 5, 47, 15, 36, 26, 27])
console.log(arr)
console.log(sortArray([3, 44, 38, 5, 47, 15, 36, 26, 27]))
