import java.io.*;
import java.util.*;

class Main {
	public static int v,c,sum;
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());

		List<int[]> beers = new ArrayList<>();
		for (int i = 0; i < k; i++) {
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			v = Integer.parseInt(st2.nextToken());
			c = Integer.parseInt(st2.nextToken());
			beers.add(new int[]{v, c});
		}

		// 맥주를 기준으로 오름차순 정렬
		beers.sort(Comparator.comparingInt(a -> a[1]));

		PriorityQueue<Integer> pq = new PriorityQueue<>();
		for (int[] beer : beers) {
			v = beer[0]; c = beer[1];
			pq.offer(v); sum += v;

			if (pq.size() > n) sum -= pq.poll();
			if (pq.size() == n && sum >= m) {
				System.out.println(c);
				return;
			}
		}

		System.out.println(-1);
	}
}