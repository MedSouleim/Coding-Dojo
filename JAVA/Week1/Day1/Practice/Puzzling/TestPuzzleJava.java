import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;

public class PuzzleJava {

    // Method to generate and return an array with 10 random numbers between 1 and 20 inclusive.
    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> randomNumbers = new ArrayList<>();
        Random randMachine = new Random();

        for (int i = 0; i < 10; i++) {
            int randomNumber = randMachine.nextInt(20) + 1;
            randomNumbers.add(randomNumber);
        }

        return randomNumbers;
    }

    // Method to generate and return a random letter.
    public char getRandomLetter() {
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        Random randMachine = new Random();
        int randomIndex = randMachine.nextInt(26);
        return alphabet[randomIndex];
    }

    // Method to generate and return a random string of eight characters.
    public String generatePassword() {
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            password.append(getRandomLetter());
        }
        return password.toString();
    }

    // Method to create an array of random eight-character words of a given length.
    public String[] getNewPasswordSet(int length) {
        String[] passwordSet = new String[length];
        for (int i = 0; i < length; i++) {
            passwordSet[i] = generatePassword();
        }
        return passwordSet;
    }

    // Bonus: Method to shuffle an array in a pseudo-random way.
    public void shuffleArray(Object[] array) {
        Random randMachine = new Random();

        for (int i = array.length - 1; i > 0; i--) {
            int randomIndex = randMachine.nextInt(i + 1);

            // Swap the elements at randomIndex and i
            Object temp = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temp;
        }
    }

    // Additional method to display an array (for testing purposes).
    public void displayArray(Object[] array) {
        System.out.println(Arrays.toString(array));
    }

    public static void main(String[] args) {
        PuzzleJava generator = new PuzzleJava();

        // Test getTenRolls
        ArrayList<Integer> randomRolls = generator.getTenRolls();
        System.out.println("Random Rolls: " + randomRolls);

        // Test getRandomLetter
        char randomLetter = generator.getRandomLetter();
        System.out.println("Random Letter: " + randomLetter);

        // Test generatePassword
        String password = generator.generatePassword();
        System.out.println("Generated Password: " + password);

        // Test getNewPasswordSet
        String[] passwordSet = generator.getNewPasswordSet(5);
        System.out.println("Password Set: " + Arrays.toString(passwordSet));

        // Test shuffleArray
        Integer[] arrayToShuffle = {1, 2, 3, 4, 5};
        System.out.println("Original Array: " + Arrays.toString(arrayToShuffle));
        generator.shuffleArray(arrayToShuffle);
        System.out.println("Shuffled Array: " + Arrays.toString(arrayToShuffle));
    }
}

