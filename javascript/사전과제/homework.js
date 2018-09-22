const typeCheck = (type) => {
    if(typeof type !== 'string') throw new Error('타입이 string이 아닙니다.');
    return (value) => {
        if(value === null) return value === type;
        return typeof value === type;
    };
}

const problem1 = (...rest) => {
    if (rest.length === 0) throw new Error("파라미터가 존재하지 않습니다.");
    const checkType = rest.every(typeCheck('number'));
    if(!checkType) throw new Error('숫자가 아닌게 포함되었습니다.');
    const result = rest.reduce( (prev , current) => prev > current ? prev : current , 0 );
    return result;
}

const isPositive = (...rest) => {
    if (rest.length === 0) throw new Error("파라미터가 존재하지 않습니다.");
    const checkType = rest.every(typeCheck('number'));
    if (!checkType) throw new Error('입력값이 잘못되었습니다.');
    const result = rest.reduce((prev, current) => prev * current , 1);
    return result > 0 ? true : false;
}

const printEvenOdd = (...rest) => {
    if (rest.length === 0) throw new Error('파라미터가 존재하지 않습니다.');
    const checkType = rest.every(typeCheck('number'));
    if (!checkType) throw new Error('숫자가 아닌게 포함되었습니다.');
    const result = rest.map( item => `${item}: ${ (item % 2 === 0)? '짝수' : '홀수' }`)
    return result.join(" ");
}

const printEvenOddLoop = (end = 20) => {
    const checkType = typeCheck('number')(end);
    if(!checkType) throw new Error('숫자가 아닙니다.');
    return ( start = 1 ) => {
        const checker = typeCheck('number')(start);
        if (!checker) throw new Error("숫자가 아닙니다.");
        if(start > end){
            const temp = start;
            start = end;
            end = temp;
        }
        let result = "";
        for (let i = start ; i <= end ; i++) {
            result  += `${i}: ${i % 2 === 0 ? '짝수' : '홀수'} `;
        }
        return result;
    }
}

const printLargerFirst = (...rest) => {
    if(rest.length === 0) throw new Error('파라미터가 존재하지 않습니다.')
    const checkType = rest.every(typeCheck("number"));
    if (!checkType) throw new Error("입력값이 잘못되었습니다.");
    return rest.sort((b,a) => a - b ).join(', ');
}

const insensitiveEqual = ( str1 , str2 ) => {
    const checker = typeCheck('string');
    const flag = checker(str1) && checker(str2);
    if(!flag) throw new Error('문자열이 아닙니다.');
    const reg = new RegExp(str1, 'i');
    return reg.test(str2);
}

const hideId = (str) => {
    const check = /(^[0-9a-zA-Z]*)(@[0-9a-zA-Z]*.co.kr)/;
    return str.replace(check,function(match, p1,p2){
        return new Array(p1.length).fill('*').join('') + p2;
    });
}

const insertHyphen = (str) => {
    const flag = typeCheck('string')(str);
    if (!flag) throw new Error('문자열이 아닙니다.');
    return str.replace(/([24680])(?=[24680])/g,`$1-`)
}

const range = ( start , end ) => {
    const checker = typeCheck("number");
    const flag = checker(start) && checker(end);
    if (!flag) throw new Error('숫자가 아닙니다.');
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}


const sum = (arr) => {
    if(!Array.isArray(arr)) throw new Error('배열이 아닙니다.');
    const result = arr.reduce( (prev , current) => prev + current , 0);
    return result;
}


const randomInteger = (start , end ) => {
    const checker = typeCheck("number");
    const flag = checker(start) && checker(end);
    if (!flag) throw new Error("숫자가 아닙니다.");
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    const random = Math.floor(Math.random() * result.length);
    return result[random];
}
