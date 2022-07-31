# def isVowel(x):
#     return (x == 'a' or x == 'e' or x == 'i' or x == 'o' or x == 'u')          
 
# def subVowel(s):
#     count, res = 0, 0
     
#     for i in range(len(s)):
 
#         # Increment current count
#         # if s[i] is vowel
#         if (isVowel(s[i])):
#             count += 1 
 
#         else:
        
#             # check previous value
#             # is greater then or not
#             res = max(res, count)
 
#             count = 0
#     return max(res, count)
 
# # Driver code
# if __name__ == "__main__":
#     s = input()
#     print (subVowel(s))



# Python3 program to find triplets
# in a given array whose sum is zero

# function to print triplets with 0 sum
# def triplets(arr, n):
# 	flag = False
# 	for i in range(n - 1):

# 		# Find all pairs with sum
# 		# equals to "-arr[i]"
# 		s = set()
# 		for j in range(i + 1, n):
# 			x = -(arr[i] + arr[j])
# 			if x in s:
# 				print(x, arr[i], arr[j])
# 				flag = True
# 			else:
# 				s.add(arr[j])
# 	if flag == False:
# 		print("No match Found")

# # Driver Code
# arr = [int(e) for e in input().split(' ')]
# n = len(arr)
# triplets(arr, n)

# This code is contributed by Shrikant13


# python program to find triplets in a given
# array whose sum is zero

# # function to print triplets with 0 sum
# def triplets(arr, n):
# 	flag = False
# 	arr.sort()

# 	for i in range(0, n-1):
# 		l = i + 1
# 		r = n - 1
# 		x = arr[i]
# 		while (l < r):
# 			if (x + arr[l] + arr[r] == 0):
# 				print(x, arr[l], arr[r])
# 				l+=1
# 				r-=1
# 				flag = True

# 			elif (x + arr[l] + arr[r] < 0):
# 				l+=1

# 			else:
# 				r-=1
		
# 	if (flag == False):
# 		print(" No Match Found")



# arr = [int(e) for e in input().split(' ')]
# n = len(arr)
# triplets(arr, n)

# # This code is contributed by Smitha Dinesh Semwal


# n1 = [int(e) for e in input().split(' ')]
# n2 = [int(e) for e in input().split(' ')]
# n1.sort(reverse=True)
# n2.sort(reverse=True)
# res=n2+n1
# res.sort(reverse=True)
# listToStr = ' '.join([str(elem) for elem in res])
# print(listToStr)



string = input()
def reverserWords(string):
  st = list()
  for i in range(len(string)):
    if string[i] != " ":
      st.append(string[i])
    else:
      while len(st) > 0:
        print(st[-1], end= "")
        st.pop()
      print(end = " ")
  while len(st) > 0:
    print(st[-1], end = "")
    st.pop()
reverserWords(string)