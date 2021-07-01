import * as readAndInit from './readAndInit.js'


document.getElementById('grammarBox').placeholder = "除大小写字母外的合法字符：" + readAndInit.validVT.join("  ");
document.getElementById('submit').addEventListener('click', readAndInit.default);

console.log(readAndInit.default())
