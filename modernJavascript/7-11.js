var n = 20;
for (let a = 0; a <= n; a++) {
    for (let b = 0; b <= n; b++) {
        for (let c = 0; c <= n; c++) {
            if(a*a + b*b == c*c){
                console.log(`${a}^2 + ${b}^2 = ${c}^2`);
            }
        }
    }
}