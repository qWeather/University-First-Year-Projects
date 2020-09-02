/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package airport;

import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 *
 * @author mbeea
 */
public class PassengerQueue {
    static int queueCapacity = 20;
    static String[] queueArray;
    static int first;
    static int last;
    static int maxStayInQueue;
    static int count;
    static Scanner in = new Scanner(System.in);
    
    PassengerQueue() {
        first = 0;
        last = -1;
        count = 0;
    }

    //View passengers in queue.
    public static void display(PassengerQueue queueTest) {
        
        if(isEmpty()) {
            System.err.println("Queue is empty!");
        } else {
            System.out.println("Passengers in queue:" + "\n");
            int i = first;
            int temp = 0;
            while(i < queueCapacity) {
                if(count < queueCapacity + 1) {
                    System.out.println(queueArray[i]);
                    i++;
                    temp++;
                    if(temp == count) {
                        break;
                    }
                }
            }
        }
            
            //Number of passengers in queue.
            if(count == 1) {
                System.out.println("There is one passenger waiting in queue." + "\n");
            } else {
                System.out.println("There are " + count + " passengers waiting in queue." + "\n");
            }
    }

    //Add a passenger to queue.
    public static void add(PassengerQueue queueTest) throws FileNotFoundException {
        
        //Check if queue is full.
        if(isFull()) {
            System.err.println("Queue is full!");
        } else {
            last = (last + 1) % queueCapacity;
            queueArray[last] = Passenger.passengerName;
            count++;
            System.out.println("Passenger was successfully added to the queue." + "\n");
        }
        Airport.storeData(queueArray);
    }

    public String first() {
        if(isEmpty()){
            System.err.println("Queue is empty!");
            return "No one";
        } else {
            return queueArray[first]= Passenger.passengerName;
        }
        
    }

    //Remove a passenger from queue.
    public static void remove(PassengerQueue queueTest) throws FileNotFoundException {
        if(isEmpty()) {
            System.err.println("Queue is empty!");
        } else {
            queueArray[first] = new String();
            first = (first + 1) % queueCapacity;
            count--;
            System.out.println("Passenger was successfully removed from the queue." + "\n");
        }
        Airport.storeData(queueArray);
    }
 
    //Time spent in queue.
    public static int getMaxStay() {
        return 0;
    }

    //Empty queue.
    public static boolean isEmpty() {
        return count == 0;
    }

    //Full queue.
    public static boolean isFull() {
        return count == queueCapacity;
    }
}
