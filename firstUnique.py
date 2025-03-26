class Solution:
    def firstUniqChar(self, s: str) -> int:
        dict = {}
        for ele in s:
            if ele in dict:
                dict[ele] += 1
            else:
                dict[ele] = 1

        for index, ele in enumerate(s):
            if dict[ele] == 1:
                return index
        return -1
        

    
uniqChar = Solution()

result = uniqChar.firstUniqChar("leetcode")
print(result)
result = uniqChar.firstUniqChar("loveleetcode")
print(result)
result = uniqChar.firstUniqChar("aabb")
print(result)