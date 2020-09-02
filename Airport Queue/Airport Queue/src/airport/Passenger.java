/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package airport;

import java.io.FileNotFoundException;
import java.util.Random;
import java.util.Scanner;
/**
 *
 * @author mbeea
 */
public class Passenger {
    
    static String firstname;
    static String surname;
    static int secondsInQueue;
    static Scanner in = new Scanner(System.in);
    static String passengerName;
    
    //Get passenger name.
    public static void getName(String[] passengersTest) {
        
        for (String passengersTest1 : passengersTest) {
            passengerName = passengersTest1;
        }
    }
    
    //Set passenger name.
    public static void setName() {
                        
        System.out.println("Please enter your first name: ");
        firstname = in.nextLine();
        firstname = firstname.toUpperCase();
        
        //Validation for wrong passenger name input.
        while(!firstname.matches("[A-Za-z\\s]+$")) {
            System.err.println("Please enter a valid name: ");
            firstname = in.nextLine();
            firstname = firstname.toUpperCase();
        }
        
        System.out.println("Please enter your surname: ");
        surname = in.nextLine();
        surname = surname.toUpperCase();
        
        //Validation for wrong passenger name input.
        while(!surname.matches("[A-Za-z\\s]+$")) {
            System.err.println("Please enter a valid name: ");
            surname = in.nextLine();
            surname = surname.toUpperCase();
        }
        passengerName = firstname + " " + surname;
    }
    
    //Seconds spent in queue.
    public static void getSecondsInQueue() {
        
         
    }
    
    //Set the seconds spent in queue.
    public static void setSecondsInQueue() {
        
        int waitInLine, checkTicket, nextPassenger;
        
        Random seconds = new Random();
        waitInLine = seconds.nextInt(20) + 1;
        checkTicket = seconds.nextInt(20) + 1;
        nextPassenger = seconds.nextInt(20) + 1;
    }

    //Display passengers infomartion.
    public static void display(String[] passengersTest) {
        System.out.println("Passengers Details:");
        for (String passengersTest1 : passengersTest) {
            System.out.println("Full Name: ");
            getName(passengersTest);
            System.out.println("Time spent in queue: ");
            getSecondsInQueue();
            PassengerQueue.getMaxStay();
        }
    }
}
