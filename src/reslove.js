import * as tools from "./tools.js"

export default function reslove(grammmarOBJ, enter) {
    //历史数据记录
    const steps = ["步骤"]; //步骤
    const signStack = ["符号栈"]; //符号栈
    const enterStr = ["输入串"]; //输入串
    const moves = ["动作"]; //动作
    //算法开始
    const { PRT, findVTindex } = grammmarOBJ;
    const stack = [];
    const str = [...enter, "#"]; //在输入最后补上"#"
    let k = 0;
    let j = 0;
    stack[0] = "#";
    let a = "";
    let Q = "";
    let stepIndex = 1;
    steps.push(stepIndex++);
    enterStr.push(str.join(""));
    signStack.push(stack.join(""));
    moves.push("")
    do {
        a = str.shift();
        if (tools.isVT(stack[k])) {
            j = k;
        }
        else {
            j = k - 1;
        }
        while (PRT[findVTindex(stack[j])][findVTindex(a)] === ">") {
            do {
                Q = stack[j];
                if (tools.isVT(stack[j - 1])) {
                    j = j - 1;
                }
                else {
                    j = j - 2;
                }
            } while (PRT[findVTindex(stack[j])][findVTindex(Q)] !== "<")
            //把S[j+1]...S[k]归约成某个N;
            let popStr = []
            for (let index = j + 1; index <= k; index++) {
                popStr.unshift(stack.pop());
            }
            k = j + 1;
            stack[k] = "N";

            steps.push(stepIndex++);
            enterStr.push(str.join(""));
            signStack.push(stack.join(""));
            moves.push("归约"+popStr.join(""));
        }
        if (PRT[findVTindex(stack[j])][findVTindex(a)] === "<" || PRT[findVTindex(stack[j])][findVTindex(a)] === "=") {
            k = k + 1;
            stack[k] = a;
            steps.push(stepIndex++);
            enterStr.push(str.join(""));
            signStack.push(stack.join(""));
            moves.push("移入"+a);
        }
        else {
            console.log("Error!!!!");
        }
    } while (a !== "#");
    const history = {
        steps:steps,
        signStack:signStack,
        enterStr:enterStr,
        moves:moves,
    }
    grammmarOBJ.history = history;
}