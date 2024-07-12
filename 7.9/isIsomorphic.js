/**
 * @description 给定两个字符串 s 和 t ，判断它们是否是同构的。如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * @example s = "egg", t = "add", 输出：true, s = "bada", t = "baba", 输出：false
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // 哈希表
  if(s.length !== t.length) return false;
  const map = new Map();
  const map2 = new Map();
  // s里面的字母作为key,t里面的字母作为value
  for(let i = 0; i< s.length;i++) {
    const tempValue = map.get(s[i]);
    const temp2Value = map2.get(t[i]);
    if(tempValue || temp2Value) {
      if(tempValue !== t[i] || temp2Value !== s[i]) return false;
    }
    else {
      map.set(s[i],t[i])
      map2.set(t[i],s[i])
    }
  }
  return true;
};
console.log(isIsomorphic("bada", "baba"))