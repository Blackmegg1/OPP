import * as tools from './tools.js'

export default function getLASTVT(grammarOBJ) {
    const { LASTVT, findVNindex, findVTindex, unfoldGrammarArr, } = grammarOBJ;
    const stack = [];
    for (const g of unfoldGrammarArr) {
        ruleOne(g, LASTVT, findVNindex, findVTindex, stack);
    }
    while (stack.length !== 0) {
        let topElement = stack.pop();
        ruleTwo(topElement, LASTVT, findVNindex, stack, unfoldGrammarArr);
    }
    grammarOBJ["LASTVTdata"] = tools.generateDataSource(grammarOBJ.LASTVT, grammarOBJ.VTarr, grammarOBJ.VNarr); //生成LASTVT集后再处理加入
    return grammarOBJ;
}

function ruleOne(g, LASTVT, findVNindex, findVTindex, stack) { //规则一：形如P->…a 或P->…aQ 则a属于P
    const gArr = g.split("->");
    const left = findVNindex(gArr[0]); //找到的P索引
    let right = -1; //开始找a的索引
    const len = gArr[1].length; //生成式右部的长度
    if (tools.isVT(gArr[1][len - 1])) { //形如 P->…a 
        right = findVTindex(gArr[1][len - 1]);
    }
    else if (len > 1 && tools.isVT(gArr[1][len - 2])) { //P->…aQ
        right = findVTindex(gArr[1][len - 2]);
    }
    if (right !== -1) { //找到了符合规则的a
        LASTVT[left][right] = true;
        stack.push(tools.glue(left, right)); //栈中为"VT-VN","1-1","2-3"这样的索引对
    }
}

function ruleTwo(g, LASTVT, findVNindex, stack, unfoldGrammarArr) { //规则二：形如 a属于Q , 若P->……Q , 则a属于P
    const gArr = g.split("-"); //g为栈中元素，是索引对
    let [Q, a] = gArr;
    Q = +Q;
    a = +a; //字符串转换为数字类型
    let P = -1;
    for (const gra of unfoldGrammarArr) {
        const len = gra.length;
        if (findVNindex(gra[len - 1]) === Q && gra[0] !== gra[len - 1]) { //找到形如 P->……Q 且 P!=Q防止产生循环
            P = findVNindex(gra[0]);
            LASTVT[P][a] = true;
            stack.push(tools.glue(P, a));
        }
    }
}
