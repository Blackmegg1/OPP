import * as tools from "./tools.js"

export default function resloveGrammar() { // 读取文法并解析
    const originGrammar = document.getElementById('grammarBox').value;
    const grammarArr = originGrammar.split('\n').map(item => item.replace(/\s*/g, "")); //去除输入字符串中所有空格后的文法数组
    let grammarOBJ = null;
    if (!isOG(grammarArr)) {
        return grammarOBJ;
    }
    else {
        const unfoldGrammarArr = unfoldGrammar(grammarArr);
        const VTarr = getVTarr(grammarArr);
        const VNarr = getVNarr(grammarArr);
        const FIRSTVT = tools.create2DArray(VNarr.length, VTarr.length, false);
        const LASTVT = tools.create2DArray(VNarr.length, VTarr.length, false);
        const PRT = tools.create2DArray(VTarr.length + 1, VTarr.length + 1, "*"); //(VTarr+1)*2
        grammarOBJ = { //处理后的文法对象
            unfoldGrammarArr: unfoldGrammarArr, //展开的文法数组
            VTarr: VTarr,
            VNarr: VNarr,
            VTnum: VTarr.length,
            VNnum: VNarr.length,
            PRT: PRT, //优先关系表
            FIRSTVT: FIRSTVT,
            LASTVT: LASTVT,
            findVTindex: tools.findIndexInArray(VTarr),
            findVNindex: tools.findIndexInArray(VNarr),
            history: {}, //处理历史
        }
    }
    grammarOBJ["VTColumns"] = tools.generateColumns(grammarOBJ.VTarr); //供antd的Table组件展示FIRSTVT、LASTVT使用
    grammarOBJ["PRTVT"] = [...grammarOBJ.VTarr, "#"]; //VT数组增加 #
    grammarOBJ["PRTColumns"] = tools.generateColumns(grammarOBJ.PRTVT); //供antd的Table组件展示PRT使用，注意这里传递的是PRTVT
    grammarOBJ["historyColumns"] = tools.generateColumns(["steps", "enterStr", "signStack", "moves"]) // 供antd的Table组件展示History使用
    return grammarOBJ;
}


function isOG(grammarArr) { //判断是否是算符文法：任何产生式的右部都不含两个相继（并列）的非终结符
    try {
        for (let grammar of grammarArr) {
            grammar = grammar.split("->");
            if ((!tools.isVN(grammar[0])) || (grammar[0].length !== 1)) { //判断产生式左部是否为单独的大写字母
                throw new Error("Wrong left! The mistake lies in: " + grammar.join("->"));
            }
            const left = grammar[1];
            let zero = "";
            for (let index of left) {
                if (tools.isVN(zero) && tools.isVN(index)) { //判断是否有连续的非终结符
                    throw new Error("Consecutive VN! The mistake lies in: " + zero + index);
                }
                if (tools.isVT(zero) && tools.isVT(index) && zero !== "|" && index !== "|") { //判断是否有连续的终结符
                    throw new Error("Consecutive VT! The mistake lies in: " + zero + index);
                }
                if (!tools.isVT(index) && !tools.isVN(index)) {
                    throw new Error("Illegal VT! The mistake lies in: " + index);
                }
                zero = index;
            }
        }
    } catch (err) {
        console.log(err.message);
        return false;
    }
    return true;
}

function getVNarr(grammarArr) { //取得非终结符数组
    let VTarr = new Set();
    for (let grammar of grammarArr) {
        grammar = grammar.split("->");
        VTarr.add(grammar[0]);
    }
    return Array.from(VTarr);
}

function getVTarr(grammarArr) { //取得终结符数组
    let VNarr = new Set();
    for (let grammar of grammarArr) {
        grammar = grammar.split("->");
        for (const c of [...grammar[1]]) {
            if (!tools.isVN(c)) {
                VNarr.add(c);
            }
        }

    }
    VNarr.delete("|");
    return Array.from(VNarr);
}

function unfoldGrammar(grammarArr) { //展开文法
    const unfoldArr = new Set();
    for (const g of grammarArr) {
        const gArr = g.split("|"); //使用|分隔开
        unfoldArr.add(gArr[0]);
        const gHead = gArr[0].slice(0, 3);
        for (let i = 1; i < gArr.length; i++) {
            unfoldArr.add(gHead + gArr[i]);
        }
    }
    return [...unfoldArr];
}
