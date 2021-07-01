export function isUpperCase(a) { //检验是否为大写字母
    return /^[A-Z]+$/.test(a);
}

export function isLowerCase(a) { //检验是否为小写字母
    return /^[a-z]+$/.test(a);
}

export function isValid(arr) { //返回检验字符合法函数
    return function (a) {
        return (isLowerCase(a)||arr.includes(a)||isUpperCase(a));
    }
}

export function create2DArray(len1, len2, stuffing) { //创建二维数组
    let arr = new Array(len1);
    for (let i = 0; i< arr.len1; ++i) {
       arr[i] = new Array(len2);
       for (let index = 0; index < len2; ++index) {
           arr[i][index] = stuffing;
       }
    }
    return arr;
}