function maxChickensProtected(n, k, positions) {
    let chickensrescue = 0;
    let start = 0;

    for (let i = 0; i < n; i++) {
        
        if (positions[i] - positions[start] > k) {
            start++;
            i--;  
        } else {
            
             chickensrescue = i - start + 1;
            if (chickensrescue > n) {
                chickensrescue = n;
            }
        }
        
    }

    return chickensrescue;
}
const n = 6;
const k = 10;
const positions = [1, 11, 30, 34, 35, 37];

console.log(maxChickensProtected(n, k, positions));  
