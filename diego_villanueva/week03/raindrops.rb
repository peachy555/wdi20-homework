puts "Give a number"
num = gets.chomp.to_i
str = ""

str += "Pling" if (num%3) == 0
str += "Plang" if (num%5) == 0
str += "Plong" if (num%7) == 0
# str = num unless ((num%3) ==0) || ((num%5) == 0) || ((num%7) == 0)   or:
# str = num if str.empty?   or:

puts str unless str.empty?     #if it is not empty then return the 
