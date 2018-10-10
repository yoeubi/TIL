const arr = [5, 1, 2, 4, 8];
const length = arr.length;
let temp;
for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - ( i + 1 ) ; j++) {
        if(arr[j+1] < arr[j]){
            // j 가 j + 1 보다 크다면 둘의 위치를 바꿔야한다. 
            // j가  j + 1 값을 가지고
            // j + 1 이 j 값을 가지면 된다.
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    console.log(arr);
}