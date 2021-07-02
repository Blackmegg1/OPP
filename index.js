import * as readAndInit from './src/readAndInit.js'
import * as FIRSTVT from './src/FIRSTVT.js'
import * as LASTVT from './src/LASTVT.js'
import * as tools from './src/tools.js'

document.getElementById('grammarBox').placeholder = "除大小写字母外的合法字符：" + tools.validVT.join("  ");
document.getElementById('submit').addEventListener('click', main);

function main() {
    const grammarOBJ = readAndInit.default();
    FIRSTVT.default(grammarOBJ);
    LASTVT.default(grammarOBJ);
}