

const validVT = ['+', '-', '*', '/', '(', ')', '^']; //文法中除大小写字母外的合法字符

function resloveGrammar() { // 读取文法并解析
    const originGrammar = document.getElementById('grammarBox').value;
    const grammarArr = originGrammar.split('\n').map(item => item.replace(/\s*/g,"")); //去除输入字符串中所有空格，达到标准形式
    console.log(grammarArr)
    isOG(grammarArr);
}

function isOG(grammarArr) { //判断是否是算符文法：任何产生式的右部都不含两个相继（并列）的非终结符
    try {
        for (let grammar of grammarArr) {
            grammar = grammar.split("->");
            if (!/^[A-Z]+$/.test(grammar[0])) { //判断产生式左部是否为大写字母
                throw new Error("It's not an operator grammar! The mistake lies in: " + grammar.join("->"));
            }
        }
    } catch(err) {
        console.log(err.message)
    }

}

document.getElementById('grammarBox').placeholder = "除大小写字母外的合法字符：" + validVT.join("  ");
document.getElementById('submit').addEventListener('click', resloveGrammar);