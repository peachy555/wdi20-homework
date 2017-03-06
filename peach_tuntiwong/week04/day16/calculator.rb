def mainMenu
  puts "Choose from following options:"
  puts "1. +"
  puts "2. -"
  puts "3. *"
  puts "4. /"
  puts "5. Exponential"
  puts "6. Square Root"
  puts "7. Mortgage"
  puts "8. BMI"
  puts "9. Trip Calculator"
  mode = gets.chomp

  case mode
  when "1"
    puts "Enter first number"
    first = gets.chomp.to_i

    puts "Enter second number"
    second = gets.chomp.to_i

    puts "The answer is #{first+second}"
    mainMenu
  when "2"
    puts "Enter first number"
    first = gets.chomp.to_i

    puts "Enter second number"
    second = gets.chomp.to_i

    puts "The answer is #{first-second}"
    mainMenu
  when "3"
    puts "Enter first number"
    first = gets.chomp.to_i

    puts "Enter second number"
    second = gets.chomp.to_i

    puts "The answer is #{first*second}"
    mainMenu
  when "4"
    puts "Enter first number"
    first = gets.chomp.to_i

    puts "Enter second number"
    second = gets.chomp.to_i

    puts "The answer is #{first/second}"
    mainMenu
  when "5"
    puts "Enter first number"
    first = gets.chomp.to_i

    puts "Enter second number"
    second = gets.chomp.to_i

    puts "The answer is #{first**second}"
    mainMenu
  when "6"
    puts "Enter the number"
    first = gets.chomp.to_i

    puts "The answer is #{Math.sqrt(first)}"
    mainMenu
  when "7"
    mortgage
    mainMenu
  when "8"
    calculateBMI
    mainMenu
  when "9"
    tripCost
    mainMenu
  when "quit"
  else
    puts "Invalid input!"
    mainMenu
  end
end

def mortgage
  puts "Enter principle"
  principle = gets.chomp.to_f
  puts "Enter monthly interest rate"
  interest = gets.chomp.to_f/100
  puts "Enter number of payments"
  numberOfPayments = gets.chomp.to_f

  monthly = principle*interest*((1+interest)**numberOfPayments)/(((1+interest)**numberOfPayments)-1)
  puts "Monthly payment is #{monthly}"
end

def calculateBMI
  puts "Enter your weight (kg)"
  weight = gets.chomp.to_f
  puts "Enter your height (m)"
  height = gets.chomp.to_f

  puts "Your BMI is #{(weight/height/height)}"
end

def tripCost
  puts "Enter distance (km)"
  distance = gets.chomp.to_f
  puts "Enter consumption rate (km per gallon)"
  consumption = gets.chomp.to_f
  puts "Enter gas price ($ per gallon)"
  price = gets.chomp.to_f

  puts "The cost of this trip is #{(price*distance/consumption)}"
end

mainMenu
