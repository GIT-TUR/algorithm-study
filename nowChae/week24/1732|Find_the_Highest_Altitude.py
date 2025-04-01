class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        points = [0]

        for g in gain:
            points.append(points[-1] + g)
        return max(points)

        