#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;
typedef long long ll;

enum Direction {
    UP = 0,
    RIGHT = 1,
    DOWN = 2,
    LEFT = 3
};

class Turtle {
public:
    int x, y;
    int max_x, max_y, min_x, min_y;
    int dir;
    
    Turtle() : x(0), y(0), max_x(0), max_y(0), min_x(0), min_y(0), dir(UP) {}
    
    void forward() {
        switch (dir) {
            case LEFT:  --x; break;
            case RIGHT: ++x; break;
            case UP:    ++y; break;
            case DOWN:  --y; break;
        }
    }
    
    void backward() {
        switch (dir) {
            case LEFT:  ++x; break;
            case RIGHT: --x; break;
            case UP:    --y; break;
            case DOWN:  ++y; break;
        }
    }
    
    void updateBounds() {
        max_x = max(max_x, x);
        min_x = min(min_x, x);
        max_y = max(max_y, y);
        min_y = min(min_y, y);
    }
    
    void turnLeft() {
        if (dir == LEFT)       dir = DOWN;
        else if (dir == DOWN)  dir = RIGHT;
        else if (dir == RIGHT) dir = UP;
        else if (dir == UP)    dir = LEFT;
    }
    
    void turnRight() {
        if (dir == LEFT)       dir = UP;
        else if (dir == UP)    dir = RIGHT;
        else if (dir == RIGHT) dir = DOWN;
        else if (dir == DOWN)  dir = LEFT;
    }
    
    int getArea() const {
        return (max_x - min_x) * (max_y - min_y);
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int t;
    cin >> t;
    vector<string> commands(t);
    for (int i = 0; i < t; ++i) {
        cin >> commands[i];
    }
    
    for (int i = 0; i < t; ++i) {
        Turtle turtle;
        for (char cmd : commands[i]) {
            if (cmd == 'F') {
                turtle.forward();
                turtle.updateBounds();
            } else if (cmd == 'B') {
                turtle.backward();
                turtle.updateBounds();
            } else if (cmd == 'L') {
                turtle.turnLeft();
            } else if (cmd == 'R') {
                turtle.turnRight();
            }
        }
        cout << turtle.getArea() << "\n";
    }
    
    return 0;
}
