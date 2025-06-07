
import java.util.ArrayList;

public class FixedArrays {
    public static void main(String[] args){
        ArrayList <Integer> myArr = new ArrayList<Integer>();
        int[] numbers = {2, 4, 12, 7, 23, 44, 5, 9, 7, 11, 10, 3};
        // Use the numbers array to print the following sums: 9, 56, 24, 100
        // The first one (9) has been done for you
        System.out.println(numbers[0] + numbers[3]);
        System.out.println(numbers[5]+numbers[7]);
        for (int i=0 ;i<myArr.size();i++){
            System.out.println(myArr.get(i));
        }
    }
}