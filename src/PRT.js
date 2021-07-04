import * as tools from "./tools.js"

export default function generatePRT(grammarOBJ) { //生成优先关系表
    const { PRT, FIRSTVT, LASTVT, findVTindex, findVNindex, unfoldGrammarArr, VTnum, VTarr, VNarr } = grammarOBJ; //解构赋值
    for (const g of unfoldGrammarArr) {
        const gArr = g.split("->");
        const gRight = gArr[1]; //产生式右部
        const len = gRight.length //产生式右部长度
        if (len === 1) continue; //跳过右部仅有一个符号的产生式
        for (let i = 0; i < len; i++) {
            if (tools.isVT(gRight[i]) && tools.isVT(gRight[i + 1])) {
                PRT[findVTindex(gRight[i])][findVTindex(gRight[i + 1])] = "=";
            }
            if (i <= len - 2 && tools.isVT(gRight[i]) && tools.isVT(gRight[i + 2]) && tools.isVN(gRight[i + 1])) {
                PRT[findVTindex(gRight[i])][findVTindex(gRight[i + 2])] = "=";
            }
            if (tools.isVT(gRight[i]) && tools.isVN(gRight[i + 1])) {
                for (let index = 0; index < FIRSTVT[findVNindex(gRight[i + 1])].length; index++) {
                    if (FIRSTVT[findVNindex(gRight[i + 1])][index]) {
                        if (PRT[findVTindex(gRight[i])][index] !== "*") {
                            throw new Error("Duplicate priority relationship! The mistake lies in:" + gRight[i] + ":" + VTarr[index]);
                        } //处理冲突的优先关系
                        PRT[findVTindex(gRight[i])][index] = "<";
                    }
                }
            }
            if (tools.isVN(gRight[i]) && tools.isVT(gRight[i + 1])) {
                for (let index = 0; index < LASTVT[findVNindex(gRight[i])].length; index++) {
                    if (LASTVT[findVNindex(gRight[i])][index]) {
                        if (PRT[index][findVTindex(gRight[i + 1])] !== "*") {
                            throw new Error("Duplicate priority relationship! The mistake lies in:" + VTarr[index] + ":" + gRight[i + 1]);
                        } //处理冲突的优先关系
                        PRT[index][findVTindex(gRight[i + 1])] = ">"; //这里index在前
                    }
                }
            }
        }
    }
    for (let i = 0; i < FIRSTVT[findVNindex("E")].length; i++) { //处理表格中的#行列
        if (FIRSTVT[findVNindex("E")][i]) {
            PRT[VTnum][i] = "<";
        }
    }
    for (let i = 0; i < LASTVT[findVNindex("E")].length; i++) {
        if (LASTVT[findVNindex("E")][i]) {
            PRT[i][VTnum] = ">";
        }
    }
    PRT[VTnum][VTnum] = "=";

    // tools.decorate2DArray(PRT, [...VTarr, "#"], [...VTarr, "#"]);
    // tools.decorate2DArray(FIRSTVT, VTarr, VNarr);
    // tools.decorate2DArray(LASTVT, VTarr, VNarr); 
    // console.log("FIRSTVT:", FIRSTVT); //打印了FIRSTVT，调试用
    // console.log("LASTVT:", LASTVT); //打印了LASTVT，调试用
    // console.log("PRT:", PRT);
}
