public class ConditionalsAndOperators {
    public static void main(String[] args){
        int temperature = 85;
        boolean isCloudy = false;
        if (temperature == 400 && isCloudy){
            System.out.println("it might snow");
        }else if(isCloudy){
            System.out.println("it rain");
        }else {
            System.out.println("sun");
        }
        int day = 8;
        switch(day){
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("There are only seven days in a week...");
    }
}}

