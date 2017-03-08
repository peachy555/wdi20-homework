def mainMenu
  # Print out options to choose
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

  mode = gets.chomp # Didn't convert number here, becasue input may be request for quit

  case mode

  when "1"
    puts "The answer is #{getInputs[0]+getInputs[1]}"
    mainMenu

  when "2"
    puts "The answer is #{getInputs[0]-getInputs[1]}"
    mainMenu

  when "3"
    puts "The answer is #{getInputs[0]*getInputs[1]}"
    mainMenu

  when "4"
    puts "The answer is #{getInputs[0]/getInputs[1]}"
    mainMenu

  when "5"
    puts "The answer is #{getInputs[0]**getInputs[1]}"
    mainMenu

  when "6"
    puts "Enter the number"
    num = gets.chomp.to_i

    puts "The answer is #{Math.sqrt(num)}"
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

  when "quit", "q", "Quit"

  else
    puts "Invalid input!"
    mainMenu
  end
end

# Get two inputs from user for operation 1 to 5
def getInputs
  puts "Enter first number"
  first = gets.chomp.to_i

  puts "Enter second number"
  second = gets.chomp.to_i

  # return array of inputs
  return first, second
end

# morgage calculator
def mortgage
  # Get required inputs
  puts "Enter principle"
  principle = gets.chomp.to_f
  puts "Enter monthly interest rate"
  interest = gets.chomp.to_f/100
  puts "Enter number of payments"
  numberOfPayments = gets.chomp.to_f

  # Calculation and printout
  monthly = principle*interest*((1+interest)**numberOfPayments)/(((1+interest)**numberOfPayments)-1)
  puts "Monthly payment is #{monthly}"
end

def calculateBMI
  # Get required inputs
  puts "Enter your weight (kg)"
  weight = gets.chomp.to_f
  puts "Enter your height (m)"
  height = gets.chomp.to_f

  # Calculation and printout
  puts "Your BMI is #{(weight/height/height)}"
end

def tripCost
  # Get required inputs
  puts "Enter distance (km)"
  distance = gets.chomp.to_f
  puts "Enter consumption rate (km per gallon)"
  consumption = gets.chomp.to_f
  puts "Enter gas price ($ per gallon)"
  price = gets.chomp.to_f

  # Calculation and printout
  puts "The cost of this trip is #{(price*distance/consumption)}"
end

mainMenu
