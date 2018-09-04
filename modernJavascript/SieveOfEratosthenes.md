# 에라토스테네스의 체 쌍둥이 소수

## 코드

```
var n = parseInt(prompt('n?'));
var p = [];
for(var i = 2 ; i <= n ; i++ ) p[i] = true;
var max = Math.floor(Math.sqrt(n));
var x = 2;
while (x <= max) {
    for (let i = 2 * x ; i < n; i+=x) {
        p[i] = false;
    }
    while(!p[++x]);
}
for(var i = 2; i <= n-2 ; i++ ){
    if(p[i] && p[i+2]){
        document.write(`${i} ,${i+2}<br>`)
    }
}
```

## 풀이


에라토스테네스의 체를 사용해 1 ~ n 까자의 소수를 알려면 n까지 모든 수의 배수로 나누지 않아도 된다. 

만약 어떤수 x 가 a * b 라면 a 와 b 중 적어도 하나는 제곱근 n 이하이다. 

즉 n 보다작은 합성수 x는 제곱근 n 이하의 수의 배수로만 해도 된다. 

쌍둥이 소수는 두 수의 차가 2인 소수의 쌍을 말한다 ex) 3 과 5 , 11 과 13이 쌍둥이 소수입니다.


