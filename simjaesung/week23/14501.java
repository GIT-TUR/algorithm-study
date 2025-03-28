import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		int[] day = new int[n];
		int[] money = new int[n];

		for (int i = 0; i < n; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			day[i] = Integer.parseInt(st.nextToken());
			money[i] = Integer.parseInt(st.nextToken());
		}

		int[] dp = new int[n+1];
		for (int i = 0; i < n; i++) {
			if (i + day[i] <= n){
				dp[i + day[i]] = Math.max(dp[i + day[i]], dp[i] + money[i]);
			}
			dp[i + 1] = Math.max(dp[i+1], dp[i]);
		}
		System.out.println(dp[n]);
	}
}