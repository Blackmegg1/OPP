import * as readAndInit from './readAndInit.js'
import * as FIRSTVT from './FIRSTVT.js'
import * as LASTVT from './LASTVT.js'
import * as PRT from './PRT.js'
import * as resolve from './resolve.js'

export default function resolveGrammar(originGrammar) {
    let grammarOBJ = readAndInit.default(originGrammar);
    FIRSTVT.default(grammarOBJ);
    LASTVT.default(grammarOBJ);
    PRT.default(grammarOBJ);
    return grammarOBJ;
}

export function resolveExpression(grammarOBJ, expression) {
    resolve.default(grammarOBJ, expression);
    return grammarOBJ;
}


//"i+i*i+i"
//"i+(i*i)+i"