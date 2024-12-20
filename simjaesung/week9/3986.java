import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int ans = 0;
        int n = Integer.parseInt(br.readLine());

        while(n-- > 0){
            String s = br.readLine();
            Stack<Character> stack = new Stack<>();
            char[] arr = s.toCharArray();

            for(char c : arr){
                if(stack.isEmpty()) stack.push(c);
                else if(stack.peek() == c) stack.pop();
                else stack.push(c);
            }
            if(stack.isEmpty()) ans++;
        }

        System.out.print(ans);
    }
}