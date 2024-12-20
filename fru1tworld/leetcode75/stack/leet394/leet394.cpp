class Solution {
public:
    string decodeString(string s) {
        stack<int> count;
        stack<string> str;
        string temp = "";
        string ans = "";
        int num = 0; 

        for (auto x : s) {
            if (x >= 'a' && x <= 'z') {
                temp += x;
            } else if (temp != "") {
                if (count.empty()) {
                    ans += temp;
                } else {
                    if (!str.empty()) {
                        string topStr = str.top();
                        str.pop();
                        str.push(topStr + temp);
                    } else {
                        str.push(temp);
                    }
                }
                temp = "";
            }

            if (x >= '0' && x <= '9') {
                num = num * 10 + (x - '0'); 
            } else if (x == '[') {
                count.push(num); 
                num = 0; 
                str.push("");
            } else if (x == ']') {
                string decodedString = "";
                int repeatCount = count.top();
                count.pop();
                if (!str.empty()) {
                    decodedString = str.top();
                    str.pop();
                }
                string expandedString = "";
                for (int i = 0; i < repeatCount; i++) {
                    expandedString += decodedString;
                }

                if (!str.empty()) {
                    string topStr = str.top();
                    str.pop();
                    str.push(topStr + expandedString);
                } else {
                    ans += expandedString;
                }
            }
        }

        if (temp != "") {
            ans += temp;
        }

        return ans;
    }
};