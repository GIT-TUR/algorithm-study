import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        char[] arr = s.toCharArray();
        int n = 1;
        int i = 0;

        while(i < arr.length){
            String tmpN = Integer.toString(n);
            char[] tmpArr = tmpN.toCharArray();
            for(int j = 0; j < tmpArr.length; j++){
                if(tmpArr[j] == arr[i]){
                    i++; //현재 n을 구성하는 수가 입력값에 포함될 경우
                    if(i == arr.length) break; //arr 끝에 도달 할 경우 break
                }
            }
            n++;
        }

        System.out.print(n - 1);
    }
}