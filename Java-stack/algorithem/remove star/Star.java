
public class Star {
        StringBuilder sb =new StringBuilder(s);
        for(int i = 0;i<sb.length();i++){
        if (sb.charAt(i)=='*'){
            sb.delete(i-1, i+1);
            i-=2;
        }
    }
    return (sb.toString());
        
    public static void main(String[] args) {
        String s ="ajmad***adf fsdf **";
    }
}