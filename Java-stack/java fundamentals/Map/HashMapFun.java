import java.util.HashMap;
import java.util.Set;

public class HashMapFun {
        public static void main(String[] args) {

    HashMap<String, String> userMap = new HashMap<String, String>();
    userMap.put("song1", "love");
    userMap.put("song2", "dream");
    userMap.put("song3", "love5");
    userMap.put("song4", "beeats");
    
    // String name = userMap.get("song1");
    // System.out.println(name);

    Set<String> keys = userMap.keySet();
        for(String key : keys) {
            System.out.println(key+"-"+userMap.get(key));
        }


}
}