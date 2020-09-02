mark = 0
number_of_students = 0
category_1 = 0
category_2 = 0
category_3 = 0
category_4 = 0
total_marks = 0
count = 0 #counts the number of students that passed
highest = 0
lowest = 100
vertical_column = 0
vertical_counter = 0
while mark >= 0 and mark <= 100:
    try:
        mark = int(input('Please enter a mark or a negative mark to exit:'))
    except ValueError:
        print('This is a non-numeric number! Try again!')
        continue #the program will loop until a valid mark is entered
    while mark > 100:
        print('Mark is over 100! Try again!')
        try:
            mark = int(input('Please enter a mark or a negative mark to exit:'))
        except ValueError:
                print('This is a non-numeric number! Try again!')
        continue #the program will loop until a valid mark is entered
    number_of_students += 1
    total_marks += mark #sum of all valid entered the marks
    if mark >= 0 and mark <= 29:
        category_1 += 1
        if mark >= 0 and mark > highest:
            highest = mark
        elif mark < lowest:
            lowest = mark
        if number_of_students <= 1: #if there was entered just one mark or none, the highest mark and the lowest mark will be equal and will take the value of mark
            highest = mark
            lowest = mark
    elif mark >= 30 and mark <= 39:
        category_2 += 1
        if mark >= 0 and mark > highest:
            highest = mark
        elif mark < lowest:
            lowest = mark
        if number_of_students <= 1:
            highest = mark
            lowest = mark
    elif mark >= 40 and mark <= 69:
        category_3 += 1
        count += 1
        if mark >= 0 and mark > highest:
            highest = mark
        elif mark < lowest:
            lowest = mark
        if number_of_students <= 1:
            highest = mark
            lowest = mark
    elif mark >= 70 and mark <= 100:
        category_4 += 1
        count += 1
        if mark >= 0 and mark > highest:
            highest = mark
        elif mark < lowest:
            lowest = mark
        if number_of_students <= 1:
            highest = mark
            lowest = mark
    if category_1 > vertical_column and category_1 > category_2 and category_1 > category_3 and category_1 > category_4:
        vertical_column = category_1
    elif category_2 > vertical_column and category_2 > category_1 and category_2 > category_3 and category_2 > category_4:
        vertical_column = category_2
    elif category_3 > vertical_column and category_3 > category_1 and category_3 > category_2 and category_3 > category_4:
        vertical_column = category_3
    elif category_4 > vertical_column and category_4 > category_1 and category_4 > category_2 and category_4 > category_3:
        vertical_column = category_4
    if mark < 0:
        break #it exits if the user inputs a negative mark
total_marks -= mark #takes the last mark so the sum wouldn't add the negative mark
number_of_students -= 1 #takes one from the total number of students so it wouldn't count the negative mark as an entry
average = (total_marks / number_of_students)
output = str(input('What type of histogram do you want to see: horizontal/vertical?\n'))
if output == 'horizontal':
    print('Horizontal Histogram\n')
    for x in range(1):
        print('0-29\t', end="")
        for y in range(category_1):
            print('*', end="")
        print('\n30-39\t', end="")
        for y in range(category_2):
            print('*', end="")
        print('\n40-69\t', end="")
        for y in range(category_3):
            print('*', end="")
        print('\n70-100\t', end="")
        for y in range(category_4):
            print('*', end="")
        print('\n')
elif output == 'vertical':
    print('Vertical Histogram\n')
    print('0-29 ', end='')
    print('30-39 ', end='')
    print('40-69 ', end='')
    print('70-100 ')
    for z in range(vertical_column):
        vertical_counter += 1
        if category_1 >= vertical_counter:
            print(' * ', end="")
        else:
            print('    ', end="")
        if category_2 >= vertical_counter:
            print('    *  ', end="")
        else:
            print('       ', end="")
        if category_3 >= vertical_counter:
            print('   *  ', end="")
        else:
            print('      ', end="")
        if category_4 >= vertical_counter:
            print('   *  ', end="")
        else:
            print('      ', end="")
        print('\n')
print(number_of_students, 'students in total.')
print('The average is:', average)
print('This is the number of students that passed:', count)
print('The highest mark is:', highest)
print('The lowest mark is:', lowest)
