/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package airport;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.*;
/**
 *
 * @author mbeea
 */
public class Airport {
    
    static String[] passengers;
    static Scanner input = new Scanner(System.in);
    static String choice = "";
    
    public static void main(String[] args) throws FileNotFoundException{
        
        PassengerQueue queue1 = new PassengerQueue();
        menu();
       
        while (!"Q".equals(choice)) {
           
           choice = input.next();
            
           switch (choice) {

                case "V":
                   PassengerQueue.display(queue1);
                   break;

                case "A":
                    if(PassengerQueue.isFull()) {
                        System.out.println("Queue is full!");
                    } else {
                        Passenger.setName();
                        PassengerQueue.add(queue1);
                    }
                    break;
                case "D":
                    PassengerQueue.remove(queue1);
                    break;
                case "S":
                    storeData(PassengerQueue.queueArray);
                    break;
                case "L":
                    loadData("passengers.dat");
                    break;
                case "R":
                    run(passengers, queue1);
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

    //Commands menu.
    private static void menu() {
        
        System.out.println("Commands Menu:");
        System.out.println("Insert V to view all the seats.");
        System.out.println("Insert A to add a passenger to a seat.");
        System.out.println("Insert D to delete a passenger from a seat.");
        System.out.println("Insert S to store program data into file.");
        System.out.println("Insert L to load program data from file.");
        System.out.println("Insert R to run the simulation and see the report.");
        System.out.println("Insert Q to quit the program." + "\n");
    }

    //Store passenger queue data into a file.
    public static void storeData(String[] queueTest) throws FileNotFoundException {
        //Creating a file to store data into.
        try (PrintWriter store_data = new PrintWriter("passengerQueue.txt")) {
            
            for (String queueTest1 : queueTest) {
                store_data.printf(queueTest1 + "\n");
            }
            //Closing the file.
            store_data.close();
        }
        
        System.out.println("Data has been succesfully stored into file." + "\n");
        
    }

    //Load passenger queue data from file.
    public static String[] loadData(String file) throws FileNotFoundException {
        
        File data = new File(file);
        Scanner read_data = new Scanner(data);
        int ctr = 0;
        
        while(read_data.hasNextLine()) {
            ctr++;
            read_data.nextLine();
        }
        
        passengers = new String[ctr];
        Scanner load_data = new Scanner(data);
        for(int i = 0; i < passengers.length; i++) {
            passengers[i] = load_data.nextLine();
        }
        return passengers;
    }

    //Run simulation and report.
    private static void run(String[] passengersTest, PassengerQueue queueTest) throws FileNotFoundException {
        
        //Load passengers.dat file.
        loadData("passengers.dat");
        
        //
        int numberOfArrivers;
        Random arrivers = new Random();
        numberOfArrivers = arrivers.nextInt(20) + 1;
        //
        do {
            for(int i = 0; i < numberOfArrivers; i++) {
               
                Passenger.getName(passengers);
                Passenger.setSecondsInQueue();
            }
            
            Passenger.display(passengersTest);
        }
        while(PassengerQueue.isEmpty());
    }
}

