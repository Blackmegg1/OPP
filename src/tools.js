export function isVN(a) { //检验是否为大写字母,！！！代码中直接用于检测是否是VN
    return /^[A-Z]+$/.test(a);
}

export function isLowerCase(a) { //检验是否为小写字母
    return /^[a-z]+$/.test(a);
}

export const validVT = ['+', '-', '*', '|', '(', ')', '^', '#']; //文法中除大小写字母外的合法字符
export function isVT(a) { //检验是否为合法VT
    if (a === undefined) {
        return false;
    }
    if (a.length !== 1) {
        return false;
    }
    return (isLowerCase(a) || validVT.includes(a));
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
    return function (a) {
        if (a === "#") {
            return arr.length
        }
        return arr.indexOf(a);
    }
}

export function glue(left, right) { //合并后放入栈中
    return (left + "-" + right);
}

export function decorate2DArray(arrArr, colNameArr, rowNameArr) { //为二维数组加上行头和列头，调试使用，实际代码中没有使用到
    arrArr.map((item, index) => {
        item.unshift(rowNameArr[index]);
    })
    const newColNameArr = [" ", ...colNameArr];
    arrArr.unshift(newColNameArr);
}

export function generateColumns(arr) { //生成符合antd的Table组件要求的columns数组
    let columns = [];
    columns = arr.map(item => {
        const obj = {};
        obj["title"] = item;
        obj["dataIndex"] = item;
        obj["key"] = item;
        return obj;
    });
    if (columns[0].title !== "steps") { //historyColumns不需要添加第一行
        columns.unshift({ //生成第一行
            title: "  ",
            dataIndex: "rowName",
            key: -1,
        })
    }
    return columns;
}

export function generateDataSource(arrArr, colNameArr, rowNameArr) { //根据二维数组生成符合antd的Table组件要求的dataSource
    let dataSource = [];
    dataSource = arrArr.map(
        (item, index) => {
            const obj = {};
            obj["rowName"] = rowNameArr[index]; //生成第一行
            obj.key = rowNameArr[index];
            for (let i = 0; i < item.length; i++) {
                obj[colNameArr[i]] = item[i];
            }
            return obj;
        }
    )
    return dataSource;
}

export function generateHistoryDataSource(history) {
    let dataSource = [];
    const len = history.moves.length;
    for (let i = 0; i < len; i++) {
        const obj = {};
        obj.key = i;
        obj.steps = history.steps[i];
        obj.moves = history.moves[i];
        obj.enterStr = history.enterStr[i];
        obj.signStack = history.signStack[i];
        dataSource.push(obj);
    }
    return dataSource;
}