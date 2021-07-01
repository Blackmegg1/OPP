export function isUpperCase(a) { //检验是否为大写字母
    return /^[A-Z]+$/.test(a);
}

export function isLowerCase(a) { //检验是否为小写字母
    return /^[a-z]+$/.test(a);
}

export const validVT = ['+', '-', '*', '|', '(', ')', '^']; //文法中除大小写字母外的合法字符
export function isValid(a) { //检验是否为合法VT
        return (isLowerCase(a)||validVT.includes(a));
}

export function create2DArray(len1, len2, stuffing) { //创建二维数组
    let arr = [];
    for (let i = 0; i < len1; i++) {
        arr[i] = [];
        for (let j = 0; j < len2; j++) {
            arr[i][j] = stuffing;
        }
    }
    return arr;
}


export function findIndexInArray(arr) { //在数组中找索引
    return function(a) {
        return arr.indexOf(a);
    }
}

export function glue(left, right) { //合并后放入栈中
    return (left + "-" + right);
}