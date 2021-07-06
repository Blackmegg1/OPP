import React, { Component } from 'react'

import MySider from './components/MySider';
import MyContent from './components/MyContent';
import * as originSrc from "./originSrc/index.js"

import './App.css';


export default class App extends Component {

  state = {
    grammarOBJ: {},
    originGrammar: "E->E+T|T\nT->T*F|F\nF->P^F|P\nP->(E)|i\n",
    expression: "i+i*i+i",
  }

  getOrginGrammar = (event) => {
    this.setState({
      originGrammar: event.target.value,
    })
  }

  resolveGrammar = () => {
    const grammarOBJ = originSrc.default(this.state.originGrammar)
    this.setState({
      originGrammar: this.state.originGrammar,
      grammarOBJ: grammarOBJ,
    })
  }

  getExpression = (event) => {
    this.setState(
      {
        originGrammar: this.state.originGrammar,
        grammarOBJ: this.state.grammarOBJ,
        expression: event.target.value,
      }
    )
  }

  resolveExpression = () => {
    let grammarOBJ = this.state.grammarOBJ;
    grammarOBJ = originSrc.resolveExpression(grammarOBJ, this.state.expression)
    this.setState({
      originGrammar: this.state.originGrammar,
      grammarOBJ: grammarOBJ,
      expression: this.state.expression,
    })
  }

  render() {
    //下面使用的都是xxxD形式的名称，因为所传数据不能与标签名相同
    const FIRSTVTD = [
      this.state.grammarOBJ.FIRSTVTdata,
      this.state.grammarOBJ.VTColumns,
    ]
    const LASTVTD = [
      this.state.grammarOBJ.LASTVTdata,
      this.state.grammarOBJ.VTColumns,
    ]
    const PRTD = [
      this.state.grammarOBJ.PRTdata,
      this.state.grammarOBJ.PRTColumns,
    ]
    const HistoryD = [
      this.state.grammarOBJ.historyData,
      this.state.grammarOBJ.historyColumns,
    ]
    return (
      <div>
        <MySider handleChange={this.getOrginGrammar} handleClick={this.resolveGrammar}
          handleChange2={this.getExpression} handleClick2={this.resolveExpression}></MySider>
        <MyContent FIRSTVTD={FIRSTVTD} LASTVTD={LASTVTD} PRTD={PRTD}></MyContent>
      </div>
    )
  }
}
