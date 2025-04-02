#include <bits/stdc++.h>

using namespace std;

int main(int argc, char *argv[])
{
    unsigned int count = 0;
    unsigned int monkey, dog;
    unsigned int key;
    count = 0;
    cin >> monkey >> dog;
    key = dog - monkey;
    if (key < 1) {
        cout << 0;
        return 0;
    }
    while (count * count < key) {
        ++count;
    }
    if (count * count - count < key) {
        cout << count * 2 - 1;
    }
    else {
        cout << count * 2 - 2;
    }
    return 0;
r