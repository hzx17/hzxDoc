/**
 * @description 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const ranLen = ransomNote.length
  const magaLen = magazine.length
  if(ranLen > magaLen) return false
  const map = new Map()
  for(let i = 0; i< magaLen; i++) {
     const count =  map.get(magazine[i])
     if (count) map.set(magazine[i], count+1)
     else map.set(magazine[i], 1)
  }

  for(let j=0;j< ranLen; j++) {
     if(map.get(ransomNote[j])) {
      map.set(ransomNote[j],map.get(ransomNote[j])-1)
     }
     else {
      return false
     }
  }
  return true
};

console.log(canConstruct("aa", "aab"))