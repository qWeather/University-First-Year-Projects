alphabet = 'abcdefghijklmnopqrstuvwxyz'
encoded_message = ''
decoded_message = ''
encoding_key = 0
decoding_key = 0
def encode():
    global encoded_message
    global encoding_key
    message = input('What message would you like to encode?\n')
    encoding_key = int(input('Enter a key:'))
    if encoding_key > 0 and encoding_key < 26:
        for char in message:
            if char in alphabet:
                alphabet_key = alphabet.index(char) #Searches for the position of the letter in the alphabet 
                shift = alphabet_key + encoding_key #Calculates the shift of the found position and the inputed key
                shifted_alphabet_key = shift % 26 #Stores the letter of the new position
                encoded_message += alphabet[shifted_alphabet_key] #Adds the new letter to the variable
            else:
                encoded_message += char # If the character is not in the lower case alphabet it will print it as it is
    print ('Your encoded message is:', encoded_message)
def decode():
    global decoded_message
    global decoding_key
    message = input('What message would you like to decode?\n')
    decoding_key = int(input('Enter a key:'))
    if decoding_key > 0 and decoding_key < 26:
        for char in message:
            if char in alphabet:
                alphabet_key = alphabet.index(char) #Searches for the position of the letter in the alphabet
                shift = alphabet_key - decoding_key #Calculates the shift of the found position and the inputed key
                shifted_alphabet_key = shift % 26 #Stores the letter of the new position
                decoded_message += alphabet[shifted_alphabet_key] #Adds the new letter to the variable
            else:
                decoded_message += char # If the character is not in the lower case alphabet it will print it as it is
    print ('Your decoded message is:', decoded_message)
user = input('''Would you like to encode or decode your message?
Press:
'e' for encoding
'd' for decoding
'q' if you want to exit the program\n''')
if user == 'e':
    encode()
elif user == 'd':
    decode()
else:
    print('Closing...')
    pass

