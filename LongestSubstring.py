def lengthOfLongestSubstring(s: str) -> int:
    charIndexMap = {}
    startWindow = 0
    maxLen = 0

    for i in range(len(s)):
        endChar = s[i]

        # If the character has been seen and is in the current window
        if endChar in charIndexMap and charIndexMap[endChar] >= startWindow:
            # Move the startWindow right after the last occurrence of endChar
            print("endChar", endChar)
            print("charIndexMap[endChar] ",
                  charIndexMap[endChar], "startWindow ", startWindow)
            startWindow = charIndexMap[endChar] + 1
            print("startWindow ", startWindow)
        # Update the last seen index of endChar
        charIndexMap[endChar] = i
        print("charIndexMap ", charIndexMap)
        # Calculate the length of the current window and update maxLen
        maxLen = max(maxLen, i - startWindow + 1)
        print("startWindow ", startWindow)
    return maxLen


print(lengthOfLongestSubstring("abcabcbb"))
