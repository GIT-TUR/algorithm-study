import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            long n = Long.parseLong(br.readLine());
            long slimeExp = (n * (n + 1)) / 2;
            System.out.println(findLevel(slimeExp));
        }
    }

    public static long findLevel(long slimeExp){
        long start = 1;
        long end = 1000000000;

        while(start <= end){
            long level = (start + end) / 2;
            long levelExp = level * (level + 1);

            if(levelExp <= slimeExp) {
                start = level + 1;
            } else{
                end = level - 1;
            }
        }
        return start;
    }
}