#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

struct TrieNode {
    unordered_map<char, TrieNode*> children;
};

class Trie {
public:
    TrieNode* root;
    Trie() {
        root = new TrieNode();
    }
    
    void insert(const string &s) {
        TrieNode* node = root;
        for (char c : s) {
            if (node->children.find(c) == node->children.end())
                node->children[c] = new TrieNode();
            node = node->children[c];
        }
    }
    
    bool search(const string &s) {
        TrieNode* node = root;
        for (char c : s) {
            if (node->children.find(c) == node->children.end())
                return false;
            node = node->children[c];
        }
        return true;
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    
    int n, m;
    cin >> n >> m;
    
    Trie trie;
    for (int i = 0; i < n; i++) {
        string str;
        cin >> str;
        trie.insert(str); 
    }
    
    int cnt = 0;
    for (int i = 0; i < m; i++) {
        string query;
        cin >> query;
        if (trie.search(query)) cnt++;
    }
    
    cout << cnt;
    return 0;
}
