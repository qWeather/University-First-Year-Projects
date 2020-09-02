/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package airplane;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.*;
/**
 *
 * @author mbeea
 */
public class Airplane {

    static final int SEATING_CAPACITY = 12;
    static String[] airplane = new String[SEATING_CAPACITY];
    static Scanner input = new Scanner(System.in);
    static Scanner in = new Scanner(System.in);
    static String choice = "";
    
    public static void main(String[] args) throws FileNotFoundException {
        
       //Initialises the plane seats.
       initialiseSeats(airplane);
       menu();
       
       while (!"Q".equals(choice)) {
           
           choice = input.next();
            
           switch (choice) {

               case "V":
                   view_all_seats(airplane);
                   break;
               case "E":
                    view_all_empty_seats(airplane);
                    break;
                case "A":
                    add_passenger(airplane);
                    break;
                case "D":
                    delete_passenger(airplane);
                    break;
                case "F":
                    find_seat(airplane);
                    break;
                case "S":
                    store_data(airplane);
                    break;
                case "L":
                    load_data(airplane);
                    break;
                case "O":
                    String[] airplane_backup = Arrays.copyOf(airplane, SEATING_CAPACITY);
                    view_ordered_seats(airplane_backup);
                    break;
                case "Q":
                    System.exit(0);
                    break;
                default: 
                    System.err.println("That command doesn't exist!");
            }
            System.out.println("Insert 'M' to see the menu again or you can insert 'Q' and exit the program right now.");
            choice = input.next();
            switch(choice) {
                case "M":
                    menu();
                    break;
                case "Q":
                    System.exit(0);
                    break;
                default:
                    menu();
                    System.err.print("That command doesn't exist! Try choosing something from the above menu: "); 
            }
        }
    }

    //Initialise seats.
    private static void initialiseSeats(String[] airplane) {
        for (int i = 0; i < SEATING_CAPACITY; i++) {
            
            airplane[i] = "EMPTY";
            airplane[0] = "PILOT";
        }
        System.out.println("Plane is now prepared and ready for passengers to board." + "\n");
    }
    
    //Commands menu.
    private static void menu() {
        
        System.out.println("Commands Menu:");
        System.out.println("Insert V to view all the seats.");
        System.out.println("Insert E to view all empty seats.");
        System.out.println("Insert A to add a passenger to a seat.");
        System.out.println("Insert D to delete a passenger from a seat.");
        System.out.println("Insert F to find the seat for a given passenger's name.");
        System.out.println("Insert S to store program data into file.");
        System.out.println("Insert L to load program data from file.");
        System.out.println("Insert O to view seats ordered alphabetically.");
        System.out.println("Insert Q to quit the program." + "\n");
    }

    //View all seats: available, occupied, pilot.
    private static void view_all_seats(String[] airplane) {
        
        System.out.println("Seats list:");
        
        for(int i = 0; i < SEATING_CAPACITY; i++) {
            
            System.out.println("Seat " + i + ": " + airplane[i]);
        }
    }

    //View all empty seats.
    private static void view_all_empty_seats(String[] airplane) {
        
        System.out.println("Empty seats list:");
        
        for(int i = 0; i < SEATING_CAPACITY; i++) {
            
            if("EMPTY".equals(airplane[i])) {
                System.out.println("Seat " + i + ": " + airplane[i]);
          }
        }
    }

    //Add a passenger to a seat.
    private static void add_passenger(String[] airplane) throws FileNotFoundException {
        
        int seat_number;
        String passenger_name;
        
        System.out.println("Insert the passenger's name you want to add: ");
        passenger_name = in.nextLine();
        passenger_name = passenger_name.toUpperCase();
        
        //Validation for wrong passenger name input.
        while(!passenger_name.matches("[A-Za-z\\s]+$")) {
            
            System.err.println("Please enter a valid name: ");
            passenger_name = in.nextLine();
            passenger_name = passenger_name.toUpperCase();
        }
        
        System.out.println("Insert the number of the seat: ");
        
        //Validation for wrong seat number input.
        while(true) {
            
            try {
                seat_number = input.nextInt();
                break;
            }
            catch (InputMismatchException e) {
                System.err.println("Please insert a seat number: ");
                input.next();
            }
        }
        //Validation for empty seat and a seat that's not on the list.
        while((seat_number > SEATING_CAPACITY) || (seat_number < 0) || (!"EMPTY".equals(airplane[seat_number]))) {
            
            System.err.println("That seat number doesn't exist or it's been already taken. Try again.");
            seat_number = input.nextInt();
        }
        
        //Pilot seat validation.
        while(seat_number == 0) {
            
            System.err.println("You cannot choose this seat, it's reserved for the pilot." + "Choose another seat: ");
            seat_number = input.nextInt();
        }
                
        airplane[seat_number] = passenger_name;
        System.out.println(passenger_name + " was successfully added to Seat " + seat_number + "." + "\n");
        
        //Automatically stores the data into a file.
        store_data(airplane);
    }

    //Delete a passenger from a seat.
    private static void delete_passenger(String[] airplane) throws FileNotFoundException {
        
        int flag = 0;
        int seat_number;
        
        System.out.println("How would you like to remove the passenger from the seat?" + "\n" + "Insert 'seat' to remove by seat number or 'name' to remove by passenger's name.");
        String option = input.next();
        
        if("seat".equals(option)) {
            
            System.out.println("What's the seat number of the passenger you'd like to remove from the plane?");
            
            //Validation for wrong seat number input.
            while(true) {
                
                try {
                    seat_number = input.nextInt();
                    break;
                }
                catch (InputMismatchException e) {
                    System.err.println("Please insert a seat number: ");
                    input.next();
                }
            }
            
            //Validation for empty seat.
            while("EMPTY".equals(airplane[seat_number])) {
            
            System.err.println("The seat is already empty. Choose another one:");
            seat_number = input.nextInt();
            }
            //Validation for if the user chooses Pilot's seat.
            while(seat_number == 0) {
                
                System.err.println("You cannot remove the Pilot from the plane! Choose another seat:");
                seat_number = input.nextInt();
            }
        
            for(int i = 0; i < SEATING_CAPACITY; i++) {
            
                if(!"EMPTY".equals(airplane[seat_number]) ) {
                
                    System.out.println(airplane[seat_number] + " has been removed from Seat " + seat_number + ".");
                    airplane[seat_number] = "EMPTY";
                }
            }
        } else if("name".equals(option)) {
            
            System.out.println("What's the name of the passenger you'd like to remove from the plane?");
            String passenger_name = in.nextLine();
            passenger_name = passenger_name.toUpperCase();
            
            //Validation for wrong passenger name input.
            while(!passenger_name.matches("[A-Za-z\\s]+$")) {
                
                System.err.println("Please enter a valid name: ");
                passenger_name = in.nextLine();
                passenger_name = passenger_name.toUpperCase();
            }
            
            for(int i = 0; i < SEATING_CAPACITY; i++) {
                
                if(passenger_name.equals(airplane[i])) {
                    
                    System.out.println(passenger_name + " has been deleted from Seat " + i + ".");
                    airplane[i] = "EMPTY";
                } else {
                    flag++;
                }
            }
            
            if(flag == SEATING_CAPACITY) {
                
                System.err.println("Couldn't find anyone by that name on the plane." + "\n");
            }
        }
        //Automatically store the data into a file.
        store_data(airplane);
    }

    //Find a seat by inserting the passenger's name.
    private static void find_seat(String[] airplane) {

        System.out.println("Insert the passenger's name in order for the program to find the designated seat: ");
        String passenger_name = in.nextLine();
        
        //Validation for wrong passenger name input.
        while(!passenger_name.matches("[A-Za-z\\s]+$")) {
                
            System.err.println("Please enter a valid name: ");
            passenger_name = in.nextLine();
        }
        
        for(int i = 0; i < SEATING_CAPACITY; i++) {
            
            if(airplane[i].equals(passenger_name.toUpperCase())) {
                
                System.out.println("The seat you were trying to find is: Seat " + i + "\n");
                break;
       
            } else if((i == 11) && (!airplane[i].equals(passenger_name.toUpperCase())))  {
                
                System.err.println(passenger_name.toUpperCase() + " is not occupying any seat.");
            }
        }     
    }

    //Store data into a file.
    private static void store_data(String[] airplane) throws FileNotFoundException {
        //Creating a file to store data into.
        try (PrintWriter store_data = new PrintWriter("airplane.txt")) {
            
            for (int i = 0; i < SEATING_CAPACITY; i++) {
                
                store_data.printf("Seat " + i + ": " + airplane[i] + "\n");
            }
            //Closing the file.
            store_data.close();
        }
        
        System.out.println("Data has been succesfully stored into file." + "\n");
        
    }

    //Load data from a file.
    public static void load_data(String[] airplane) throws FileNotFoundException {
        //Loading the file.
        Scanner load_data = new Scanner(new File("airplane.txt"));
        System.out.println("Loading data...");
        while (load_data.hasNextLine()) {
            
            System.out.println(load_data.nextLine());
        }
    }

    //View the seats ordered alphabetically. (Bubble Sort)
    private static void view_ordered_seats(String[] airplane_backup) {
        
        System.out.println("Loading...");
        
        //The loop goes on until the seating capacity is reached.
        for (int i = 1; i < airplane_backup.length - 1; i--) {
            
            //Loop for the words to be sorted.
            for(int j = 1; j < airplane_backup.length - 1; j++) {
                
                //Comparing the two words.
                if(airplane_backup[j+1].compareTo(airplane_backup[j]) < 0) {
                    
                    //Bubble sort process.
                    String temp;
                    temp = airplane_backup[j];
                    airplane_backup[j] = airplane_backup[j + 1];
                    airplane_backup[j + 1] = temp;
                }
            }
        }
        //Printing the now ordered seats.
        print_list(airplane_backup);
        
    }
        private static void print_list(String[] airplane_backup) {
            
            System.out.println("Names in alphabetical order:");
            
            for (int t = 1; t < SEATING_CAPACITY; t++) {
                
               System.out.println(airplane_backup[t]);
            }
        }
}
