import java.io.*;
import java.util.*;

class Main {
	public static int n, m, ans;
	public static boolean[] visited = new boolean[10];

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st =  new StringTokenizer(br.readLine());
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());

		String line = br.readLine();
		if (line != null && !line.isEmpty()) {
			StringTokenizer st2 =  new StringTokenizer(line);
			for(int i = 0; i < m; i++) {
				int num = Integer.parseInt(st2.nextToken());
				visited[num] = true;
			}
		}

		go(0, 0);
		System.out.println(ans);
	}

	public static void go(int idx, int cnt) {
		if(idx == n) {
			if(cnt == m) ans++;
			return;
		}

		for(int i = 0; i <= 9; i++) {
			if(visited[i]) {
				visited[i] = false;
				go(idx + 1, cnt + 1);
				visited[i] = true;
			} else {
				go(idx + 1, cnt);
			}
		}
	}
}