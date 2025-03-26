def isValid(s: str) -> bool:
        paranthesis = {"(": ")", "[": "]", "{": "}"}
        stack = []

        for paren in s:
            if paren in paranthesis[paren]:
                stack.append(paranthesis[paren])
                print(stack)
            elif stack:
                stack.pop()
            else:
                return False
        if stack.len > 0:
            return True
        else:
            return False
                

result = isValid("[()]")
print(result)