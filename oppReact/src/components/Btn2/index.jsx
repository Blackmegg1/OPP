import React, { Component } from 'react'
import { Button } from 'antd'

import "./index.css"
export default class Btn2 extends Component {

    render() {
        const { handleClick2 } = this.props;
        return (
            <Button type="default" shape="round" size={'large'} className="myBtn2" onClick={handleClick2}>算符优先分析</Button>
        )
    }
}
