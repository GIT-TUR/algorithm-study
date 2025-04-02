class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        altitudes = [0] * (len(gain) + 1)
        s = 0
        for i in range(1, len(altitudes)):
            s += gain[i - 1]
            altitudes[i] = s
        return max(altitudes)
