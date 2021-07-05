import * as tools from "./tools.js"

export default function getFIRSTVT(grammarOBJ) { //grammarOBJ为readAndInit返回的文法对象
    const { VTarr, VNarr, FIRSTVT, findVNindex, findVTindex, unfoldGrammarArr } = grammarOBJ;
    const stack = [];
    for (const g of unfoldGrammarArr) {
        ruleOne(g, FIRSTVT, findVNindex, findVTindex, stack);
    }
    while (stack.length !== 0) {
        let topElement = stack.pop();
        ruleTwo(topElement, FIRSTVT, findVNindex, stack, unfoldGrammarArr);
    }
    grammarOBJ["FIRSTVTdata"] = tools.generateDataSource(grammarOBJ.FIRSTVT, grammarOBJ.VTarr, grammarOBJ.VNarr); //生成FIRSTVT集后再处理加入
}


function ruleOne(g, FIRSTVT, findVNindex, findVTindex, stack) { //规则一：形如A->a……或者A->Ba……
    const gArr = g.split("->");
    const left = findVNindex(gArr[0]); //需要找到符号在对应数组中的索引
    let right = -1;
    if (!(gArr[1].length === 1 && tools.isVN(gArr[1][0]))) { //排除形如 E->T
        if (tools.isVT(gArr[1][0])) { //形如 A->a……
            right = findVTindex(gArr[1][0]);
        }
        else {
            right = findVTindex(gArr[1][1]); //形如 A->Ba……
        }
    }
    if (right !== -1) {
        FIRSTVT[left][right] = true;
        stack.push(tools.glue(left, right)); //栈中为"VT-VN","1-1","2-3"这样的索引对
    }
}

function ruleTwo(g, FIRSTVT, findVNindex, stack, unfoldGrammarArr) { //规则二：形如 a属于Q , 若P->Q…… , 则a属于P
    const gArr = g.split("-"); //g为栈中元素，是索引对
    let [Q, a] = gArr;
    Q = +Q;
    a = +a; //字符串转换为数字类型
    let P = -1;
    for (const gra of unfoldGrammarArr) {
        if (findVNindex(gra[3]) === Q && gra[0] !== gra[3]) { //找到形如 P->Q…… 且 P!=Q防止产生循环
            P = findVNindex(gra[0]);
            FIRSTVT[P][a] = true;
            stack.push(tools.glue(P, a));
        }
    }
}